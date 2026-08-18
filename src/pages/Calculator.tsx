import PageHead from '../components/PageHead';
import { content } from '../data/content';
import { useAppState } from '../state/AppState';
import { collectLevels, flattenPaths, recompute, type CalcNode, type CalcNodeType } from '../lib/calculator';

function CalcNodeRow({
  node,
  onAdd,
  onRemove,
  onUpdate,
}: {
  node: CalcNode;
  onAdd: (parentId: string) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, patch: Partial<CalcNode>) => void;
}) {
  const t = content;

  function handlePctChange(raw: string) {
    let v = raw.replace(/[^0-9.]/g, '');
    const dot = v.indexOf('.');
    if (dot !== -1) v = v.slice(0, dot + 1) + v.slice(dot + 1).replace(/\./g, '');
    let num = v === '' || v === '.' ? 0 : parseFloat(v);
    if (isNaN(num)) num = 0;
    if (num > 100) {
      num = 100;
      v = '100';
    }
    onUpdate(node.id, { pct: v });
  }

  return (
    <div className="tree-node">
      <div className={`node-row${node.listed ? ' listed' : ''}`}>
        <input
          type="text"
          value={node.name ?? ''}
          placeholder={node.type === 'person' ? t.ui.common.person : t.ui.common.company}
          onChange={(e) => onUpdate(node.id, { name: e.target.value })}
        />
        <select value={node.type} onChange={(e) => onUpdate(node.id, { type: e.target.value as CalcNodeType })}>
          <option value="company">{t.ui.common.company}</option>
          <option value="person">{t.ui.common.person}</option>
        </select>
        <input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          style={{ width: 64 }}
          value={String(node.pct)}
          onFocus={(e) => e.target.select()}
          onChange={(e) => handlePctChange(e.target.value)}
        />{' '}
        <span className="nr-label">{t.ui.common.ofParent}</span>
        <label className="nr-label" style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={node.listed}
            onChange={(e) => onUpdate(node.id, { listed: e.target.checked })}
          />{' '}
          {t.ui.common.markListed}
        </label>
        <span className="pct-badge" title="Effective % of Buyer">
          {(node.effectivePct || 0).toFixed(1)}%
        </span>
        <div className="node-flags">
          <button className="btn sm ghost" onClick={() => onAdd(node.id)}>
            {t.ui.common.addOwner}
          </button>
          <button className="btn sm danger-o" onClick={() => onRemove(node.id)}>
            {t.ui.common.remove}
          </button>
        </div>
      </div>
      {node.children.map((c) => (
        <CalcNodeRow key={c.id} node={c} onAdd={onAdd} onRemove={onRemove} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

function CalcDynamic() {
  const { calcRoot, calcAdd, calcRemove, calcUpdate, calcReset } = useAppState();
  const d = content.calculator;
  const t = content;
  const root = recompute(calcRoot);

  const paths = flattenPaths(root);
  const p25rows = paths.filter((p) => {
    const leaf = p[p.length - 1];
    return leaf.name || (Number(leaf.pct) || 0) > 0;
  });

  const rootVerdict = root.blocked
    ? { cls: 'blocked', txt: d.verdictBlocked }
    : root.flagged
      ? { cls: 'stop', txt: d.verdictFlag }
      : { cls: 'ok', txt: d.verdictClear };
  const levels = collectLevels(root);

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <strong>{t.ui.common.buyer}</strong>
        <button className="btn sm danger-o" onClick={calcReset}>
          {d.resetBtn}
        </button>
      </div>
      <div className="tree-root">
        {root.children.length ? (
          root.children.map((c) => (
            <CalcNodeRow key={c.id} node={c} onAdd={calcAdd} onRemove={calcRemove} onUpdate={calcUpdate} />
          ))
        ) : (
          <p className="muted small" style={{ margin: '10px 0' }}>
            {d.addRootPrompt}
          </p>
        )}
      </div>
      <div style={{ marginTop: 10 }}>
        <button className="btn sm" onClick={() => calcAdd('root')}>
          {t.ui.common.addOwner}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 18 }}>
        <div className="result-panel pct25">
          <h3>{d.panel25.title}</h3>
          <p className="small muted" style={{ marginBottom: 10 }}>
            {d.panel25.note}
          </p>
          {p25rows.length ? (
            p25rows.map((p, i) => {
              const leaf = p[p.length - 1];
              const chain = p.map((n) => `${Number(n.pct) || 0}%`).join(' × ');
              const above = (leaf.effectivePct ?? 0) >= 25;
              return (
                <div key={i}>
                  <div className="calc-chain">
                    {leaf.name || t.ui.common.company}: {chain} ={' '}
                    <strong>{(leaf.effectivePct ?? 0).toFixed(1)}%</strong>
                  </div>
                  <div className={`verdict ${above ? 'stop' : 'ok'}`}>{above ? d.verdictAbove : d.verdictBelow}</div>
                  <div style={{ height: 8 }} />
                </div>
              );
            })
          ) : (
            <p className="small muted">—</p>
          )}
        </div>
        <div className="result-panel pct50">
          <h3>{d.panel50.title}</h3>
          <p className="small muted" style={{ marginBottom: 10 }}>
            {d.panel50.note}
          </p>
          <div className={`verdict ${rootVerdict.cls}`} style={{ marginBottom: 10 }}>
            {rootVerdict.txt}
          </div>
          {levels.length ? (
            levels.map((lv, i) => {
              const ownerName = lv.owner.id === 'root' ? t.ui.common.buyer : lv.owner.name || t.ui.common.company;
              const names = lv.contributors.map((c) => `${c.name || t.ui.common.person} (${c.pct}%)`).join(' + ');
              const verdict = lv.owner.blocked
                ? { cls: 'blocked', txt: d.verdictBlocked }
                : lv.owner.flagged
                  ? { cls: 'stop', txt: d.verdictFlag }
                  : null;
              return (
                <div key={i}>
                  <div className="calc-chain">
                    {ownerName} ← {names} = <strong>{(lv.owner.aggListedPct ?? 0).toFixed(1)}%</strong>
                  </div>
                  {verdict && <div className={`verdict ${verdict.cls}`}>{verdict.txt}</div>}
                  <div style={{ height: 8 }} />
                </div>
              );
            })
          ) : (
            <p className="small muted">—</p>
          )}
        </div>
      </div>
      <p className="small muted" style={{ marginTop: 14 }}>
        {d.officerNote}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, marginTop: 10 }}>
        <details className="card" style={{ padding: '14px 18px' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: 13 }}>
            Worked examples from the guidelines
          </summary>
          <div className="small muted" style={{ marginTop: 8, lineHeight: 1.7 }}>
            30% × 50% = 15% → below 25% threshold, stop documenting that branch.
            <br />
            Three listed persons at 20% + 20% + 15% at the same level = 55% → that company is blocked.
            <br />A listed person owning 50% of a company that owns 50% of the Buyer → blocked, cascading level by
            level.
          </div>
        </details>
      </div>
    </div>
  );
}

export default function Calculator() {
  const d = content.calculator;
  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <p className="muted" style={{ marginBottom: 16 }}>
        {d.intro}
      </p>
      <CalcDynamic />
    </>
  );
}
