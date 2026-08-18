import PageHead from '../components/PageHead';
import { content } from '../data/content';
import { useAppState } from '../state/AppState';
import type { RegistryLevel } from '../types/content';

function LevelPill({ level }: { level: RegistryLevel }) {
  const label = level === 'yes' ? 'Yes' : level === 'partial' ? 'Partial' : 'No';
  return <span className={`pill ${level}`}>{label}</span>;
}

export default function Registries() {
  const d = content.registries;
  const { filters, setFilters } = useAppState();
  const filter = filters.registryLevel || 'all';
  const rows = filter === 'all' ? d.rows : d.rows.filter((r) => r.level === filter);

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <div className="raci-filter-bar">
        <div className="pillselect">
          <select value={filter} onChange={(e) => setFilters({ ...filters, registryLevel: e.target.value })}>
            <option value="all">All jurisdictions</option>
            <option value="yes">Full coverage</option>
            <option value="partial">Partial coverage</option>
            <option value="no">No coverage</option>
          </select>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{d.columns[0]}</th>
              <th>{d.columns[1]}</th>
              <th>{d.columns[2]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>
                  <strong>{r.jurisdiction}</strong>
                </td>
                <td>{r.obtainable}</td>
                <td>
                  <LevelPill level={r.level} /> {r.coverage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="section-block" style={{ marginTop: 24 }}>
        <div className="section-title">{d.warningsTitle}</div>
        {d.warnings.map((w, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <div className="callout warn" dangerouslySetInnerHTML={{ __html: w }} />
          </div>
        ))}
      </div>
    </>
  );
}
