import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import Icon from '../components/Icon';
import { content } from '../data/content';
import { useAppState } from '../state/AppState';
import { useRoleHighlight } from '../hooks/useRoleHighlight';

export default function Phases() {
  const d = content.phases;
  const { phaseId } = useParams();
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const { role } = useAppState();
  const containerRef = useRef<HTMLDivElement>(null);
  useRoleHighlight(role, containerRef);

  useEffect(() => {
    if (phaseId) setOpen((prev) => ({ ...prev, [phaseId]: true }));
  }, [phaseId]);

  return (
    <div ref={containerRef}>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      {d.list.map((ph) => {
        const isOpen = open[ph.id] !== false;
        return (
          <div className={`accordion-item${isOpen ? ' open' : ''}`} key={ph.id} id={`ph-${ph.id}`}>
            <button
              className="accordion-head"
              aria-expanded={isOpen}
              onClick={() => setOpen((prev) => ({ ...prev, [ph.id]: prev[ph.id] === false }))}
            >
              <span>
                <strong>{ph.name}</strong> — {ph.label} <span className="muted small">({ph.timing})</span>
              </span>
              <span className="chev">
                <Icon name="chevron" />
              </span>
            </button>
            <div className="accordion-body">
              <div dangerouslySetInnerHTML={{ __html: ph.html }} />
              {ph.callout && <Callout callout={ph.callout} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
