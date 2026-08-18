import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import { content } from '../data/content';

export default function Screening() {
  const d = content.screening;
  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} />
      <div className="card">
        <div className="section-title">Sources</div>
        <ul>
          {d.sources.map((s, i) => (
            <li key={i}>
              <a href={s.url} target="_blank" rel="noopener">
                {s.name}
              </a>{' '}
              — <span className="mono small muted">{s.url}</span>
            </li>
          ))}
        </ul>
        <p className="muted small" style={{ marginTop: 6 }}>
          {d.sourcesNote}
        </p>
      </div>
      <div className="card">
        <div className="section-title">{d.evidenceTitle}</div>
        <p dangerouslySetInnerHTML={{ __html: d.evidenceHtml }} />
      </div>
      <div className="card">
        <div className="section-title">{d.readingTitle}</div>
        <ol>
          {d.readingSteps.map((s, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input type="checkbox" style={{ marginTop: 4 }} />
                {s}
              </label>
            </li>
          ))}
        </ol>
        <Callout callout={d.stopNote} />
      </div>
      <div className="card">
        <div className="section-title">{d.whenTitle}</div>
        <ul>
          {d.when.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
