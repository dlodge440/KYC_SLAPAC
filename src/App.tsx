import { HashRouter, Route, Routes } from 'react-router-dom';
import PasswordGate from './components/PasswordGate';
import { AppStateProvider } from './state/AppState';
import Layout from './components/Layout';
import Home from './pages/Home';
import Wizard from './pages/Wizard';
import Calculator from './pages/Calculator';
import RoleTimeline from './pages/RoleTimeline';
import Faq from './pages/Faq';
import Raci from './pages/Raci';
import Phases from './pages/Phases';
import Thresholds from './pages/Thresholds';
import Registries from './pages/Registries';
import Checklists from './pages/Checklists';
import Payments from './pages/Payments';
import Screening from './pages/Screening';
import Escalation from './pages/Escalation';
import Toolkit from './pages/Toolkit';
import Records from './pages/Records';

export default function App() {
  return (
    <PasswordGate>
      <AppStateProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="wizard" element={<Wizard />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="role-timeline" element={<RoleTimeline />} />
              <Route path="faq" element={<Faq />} />
              <Route path="raci" element={<Raci />} />
              <Route path="phases" element={<Phases />} />
              <Route path="phases/:phaseId" element={<Phases />} />
              <Route path="thresholds" element={<Thresholds />} />
              <Route path="registries" element={<Registries />} />
              <Route path="checklists" element={<Checklists />} />
              <Route path="payments" element={<Payments />} />
              <Route path="screening" element={<Screening />} />
              <Route path="escalation" element={<Escalation />} />
              <Route path="toolkit" element={<Toolkit />} />
              <Route path="records" element={<Records />} />
            </Route>
          </Routes>
        </HashRouter>
      </AppStateProvider>
    </PasswordGate>
  );
}
