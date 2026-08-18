import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { content } from '../data/content';
import { NAV_KEY } from '../lib/nav';
import { buildSearchIndex, escapeRegex, searchIndex, type SearchResult } from '../lib/search';

function highlight(text: string, query: string): ReactNode[] {
  if (!query) return [text];
  const re = new RegExp(`(${escapeRegex(query)})`, 'gi');
  const parts = text.split(re);
  const ql = query.toLowerCase();
  return parts.map((part, i) =>
    part.toLowerCase() === ql ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>,
  );
}

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const index = useMemo(() => buildSearchIndex(content), []);
  const results: SearchResult[] = useMemo(() => searchIndex(index, query), [index, query]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === '/') {
        const tag = document.activeElement ? document.activeElement.tagName : '';
        const editable = document.activeElement && (document.activeElement as HTMLElement).isContentEditable;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !editable) {
          e.preventDefault();
          inputRef.current?.focus();
        }
      }
      if (e.key === 'Escape') {
        setOpen(false);
        if (document.activeElement === inputRef.current) inputRef.current?.blur();
      }
    }
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('click', onClick);
    };
  }, []);

  function goTo(r: SearchResult) {
    navigate(r.param ? `/${r.route}/${r.param}` : `/${r.route}`);
    setQuery('');
    setOpen(false);
  }

  const showDropdown = open && query.trim().length >= 2;

  return (
    <div className="topbar-search" ref={wrapRef}>
      <span className="icon">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10.3 10.3L13.5 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        placeholder={content.ui.searchPlaceholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          if (query) setOpen(true);
        }}
      />
      <span className="kbd">/</span>
      <div className={`search-results${showDropdown ? ' open' : ''}`}>
        {showDropdown && results.length === 0 && <div className="sr-empty">{content.ui.common.noResults}</div>}
        {showDropdown &&
          results.map((r, i) => (
            <button key={i} className="sr-item" onClick={() => goTo(r)}>
              <div className="sr-cat">{content.ui.nav[NAV_KEY[r.route] as keyof typeof content.ui.nav] || r.route}</div>
              <div className="sr-title">{highlight(r.title, query)}</div>
              <div className="sr-snip">{highlight(r.snippet, query)}</div>
            </button>
          ))}
      </div>
    </div>
  );
}
