export type CalcNodeType = 'root' | 'company' | 'person';

export interface CalcNode {
  id: string;
  name: string | null;
  type: CalcNodeType;
  pct: number | string;
  listed: boolean;
  children: CalcNode[];
  effectivePct?: number;
  aggListedPct?: number;
  blocked?: boolean;
  flagged?: boolean;
}

let counter = 0;
export function createId(): string {
  counter += 1;
  return 'n' + counter + '_' + Math.random().toString(36).slice(2, 7);
}

export function createRoot(): CalcNode {
  return { id: 'root', name: null, type: 'root', pct: 100, listed: false, children: [], effectivePct: 100 };
}

export function findNode(node: CalcNode, id: string): CalcNode | null {
  if (node.id === id) return node;
  for (const c of node.children) {
    const f = findNode(c, id);
    if (f) return f;
  }
  return null;
}

export function findParent(node: CalcNode, id: string, parent: CalcNode | null = null): CalcNode | null {
  if (node.id === id) return parent;
  for (const c of node.children) {
    const f = findParent(c, id, node);
    if (f) return f;
  }
  return null;
}

export function addChild(root: CalcNode, parentId: string): CalcNode {
  const newChild: CalcNode = { id: createId(), name: '', type: 'company', pct: 0, listed: false, children: [] };
  function walk(node: CalcNode): CalcNode {
    if (node.id === parentId) return { ...node, children: [...node.children, newChild] };
    return { ...node, children: node.children.map(walk) };
  }
  return walk(root);
}

export function removeNode(root: CalcNode, id: string): CalcNode {
  function walk(node: CalcNode): CalcNode {
    return { ...node, children: node.children.filter((c) => c.id !== id).map(walk) };
  }
  return walk(root);
}

export function updateNode(root: CalcNode, id: string, patch: Partial<CalcNode>): CalcNode {
  function walk(node: CalcNode): CalcNode {
    if (node.id === id) return { ...node, ...patch };
    return { ...node, children: node.children.map(walk) };
  }
  return walk(root);
}

/** 25% threshold: multiplicative down the chain, each branch independent. */
export function computeEffective(node: CalcNode, parentEff: number): CalcNode {
  const effectivePct = node.type === 'root' ? 100 : parentEff * ((Number(node.pct) || 0) / 100);
  return { ...node, effectivePct, children: node.children.map((c) => computeEffective(c, effectivePct)) };
}

/** 50% OFAC blocking rule: cascades level by level, listed stakes summed per level. */
export function computeBlocking(node: CalcNode): CalcNode {
  const children = node.children.map(computeBlocking);
  const sum = children.reduce((acc, c) => acc + (c.listed || c.blocked ? Number(c.pct) || 0 : 0), 0);
  return { ...node, children, aggListedPct: sum, blocked: sum >= 50, flagged: sum >= 25 && sum < 50 };
}

export function recompute(root: CalcNode): CalcNode {
  return computeBlocking(computeEffective(root, 100));
}

export function flattenPaths(node: CalcNode, path: CalcNode[] = []): CalcNode[][] {
  let out: CalcNode[][] = [];
  node.children.forEach((c) => {
    const p = [...path, c];
    out.push(p);
    out = out.concat(flattenPaths(c, p));
  });
  return out;
}

export interface CalcLevel {
  owner: CalcNode;
  contributors: CalcNode[];
}

export function collectLevels(node: CalcNode): CalcLevel[] {
  let out: CalcLevel[] = [];
  if (node.children.length) {
    if ((node.aggListedPct ?? 0) > 0) {
      out.push({ owner: node, contributors: node.children.filter((c) => c.listed || c.blocked) });
    }
    node.children.forEach((c) => {
      out = out.concat(collectLevels(c));
    });
  }
  return out;
}
