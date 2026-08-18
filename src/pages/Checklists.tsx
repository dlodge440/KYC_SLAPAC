import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import { content } from '../data/content';

export default function Checklists() {
  const d = content.checklists;
  const t = content;

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />

      <div className="card">
        <div className="section-title">{d.individualTitle}</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>{t.ui.common.provesLabel}</th>
                <th>{t.ui.common.fromLabel}</th>
                <th>{t.ui.common.validity}</th>
              </tr>
            </thead>
            <tbody>
              {d.individualItems.map((it, i) => (
                <tr key={i}>
                  <td>
                    <strong>{it.name}</strong>
                  </td>
                  <td>{it.proves}</td>
                  <td>{it.from}</td>
                  <td>{it.validity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="callout" style={{ marginTop: 14 }}>
          <strong>{d.proofOfResidence.title}</strong> {d.proofOfResidence.lead}
          <ul style={{ marginTop: 8 }}>
            {d.proofOfResidence.acceptable.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="section-title">{d.companyTitle}</div>
        <p style={{ marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: d.companyStep1 }} />
        <p style={{ fontWeight: 700, marginBottom: 8 }}>{d.companyStep2Title}</p>
        {d.companyStep2.map((it, i) => (
          <div className="result-doc" key={i}>
            <h4>{it.name}</h4>
            {it.detail && <p className="small muted">{it.detail}</p>}
          </div>
        ))}
        {d.reminders.map((r, i) => (
          <Callout key={i} callout={r} />
        ))}
        <div style={{ marginTop: 16 }}>
          <p style={{ fontWeight: 700, marginBottom: 6 }}>{d.howDeepTitle}</p>
          <p style={{ marginBottom: 10 }}>{d.howDeep}</p>
          <Callout callout={d.howDeepWarn} />
        </div>
      </div>

      <div className="card">
        <div className="section-title">{d.listedTitle}</div>
        <ul>
          {d.listedItems.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <p className="muted small" style={{ marginTop: 8 }}>
          {d.listedNote}
        </p>
      </div>

      <div className="card">
        <div className="section-title">{d.trustTitle}</div>
        <ul>
          {d.trustItems.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <p style={{ marginTop: 8 }}>{d.trustNote}</p>
      </div>

      <div className="card">
        <div className="section-title">{d.spvTitle}</div>
        <ul>
          {d.spvItems.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <div className="section-title">{d.docTableTitle}</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>{t.ui.common.provesLabel}</th>
                <th>When we need it</th>
              </tr>
            </thead>
            <tbody>
              {d.docTable.map((r, i) => (
                <tr key={i}>
                  <td>
                    <strong>{r.doc}</strong>
                    {r.sub && <div className="small muted">{r.sub}</div>}
                  </td>
                  <td>{r.proves}</td>
                  <td>{r.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
