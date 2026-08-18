import type { Callout, SiteContent, WizardDoc } from '../types/content';

export type BuyerType = 'individual' | 'private' | 'listed' | 'trust' | 'spv';

export interface WizardAnswers {
  buyerType: BuyerType | null;
  jurisdiction: string | null;
  individualsAlready: boolean | null;
  tradeIn: boolean | null;
  brandRep: boolean | null;
  brandRepFresh: boolean | null;
}

export type WizardStepId = 'type' | 'jurisdiction' | 'tradein' | 'brandrep' | 'results';

export function initialWizardAnswers(): WizardAnswers {
  return {
    buyerType: null,
    jurisdiction: null,
    individualsAlready: null,
    tradeIn: null,
    brandRep: null,
    brandRepFresh: null,
  };
}

export function wizardStepsSequence(answers: WizardAnswers): WizardStepId[] {
  const seq: WizardStepId[] = ['type'];
  if (answers.buyerType === 'private') seq.push('jurisdiction');
  seq.push('tradein', 'brandrep', 'results');
  return seq;
}

export function currentWizardStepId(answers: WizardAnswers, step: number): WizardStepId {
  const order = wizardStepsSequence(answers);
  return order[Math.min(step - 1, order.length - 1)];
}

export function wizardCanAdvance(sid: WizardStepId, answers: WizardAnswers): boolean {
  if (sid === 'type') return !!answers.buyerType;
  if (sid === 'jurisdiction') {
    return answers.buyerType !== 'private' || (!!answers.jurisdiction && answers.individualsAlready !== null);
  }
  if (sid === 'tradein') return answers.tradeIn !== null;
  if (sid === 'brandrep') return answers.brandRep !== null && (!answers.brandRep || answers.brandRepFresh !== null);
  return true;
}

export function wizardSetField<K extends keyof WizardAnswers>(
  answers: WizardAnswers,
  field: K,
  value: WizardAnswers[K],
): WizardAnswers {
  const next: WizardAnswers = { ...answers, [field]: value };
  if (field === 'buyerType') {
    next.jurisdiction = null;
    next.individualsAlready = null;
  }
  if (field === 'brandRep' && value !== true) {
    next.brandRepFresh = null;
  }
  return next;
}

export interface WizardResultNote {
  type: Callout['type'] | 'plain';
  html: string;
}

export interface WizardResults {
  docs: WizardDoc[];
  notes: WizardResultNote[];
}

export function computeWizardResults(answers: WizardAnswers, content: SiteContent): WizardResults {
  const d = content.wizard;
  const registries = content.registries.rows;
  const jur = registries.find((r) => r.id === answers.jurisdiction);
  const docs: WizardDoc[] = [];

  if (answers.buyerType === 'individual') {
    docs.push(d.docs.passport, d.docs.proofResidence);
  } else if (answers.buyerType === 'private') {
    docs.push({
      ...d.docs.registryDoc,
      from: jur ? `${jur.jurisdiction} — ${jur.coverage}` : d.docs.registryDoc.from,
    });
    if (jur && jur.level === 'no') {
      docs.push(d.docs.coi);
    } else if (jur && jur.level === 'partial') {
      docs.push({ ...d.docs.coi, name: `${d.docs.coi.name} (${content.ui.common.offshoreOnly}?)` });
    }
    if (answers.individualsAlready === false) {
      docs.push(d.docs.chart, d.docs.intermediateDocs);
    }
    docs.push(d.docs.directorId, d.docs.ownerId);
  } else if (answers.buyerType === 'listed') {
    docs.push(d.docs.listingEvidence, d.docs.listedDirectorId);
  } else if (answers.buyerType === 'trust') {
    docs.push(d.docs.trustDeed, d.docs.trustPersonsId);
  } else if (answers.buyerType === 'spv') {
    docs.push(d.docs.spvDocs, d.docs.spvLink, d.docs.directorId, d.docs.ownerId, d.docs.spvBoth);
  }

  const notes: WizardResultNote[] = [];
  if (answers.buyerType === 'private') notes.push({ type: 'plain', html: d.registryFirstNote });
  if (answers.tradeIn) notes.push(d.tradeInNote);
  if (answers.brandRep) {
    notes.push(d.brandRepNote);
    notes.push(answers.brandRepFresh ? d.brandRepFreshNote : d.brandRepStaleNote);
  }

  return { docs, notes };
}
