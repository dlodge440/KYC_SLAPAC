import { useNavigate } from 'react-router-dom';
import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import Icon from '../components/Icon';
import { content } from '../data/content';

export default function Thresholds() {
  const d = content.thresholds;
  const navigate = useNavigate();

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <div className="card">
        <div className="section-title">{d.t25.title}</div>
        {d.t25.body.map((p, i) => (
          <p key={i} style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        <ul>
          {d.t25.list.map((li, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="section-title">{d.t50.title}</div>
        {d.t50.body.map((p, i) => (
          <p key={i} style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
      <Callout callout={d.practical} />
      <Callout callout={d.intermediate} />
      <button className="btn primary" style={{ marginTop: 16 }} onClick={() => navigate('/calculator')}>
        <Icon name="calc" /> {d.calcCta}
      </button>
    </>
  );
}
