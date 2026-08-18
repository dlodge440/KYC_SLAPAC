import { useMemo, useState } from 'react';
import PageHead from '../components/PageHead';
import RoleBadge from '../components/RoleBadge';
import RoleBlock from '../components/RoleBlock';
import { content } from '../data/content';

export default function Records() {
  const d = content.records;
  const [date, setDate] = useState('');
  const [client, setClient] = useState('');
  const [boat, setBoat] = useState('');
  const [isBR, setIsBR] = useState(false);

  const preview = useMemo(() => {
    let ym = 'YYYY MM';
    if (date) {
      const [y, m] = date.split('-');
      ym = `${y} ${m}`;
    }
    if (isBR) {
      return `${ym} KYC BR ${client.trim() || '[Brand Representative name]'}`;
    }
    return `${ym} KYC ${client.trim() || '[Client Name]'}_${boat.trim() || '[Boat model and hull number]'}`;
  }, [date, client, boat, isBR]);

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} />
      <RoleBlock roleId="backoffice" className="card">
        <div className="section-title">
          <RoleBadge roleId="backoffice" /> {d.whereTitle}
        </div>
        <p>{d.whereHtml}</p>
        <div className="folder-preview">{d.boxPath}</div>
        <p style={{ marginTop: 14 }}>{d.folderTitle}</p>
        <div className="folder-preview mono">{d.folderPattern}</div>
        <p style={{ marginTop: 14 }}>{d.folderBRTitle}</p>
        <div className="folder-preview mono">{d.folderPatternBR}</div>
        <div className="callout" style={{ marginTop: 14 }} dangerouslySetInnerHTML={{ __html: d.folderNote }} />
        <p className="muted small" style={{ marginTop: 10 }}>
          {d.registerNote}
        </p>
      </RoleBlock>
      <div className="card">
        <div className="section-title">{d.retentionTitle}</div>
        <p dangerouslySetInnerHTML={{ __html: d.retentionHtml }} />
      </div>
      <div className="card">
        <div className="section-title">{d.generatorTitle}</div>
        <p className="muted small" style={{ marginBottom: 10 }}>
          {d.generatorNote}
        </p>
        <div className="folder-gen">
          <input type="month" aria-label={d.fields.date} value={date} onChange={(e) => setDate(e.target.value)} />
          <input
            type="text"
            placeholder={d.fields.clientName}
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <input type="text" placeholder={d.fields.boatModel} value={boat} onChange={(e) => setBoat(e.target.value)} />
        </div>
        <label className="small" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <input type="checkbox" checked={isBR} onChange={(e) => setIsBR(e.target.checked)} /> {d.fields.isBR}
        </label>
        <div className="folder-preview">{preview}</div>
      </div>
    </>
  );
}
