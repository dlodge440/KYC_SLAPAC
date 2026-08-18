export const ROUTES_TOP = ['phases', 'raci'] as const;
export const ROUTES_TOOLS = ['wizard', 'calculator', 'role-timeline', 'toolkit'] as const;
export const ROUTES_REF = [
  'faq',
  'thresholds',
  'registries',
  'checklists',
  'payments',
  'screening',
  'escalation',
  'records',
] as const;

export const NAV_KEY: Record<string, string> = {
  wizard: 'wizard',
  calculator: 'calculator',
  'role-timeline': 'roleTimeline',
  faq: 'faq',
  'kyc-required': 'kycRequired',
  raci: 'raci',
  phases: 'phases',
  thresholds: 'thresholds',
  registries: 'registries',
  checklists: 'checklists',
  payments: 'payments',
  screening: 'screening',
  escalation: 'escalation',
  toolkit: 'toolkit',
  records: 'records',
};
