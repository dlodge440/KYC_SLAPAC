import PageHead from '../components/PageHead';
import { content } from '../data/content';

export default function Escalation() {
  const d = content.escalation;
  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <div className="track-cards">

        <div className="track-card trackB">
          <div className="tc-sub">{d.trackB.sub}</div>
          <h3>{d.trackB.title}</h3>
          <p>{d.trackB.intro}</p>
          <p style={{ marginTop: 10, fontWeight: 700 }}>{d.trackB.triggersTitle}</p>
          <ul>
            {d.trackB.triggers.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <div className="tc-note" dangerouslySetInnerHTML={{ __html: d.trackB.note }} />
        </div>
        <div className="track-card trackA">
          <div className="tc-sub">{d.trackA.sub}</div>
          <h3>{d.trackA.title}</h3>
          <p>{d.trackA.intro}</p>
          <ol>
            {d.trackA.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <p style={{ marginTop: 10, fontWeight: 700 }}>{d.trackA.mandatory}</p>
          <div className="tc-note" dangerouslySetInnerHTML={{ __html: d.trackA.note }} />
        </div>
      </div>
    </>
  );
}
