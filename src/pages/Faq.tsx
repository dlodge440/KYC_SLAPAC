import { useState, type ReactNode } from 'react';
import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import Icon from '../components/Icon';
import { content } from '../data/content';
import { stripTags } from '../lib/search';

interface FaqEntry {
  key: string;
  q: string;
  searchText: string;
  render: () => ReactNode;
}

export default function Faq() {
  const d = content.faq;
  const k = content.kycRequired;
  const por = content.checklists.proofOfResidence;
  const [query, setQuery] = useState('');
  const [openKey, setOpenKey] = useState<string | null>(null);

  const kycReqSearchText = (
    k.alwaysRows.map((r) => r.situation + ' ' + r.requirement).join(' ') +
    ' ' +
    k.notRequiredText +
    ' ' +
    stripTags(k.note.html)
  ).toLowerCase();

  const entries: FaqEntry[] = [
    {
      key: 'faq-kyc-required',
      q: k.question,
      searchText: (k.question + ' ' + kycReqSearchText).toLowerCase(),
      render: () => (
        <>
          <div className="section-block">
            <div className="section-title">{k.alwaysTitle}</div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '45%' }}>Situation</th>
                    <th>Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {k.alwaysRows.map((r, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{r.situation}</strong>
                      </td>
                      <td>{r.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="section-block">
            <div className="section-title">{k.notRequiredTitle}</div>
            <div className="card">
              <p>{k.notRequiredText}</p>
            </div>
          </div>
          <Callout callout={k.note} />
        </>
      ),
    },
    ...d.items.map((it, i) => ({
      key: 'faq' + i,
      q: it.q,
      searchText:
        it.id === 'proofOfResidence'
          ? (it.q + ' ' + it.a + ' ' + por.acceptable.join(' ')).toLowerCase()
          : (it.q + ' ' + it.a).toLowerCase(),
      render: () =>
        it.id === 'proofOfResidence' ? (
          <>
            <p>
              <strong>{por.title}</strong> {por.lead}
            </p>
            <ul style={{ marginTop: 8 }}>
              {por.acceptable.map((a, idx) => (
                <li key={idx}>{a}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>{it.a}</p>
        ),
    })),
  ];

  const q = query.toLowerCase();
  const items = entries.filter((it) => !q || it.searchText.includes(q));

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <input
        type="text"
        className="faq-search"
        placeholder={content.ui.searchPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {items.length ? (
          items.map((it) => {
            const open = openKey === it.key || !!q;
            return (
              <div className={`accordion-item${open ? ' open' : ''}`} key={it.key}>
                <button
                  className="accordion-head"
                  aria-expanded={open}
                  onClick={() => setOpenKey(openKey === it.key ? null : it.key)}
                >
                  <span>{it.q}</span>
                  <span className="chev">
                    <Icon name="chevron" />
                  </span>
                </button>
                <div className="accordion-body">{it.render()}</div>
              </div>
            );
          })
        ) : (
          <p className="muted">{content.ui.common.noResults}</p>
        )}
      </div>
    </>
  );
}
