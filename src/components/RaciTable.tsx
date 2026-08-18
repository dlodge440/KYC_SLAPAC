import { useState } from 'react';
import { content } from '../data/content';
import { useAppState } from '../state/AppState';
import type { RoleKey } from '../types/content';

export default function RaciTable({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const { role } = useAppState();
  const [onlyRoleChecked, setOnlyRoleChecked] = useState(false);
  const d = content.raci;
  const roleOrder = d.roleOrder;
  const onlyRole = role !== 'all' ? (role as RoleKey) : null;
  const filterOn = variant === 'compact' ? !!onlyRole : onlyRoleChecked && !!onlyRole;
  const rows = filterOn ? d.tasks.filter((r) => r.cells && r.cells[onlyRole as RoleKey]) : d.tasks;

  return (
    <>
      {variant === 'full' && (
        <div className="raci-filter-bar">
          <label className="small muted" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={filterOn}
              disabled={!onlyRole}
              onChange={(e) => setOnlyRoleChecked(e.target.checked)}
            />
            {content.ui.common.showOnlyRole}
          </label>
          {!onlyRole && (
            <span className="small muted">({content.ui.roleAllLabel} — select a role above to filter)</span>
          )}
        </div>
      )}
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th style={{ width: '26%' }}>Task</th>
              {roleOrder.map((r) => (
                <th
                  key={r}
                  className="center"
                  style={variant === 'full' && r === onlyRole ? { color: 'var(--accent)' } : undefined}
                >
                  {content.ui.roles[r]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.task}</td>
                {roleOrder.map((rid) => {
                  const v = r.cells[rid];
                  const isSelf = rid === onlyRole;
                  const strong = v === 'does' || v === 'decides';
                  return (
                    <td key={rid} className="center" style={isSelf ? { background: 'var(--accent-soft)' } : undefined}>
                      {v ? (
                        <span className={strong ? undefined : 'muted'} style={strong ? { fontWeight: 700 } : undefined}>
                          {d.cellLabel[v]}
                        </span>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {variant === 'full' && (
        <div className="callout" style={{ marginTop: 16 }}>
          {d.officerNote}
        </div>
      )}
      {variant === 'compact' && !onlyRole && (
        <p className="muted small" style={{ marginTop: 10 }}>
          {content.ui.roleAllLabel} — select a role above to filter this table and highlight your responsibilities
          across the whole site.
        </p>
      )}
    </>
  );
}
