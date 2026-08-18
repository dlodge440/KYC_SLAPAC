export interface Callout {
  type: 'rule' | 'danger' | 'warn';
  html: string;
}

export interface QuickLink {
  route: string;
  title: string;
  desc: string;
}

export interface UIContent {
  searchPlaceholder: string;
  brandT1: string;
  brandT2: string;
  skipLink: string;
  roleAllLabel: string;
  nav: Record<string, string>;
  roles: Record<string, string>;
  common: Record<string, string>;
}

export interface HomeContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  issuedLine: string;
  version: string;
  sectionTitle: string;
  body: string[];
  callouts: Callout[];
  quickLinksTitle: string;
  quickLinks: QuickLink[];
  footNote: string;
}

export interface FaqItem {
  q: string;
  a: string;
  id?: string;
}
export interface FaqContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  items: FaqItem[];
}

export interface KycRequiredRow {
  situation: string;
  requirement: string;
}
export interface KycRequiredContent {
  title: string;
  eyebrow: string;
  question: string;
  subtitle: string;
  alwaysTitle: string;
  alwaysRows: KycRequiredRow[];
  notRequiredTitle: string;
  notRequiredText: string;
  note: Callout;
}

export type RoleKey = 'broker' | 'backoffice' | 'finance' | 'compliance' | 'cso';
export type RaciCellValue = 'does' | 'triggers' | 'consulted' | 'flags' | 'receives' | 'decides' | 'informed';
export interface RaciTask {
  task: string;
  cells: Partial<Record<RoleKey, RaciCellValue>>;
}
export interface RaciContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  roleOrder: RoleKey[];
  officerNote: string;
  tasks: RaciTask[];
  cellLabel: Record<RaciCellValue, string>;
}

export interface Phase {
  id: string;
  name: string;
  label: string;
  timing: string;
  html: string;
  callout?: Callout;
}
export interface PhasesContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  list: Phase[];
}

export interface ThresholdBlock25 {
  title: string;
  body: string[];
  list: string[];
}
export interface ThresholdBlock50 {
  title: string;
  body: string[];
}
export interface ThresholdsContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  t25: ThresholdBlock25;
  t50: ThresholdBlock50;
  practical: Callout;
  intermediate: Callout;
  calcCta: string;
}

export type RegistryLevel = 'yes' | 'partial' | 'no';
export interface RegistryRow {
  id: string;
  jurisdiction: string;
  obtainable: string;
  coverage: string;
  level: RegistryLevel;
}
export interface RegistriesContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  columns: string[];
  rows: RegistryRow[];
  warningsTitle: string;
  warnings: string[];
}

export interface ChecklistItem {
  name: string;
  proves: string;
  from: string;
  validity: string;
}
export interface ProofOfResidence {
  title: string;
  lead: string;
  acceptable: string[];
}
export interface CompanyStep2Item {
  name: string;
  detail: string;
}
export interface DocTableRow {
  doc: string;
  sub: string;
  proves: string;
  when: string;
}
export interface ChecklistsContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  individualTitle: string;
  individualItems: ChecklistItem[];
  proofOfResidence: ProofOfResidence;
  companyTitle: string;
  companyStep1: string;
  companyStep2Title: string;
  companyStep2: CompanyStep2Item[];
  reminders: Callout[];
  howDeepTitle: string;
  howDeep: string;
  howDeepWarn: Callout;
  docTableTitle: string;
  docTable: DocTableRow[];
  listedTitle: string;
  listedItems: string[];
  listedNote: string;
  trustTitle: string;
  trustItems: string[];
  trustNote: string;
  spvTitle: string;
  spvItems: string[];
}

export interface PaymentsRoleBlock {
  title: string;
  role: RoleKey;
  html: string;
}
export interface PaymentsContent {
  title: string;
  eyebrow: string;
  broker: PaymentsRoleBlock;
  backoffice: PaymentsRoleBlock;
  finance: PaymentsRoleBlock;
  cash: Callout;
  banks: { html: string };
}

export interface ScreeningSource {
  name: string;
  url: string;
}
export interface ScreeningContent {
  title: string;
  eyebrow: string;
  sources: ScreeningSource[];
  sourcesNote: string;
  evidenceTitle: string;
  evidenceHtml: string;
  readingTitle: string;
  readingSteps: string[];
  stopNote: Callout;
  whenTitle: string;
  when: string[];
}

export interface EscalationTrackA {
  title: string;
  sub: string;
  intro: string;
  steps: string[];
  mandatory: string;
  note: string;
}
export interface EscalationTrackB {
  title: string;
  sub: string;
  intro: string;
  triggersTitle: string;
  triggers: string[];
  note: string;
}
export interface EscalationContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  trackA: EscalationTrackA;
  trackB: EscalationTrackB;
}

export interface ToolkitTemplate {
  id: string;
  title: string;
  subject: string;
  lead?: string;
  body: string;
  bodyZh?: string;
}
export interface ToolkitContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  templates: ToolkitTemplate[];
}

export interface RecordsFields {
  clientName: string;
  boatModel: string;
  isBR: string;
  date: string;
}
export interface RecordsContent {
  title: string;
  eyebrow: string;
  whereTitle: string;
  whereHtml: string;
  boxPath: string;
  folderTitle: string;
  folderPattern: string;
  folderBRTitle: string;
  folderPatternBR: string;
  folderNote: string;
  registerNote: string;
  retentionTitle: string;
  retentionHtml: string;
  generatorTitle: string;
  generatorNote: string;
  fields: RecordsFields;
}

export interface WizardStep1Option {
  id: string;
  title: string;
  sub: string;
}
export interface WizardDoc {
  name: string;
  proves: string;
  from?: string;
  validity: string;
}
export interface WizardContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  restart: string;
  step1: { title: string; options: WizardStep1Option[] };
  step2Jurisdiction: { title: string; sub: string };
  step2Individuals: { title: string; yes: string; no: string };
  step3: { title: string; sub: string; yes: string; no: string };
  step4: {
    title: string;
    yes: string;
    no: string;
    followup: string;
    followupYes: string;
    followupNo: string;
  };
  resultsTitle: string;
  resultsSub: string;
  contextNotesTitle: string;
  tradeInNote: Callout;
  brandRepNote: Callout;
  brandRepStaleNote: Callout;
  brandRepFreshNote: Callout;
  alwaysReminders: Callout[];
  registryFirstNote: string;
  docs: Record<string, WizardDoc>;
}

export interface CalculatorPanel {
  title: string;
  note: string;
}
export interface CalculatorContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  intro: string;
  addRootPrompt: string;
  panel25: CalculatorPanel;
  panel50: CalculatorPanel;
  verdictAbove: string;
  verdictBelow: string;
  verdictBlocked: string;
  verdictFlag: string;
  verdictClear: string;
  officerNote: string;
  resetBtn: string;
}

export interface RoleTimelineContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  timelineTitle: string;
  timelineNote: string;
  markers: Record<string, string>;
  raciTitle: string;
  detailTitle: string;
}

export interface SiteContent {
  lang: string;
  dir: string;
  ui: UIContent;
  home: HomeContent;
  faq: FaqContent;
  kycRequired: KycRequiredContent;
  raci: RaciContent;
  phases: PhasesContent;
  thresholds: ThresholdsContent;
  registries: RegistriesContent;
  checklists: ChecklistsContent;
  payments: PaymentsContent;
  screening: ScreeningContent;
  escalation: EscalationContent;
  toolkit: ToolkitContent;
  records: RecordsContent;
  wizard: WizardContent;
  calculator: CalculatorContent;
  roleTimeline: RoleTimelineContent;
}
