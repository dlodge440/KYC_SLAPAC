import { useNavigate } from 'react-router-dom';
import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import Icon from '../components/Icon';
import { content } from '../data/content';

export default function Home() {
  const navigate = useNavigate();
  const d = content.home;

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <p className="muted small" style={{ marginTop: -14, marginBottom: 20 }}>
        {d.issuedLine} — {d.version}
      </p>
      <div className="card">
        <div className="section-title">{d.sectionTitle}</div>
        {d.body.map((p, i) => (
          <p key={i} style={{ marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {d.callouts.map((c, i) => (
            <Callout key={i} callout={c} />
          ))}
        </div>
      </div>
      <div className="section-block" style={{ marginTop: 26 }}>
        <div className="section-title">{d.quickLinksTitle}</div>
        <div className="quicklinks">
          {d.quickLinks.map((q) => (
            <button
              key={q.route}
              className="tool-card"
              style={{ textAlign: 'left', cursor: 'pointer' }}
              onClick={() => navigate(`/${q.route}`)}
            >
              <div className="ti">
                <Icon name={q.route === 'wizard' ? 'wizard' : q.route === 'calculator' ? 'calc' : 'role'} />
              </div>
              <h3>{q.title}</h3>
              <p>{q.desc}</p>
            </button>
          ))}
        </div>
      </div>
      <p className="muted small" style={{ marginTop: 30, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
        {d.footNote}
      </p>
    </>
  );
}
