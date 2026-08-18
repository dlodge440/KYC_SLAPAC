import { useState } from 'react';
import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import RaciTable from '../components/RaciTable';
import { content } from '../data/content';

export default function RoleTimeline() {
  const d = content.roleTimeline;
  const ph = content.phases;
  const [openPhase, setOpenPhase] = useState<string | null>(null);

  const activePhase = openPhase ? ph.list.find((p) => p.id === openPhase) : null;

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <div className="card">
        <div className="section-title">{d.timelineTitle}</div>
        <p className="muted small" style={{ marginBottom: 4 }}>
          {d.timelineNote}
        </p>
        <div className="timeline">
          {ph.list.map((p) => (
            <button
              key={p.id}
              className={`tl-phase${openPhase === p.id ? ' active' : ''}`}
              onClick={() => setOpenPhase(openPhase === p.id ? null : p.id)}
            >
              <div className="tl-line" />
              <div className="tl-dot" />
              <div className="tl-name">{p.name}</div>
              <div className="tl-marks">{p.label}</div>
              <div className="tl-marks" style={{ marginTop: 2 }}>
                {d.markers[p.id]}
              </div>
            </button>
          ))}
        </div>
      </div>
      {activePhase && (
        <div className="card fade-in">
          <div className="section-title">
            {d.detailTitle}: {activePhase.name} — {activePhase.label}
          </div>
          <div dangerouslySetInnerHTML={{ __html: activePhase.html }} />
          {activePhase.callout && <Callout callout={activePhase.callout} />}
        </div>
      )}
      <div className="section-title" style={{ marginTop: 22 }}>
        {d.raciTitle}
      </div>
      <RaciTable variant="compact" />
    </>
  );
}
