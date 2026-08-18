import { NavLink } from 'react-router-dom';
import Icon, { SIDEBAR_ICON_MAP } from './Icon';
import { content } from '../data/content';
import { NAV_KEY, ROUTES_REF, ROUTES_TOOLS, ROUTES_TOP } from '../lib/nav';

function NavItem({ route }: { route: string }) {
  const label = content.ui.nav[NAV_KEY[route] as keyof typeof content.ui.nav] ?? route;
  return (
    <NavLink to={`/${route}`} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
      <Icon name={SIDEBAR_ICON_MAP[route]} />
      <span>{label}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-group">
        <NavLink to="/" end className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
          <Icon name="home" />
          <span>{content.ui.nav.home}</span>
        </NavLink>
        {ROUTES_TOP.map((r) => (
          <NavItem key={r} route={r} />
        ))}
      </div>
      <div className="sidebar-group">
        <span className="sidebar-label">{content.ui.nav.groupTools}</span>
        {ROUTES_TOOLS.map((r) => (
          <NavItem key={r} route={r} />
        ))}
      </div>
      <div className="sidebar-group">
        <span className="sidebar-label">{content.ui.nav.groupReference}</span>
        {ROUTES_REF.map((r) => (
          <NavItem key={r} route={r} />
        ))}
      </div>
      <div className="sidebar-foot">
        {content.ui.common.confidential}
        <div style={{ marginTop: 8 }}>
          <button
            className="btn ghost sm"
            style={{ padding: 0, fontSize: '10.5px' }}
            onClick={() => {
              localStorage.removeItem('kyc_site_auth');
              window.location.reload();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
