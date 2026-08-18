import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import { content } from '../data/content';
import { useAppState } from '../state/AppState';
import {
  computeWizardResults,
  currentWizardStepId,
  wizardCanAdvance,
  wizardStepsSequence,
  type WizardResultNote,
} from '../lib/wizard';

function WizardResults() {
  const { wizardAnswers } = useAppState();
  const d = content.wizard;
  const t = content;
  const { docs, notes } = computeWizardResults(wizardAnswers, content);

  function renderNote(n: WizardResultNote, i: number) {
    if (n.type === 'plain') {
      return (
        <p className="muted small" key={i}>
          {n.html}
        </p>
      );
    }
    return <Callout key={i} callout={n as { type: 'rule' | 'danger' | 'warn'; html: string }} />;
  }

  return (
    <>
      <div className="card">
        <div className="section-title">{d.resultsTitle}</div>
        <p className="muted small" style={{ marginBottom: 14 }}>
          {d.resultsSub}
        </p>
        {docs.map((doc, i) => (
          <div className="result-doc" key={i}>
            <div className="rd-top">
              <h4>{doc.name}</h4>
            </div>
            <div className="rd-meta">
              {doc.proves && (
                <span>
                  <strong>{t.ui.common.provesLabel}:</strong> {doc.proves}
                </span>
              )}
              {doc.from && (
                <span>
                  <strong>{t.ui.common.fromLabel}:</strong> {doc.from}
                </span>
              )}
              {doc.validity && (
                <span>
                  <strong>{t.ui.common.validity}:</strong> {doc.validity}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {notes.length > 0 && (
        <div className="card">
          <div className="section-title">{d.contextNotesTitle}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{notes.map(renderNote)}</div>
        </div>
      )}
      {wizardAnswers.buyerType === 'private' && (
        <div className="card">
          <div className="section-title">{t.ui.common.reminderTitle}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.alwaysReminders.map((r, i) => (
              <Callout key={i} callout={r} />
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 12 }}>
            {t.ui.common.officerReminder}
          </p>
        </div>
      )}
    </>
  );
}

export default function Wizard() {
  const d = content.wizard;
  const t = content;
  const { wizardStep, wizardAnswers, wizardSet, wizardNext, wizardBack, wizardRestart } = useAppState();
  const a = wizardAnswers;

  const stepsSeq = wizardStepsSequence(a);
  const sid = currentWizardStepId(a, wizardStep);
  const stepIdx = stepsSeq.indexOf(sid);
  const canNext = wizardCanAdvance(sid, a);
  const isLast = sid === 'results';

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <div className="stepper">
        {stepsSeq.map((s, i) => (
          <div key={s} className={`st ${i < stepIdx ? 'done' : i === stepIdx ? 'current' : ''}`} />
        ))}
      </div>

      {sid === 'type' && (
        <div className="card">
          <div className="section-title">{d.step1.title}</div>
          <div className="chip-select">
            {d.step1.options.map((o) => (
              <button
                key={o.id}
                className={`chip-opt${a.buyerType === o.id ? ' selected' : ''}`}
                onClick={() => wizardSet('buyerType', o.id)}
              >
                <div className="co-title">{o.title}</div>
                <div className="co-sub">{o.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {sid === 'jurisdiction' && (
        <>
          <div className="card">
            <div className="section-title">{d.step2Jurisdiction.title}</div>
            <p className="muted small" style={{ marginBottom: 12 }}>
              {d.step2Jurisdiction.sub}
            </p>
            <div className="chip-select">
              {content.registries.rows.map((r) => (
                <button
                  key={r.id}
                  className={`chip-opt${a.jurisdiction === r.id ? ' selected' : ''}`}
                  onClick={() => wizardSet('jurisdiction', r.id)}
                >
                  <div className="co-title">{r.jurisdiction}</div>
                  <div className="co-sub">{r.coverage}</div>
                </button>
              ))}
            </div>
          </div>
          {a.jurisdiction && (
            <div className="card">
              <div className="section-title">{d.step2Individuals.title}</div>
              <div className="chip-select">
                <button
                  className={`chip-opt${a.individualsAlready === true ? ' selected' : ''}`}
                  onClick={() => wizardSet('individualsAlready', true)}
                >
                  {d.step2Individuals.yes}
                </button>
                <button
                  className={`chip-opt${a.individualsAlready === false ? ' selected' : ''}`}
                  onClick={() => wizardSet('individualsAlready', false)}
                >
                  {d.step2Individuals.no}
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {sid === 'tradein' && (
        <div className="card">
          <div className="section-title">{d.step3.title}</div>
          <p className="muted small" style={{ marginBottom: 12 }}>
            {d.step3.sub}
          </p>
          <div className="chip-select">
            <button
              className={`chip-opt${a.tradeIn === true ? ' selected' : ''}`}
              onClick={() => wizardSet('tradeIn', true)}
            >
              {d.step3.yes}
            </button>
            <button
              className={`chip-opt${a.tradeIn === false ? ' selected' : ''}`}
              onClick={() => wizardSet('tradeIn', false)}
            >
              {d.step3.no}
            </button>
          </div>
        </div>
      )}

      {sid === 'brandrep' && (
        <>
          <div className="card">
            <div className="section-title">{d.step4.title}</div>
            <div className="chip-select">
              <button
                className={`chip-opt${a.brandRep === true ? ' selected' : ''}`}
                onClick={() => wizardSet('brandRep', true)}
              >
                {d.step4.yes}
              </button>
              <button
                className={`chip-opt${a.brandRep === false ? ' selected' : ''}`}
                onClick={() => wizardSet('brandRep', false)}
              >
                {d.step4.no}
              </button>
            </div>
          </div>
          {a.brandRep && (
            <div className="card">
              <div className="section-title">{d.step4.followup}</div>
              <div className="chip-select">
                <button
                  className={`chip-opt${a.brandRepFresh === true ? ' selected' : ''}`}
                  onClick={() => wizardSet('brandRepFresh', true)}
                >
                  {d.step4.followupYes}
                </button>
                <button
                  className={`chip-opt${a.brandRepFresh === false ? ' selected' : ''}`}
                  onClick={() => wizardSet('brandRepFresh', false)}
                >
                  {d.step4.followupNo}
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {sid === 'results' && <WizardResults />}

      <div className="wizard-footer">
        <div>
          {stepIdx > 0 ? (
            <button className="btn" onClick={wizardBack}>
              {t.ui.common.back}
            </button>
          ) : (
            <span />
          )}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn ghost" onClick={wizardRestart}>
            {d.restart}
          </button>
          {!isLast && (
            <button className="btn primary" disabled={!canNext} onClick={wizardNext}>
              {t.ui.common.next}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
