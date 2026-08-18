import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setSidebarOpen(false);
    mainRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="app">
      <a href="#main-content" className="skip-link">
        {`Skip to content`}
      </a>
      <Topbar onMenuToggle={() => setSidebarOpen((o) => !o)} />
      <div className={`sidebar-scrim${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)} />
      <nav className={`sidebar scroll-area${sidebarOpen ? ' open' : ''}`} aria-label="Primary">
        <Sidebar />
      </nav>
      <div className="main-wrap">
        <main className="main scroll-area fade-in" id="main-content" ref={mainRef}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
