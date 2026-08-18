import { content } from '../data/content';
import { ROLE_IDS, useAppState, type RoleFilter } from '../state/AppState';
import SearchBox from './SearchBox';

export default function Topbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { role, setRole } = useAppState();

  return (
    <header className="topbar">
      <button className="menu-toggle" aria-label="Toggle menu" onClick={onMenuToggle}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <div className="brand">
        <div className="brand-text">
          <span className="t1">{content.ui.brandT1}</span>
          <span className="t2">{content.ui.brandT2}</span>
        </div>
      </div>
      <SearchBox />
      <div className="topbar-controls">
        <div className="pillselect">
          <select aria-label="Role" value={role} onChange={(e) => setRole(e.target.value as RoleFilter)}>
            <option value="all">{content.ui.roleAllLabel}</option>
            {ROLE_IDS.map((r) => (
              <option key={r} value={r}>
                {content.ui.roles[r]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
