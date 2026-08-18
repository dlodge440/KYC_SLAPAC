import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { sha256Hex } from '../lib/hash';

const STORAGE_KEY = 'kyc_site_auth';
const SESSION_DAYS = 90;
const SESSION_MS = SESSION_DAYS * 24 * 60 * 60 * 1000;

const EXPECTED_HASH = import.meta.env.VITE_SITE_PASSWORD_HASH as string | undefined;

interface StoredAuth {
  hash: string;
  expires: number;
}

function readStoredAuth(): StoredAuth | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAuth;
    if (!parsed.expires || parsed.expires < Date.now()) return null;
    if (parsed.hash !== EXPECTED_HASH) return null;
    return parsed;
  } catch {
    return null;
  }
}

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(() => !!readStoredAuth());
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    if (!EXPECTED_HASH) {
      // eslint-disable-next-line no-console
      console.error('VITE_SITE_PASSWORD_HASH is not set — the site has no password configured.');
    }
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setChecking(true);
    const hash = await sha256Hex(password);
    setChecking(false);
    if (EXPECTED_HASH && hash === EXPECTED_HASH) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ hash, expires: Date.now() + SESSION_MS }));
      setAuthenticated(true);
      setError(false);
      setPassword('');
    } else {
      setError(true);
    }
  }

  if (authenticated) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        padding: 24,
      }}
    >
      <form onSubmit={handleSubmit} className="card" style={{ width: '100%', maxWidth: 360 }} aria-label="Site access">
        <div className="brand" style={{ marginBottom: 22 }}>
          <div className="brand-text">
            <span className="t1">KYC &amp; Sanctions Compliance</span>
            <span className="t2">Simpson Marine — internal</span>
          </div>
        </div>
        <label htmlFor="site-password" className="small muted" style={{ display: 'block', marginBottom: 8 }}>
          This site is confidential and restricted to Simpson Marine staff. Enter the access password.
        </label>
        <input
          id="site-password"
          type="password"
          autoFocus
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          style={{
            width: '100%',
            padding: '10px 14px',
            border: '1px solid var(--border)',
            marginBottom: 12,
            background: 'var(--surface-alt)',
          }}
        />
        {error && (
          <p className="small" style={{ color: 'var(--danger)', marginBottom: 12 }}>
            Incorrect password.
          </p>
        )}
        <button className="btn primary" type="submit" disabled={checking || !password} style={{ width: '100%' }}>
          {checking ? '…' : 'Enter'}
        </button>
      </form>
    </div>
  );
}
