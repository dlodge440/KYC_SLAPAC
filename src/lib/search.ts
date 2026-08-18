import type { SiteContent } from '../types/content';

export interface SearchIndexEntry {
  route: string;
  param: string;
  title: string;
  text: string;
}

export function stripTags(html: string): string {
  return String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function buildSearchIndex(d: SiteContent): SearchIndexEntry[] {
  const idx: SearchIndexEntry[] = [];
  const push = (route: string, title: string, text: string, param?: string) =>
    idx.push({ route, title, text: stripTags(text), param: param || '' });

  push('home', d.home.title, d.home.body.join(' ') + ' ' + d.home.callouts.map((c) => c.html).join(' '));
  d.faq.items.forEach((it) => push('faq', it.q, it.q + ' ' + it.a));
  d.kycRequired.alwaysRows.forEach((r) => push('faq', r.situation, r.situation + ' ' + r.requirement));
  push('faq', d.kycRequired.notRequiredTitle, d.kycRequired.notRequiredText + ' ' + d.kycRequired.note.html);
  d.raci.tasks.forEach((r) => push('raci', r.task, r.task));
  d.phases.list.forEach((p) => push('phases', p.name + ' — ' + p.label, p.html, p.id));
  push('thresholds', d.thresholds.t25.title, d.thresholds.t25.body.join(' ') + ' ' + d.thresholds.t25.list.join(' '));
  push(
    'thresholds',
    d.thresholds.t50.title,
    d.thresholds.t50.body.join(' ') + ' ' + d.thresholds.practical.html + ' ' + d.thresholds.intermediate.html,
  );
  d.registries.rows.forEach((r) =>
    push('registries', r.jurisdiction, r.jurisdiction + ' ' + r.obtainable + ' ' + r.coverage),
  );
  d.registries.warnings.forEach((w) => push('registries', d.registries.warningsTitle, w));
  push(
    'checklists',
    d.checklists.individualTitle,
    d.checklists.individualItems.map((i) => i.name + ' ' + i.proves).join(' ') +
      ' ' +
      d.checklists.proofOfResidence.lead +
      ' ' +
      d.checklists.proofOfResidence.acceptable.join(' '),
  );
  push(
    'checklists',
    d.checklists.companyTitle,
    d.checklists.companyStep1 +
      ' ' +
      d.checklists.companyStep2.map((i) => i.name + ' ' + i.detail).join(' ') +
      ' ' +
      d.checklists.reminders.map((r) => r.html).join(' ') +
      ' ' +
      d.checklists.howDeep,
  );
  push(
    'checklists',
    d.checklists.docTableTitle,
    d.checklists.docTable.map((r) => r.doc + ' ' + r.proves + ' ' + r.when).join(' '),
  );
  push('checklists', d.checklists.listedTitle, d.checklists.listedItems.join(' '));
  push('checklists', d.checklists.trustTitle, d.checklists.trustItems.join(' ') + ' ' + d.checklists.trustNote);
  push('checklists', d.checklists.spvTitle, d.checklists.spvItems.join(' '));
  push('payments', d.payments.broker.title, d.payments.broker.html);
  push('payments', d.payments.backoffice.title, d.payments.backoffice.html);
  push(
    'payments',
    d.payments.finance.title,
    d.payments.finance.html + ' ' + d.payments.cash.html + ' ' + d.payments.banks.html,
  );
  push(
    'screening',
    d.screening.evidenceTitle,
    d.screening.evidenceHtml + ' ' + d.screening.sources.map((s) => s.name).join(' '),
  );
  push('screening', d.screening.readingTitle, d.screening.readingSteps.join(' ') + ' ' + d.screening.stopNote.html);
  push('screening', d.screening.whenTitle, d.screening.when.join(' '));
  push(
    'escalation',
    d.escalation.trackA.title + ' — ' + d.escalation.trackA.sub,
    d.escalation.trackA.intro + ' ' + d.escalation.trackA.steps.join(' ') + ' ' + d.escalation.trackA.note,
  );
  push(
    'escalation',
    d.escalation.trackB.title + ' — ' + d.escalation.trackB.sub,
    d.escalation.trackB.intro + ' ' + d.escalation.trackB.triggers.join(' ') + ' ' + d.escalation.trackB.note,
  );
  d.toolkit.templates.forEach((tp) => push('toolkit', tp.title, (tp.subject || '') + ' ' + tp.body));
  push(
    'records',
    d.records.title,
    d.records.boxPath +
      ' ' +
      d.records.folderPattern +
      ' ' +
      d.records.folderPatternBR +
      ' ' +
      d.records.folderNote +
      ' ' +
      d.records.retentionHtml,
  );
  push('wizard', d.wizard.title, d.wizard.subtitle);
  push('calculator', d.calculator.title, d.calculator.subtitle);
  push('role-timeline', d.roleTimeline.title, d.roleTimeline.subtitle);

  return idx;
}

export interface SearchResult extends SearchIndexEntry {
  snippet: string;
}

export function searchIndex(idx: SearchIndexEntry[], query: string, limit = 10): SearchResult[] {
  const ql = query.trim().toLowerCase();
  if (ql.length < 2) return [];
  const results = idx.filter((it) => (it.title + ' ' + it.text).toLowerCase().includes(ql)).slice(0, limit);
  return results.map((r) => {
    const pos = r.text.toLowerCase().indexOf(ql);
    let snippet = r.text;
    if (pos >= 0) {
      const start = Math.max(0, pos - 40);
      snippet = (start > 0 ? '…' : '') + r.text.slice(start, pos + ql.length + 70) + '…';
    }
    return { ...r, snippet };
  });
}
