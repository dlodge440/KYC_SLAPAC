import { useState, type ReactNode } from 'react';
import PageHead from '../components/PageHead';
import Icon from '../components/Icon';
import RoleBadge from '../components/RoleBadge';
import RoleBlock from '../components/RoleBlock';
import { content } from '../data/content';
import { copyText } from '../lib/clipboard';

function renderWithPlaceholders(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <span className="field-placeholder" key={i}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function TemplateCard({ tpl, lang }: { tpl: (typeof content.toolkit.templates)[number]; lang: 'en' | 'zh' }) {
  const [copied, setCopied] = useState(false);
  const body = lang === 'zh' && tpl.bodyZh ? tpl.bodyZh : tpl.body;

  async function handleCopy() {
    await copyText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <RoleBlock roleId="broker" className="template-card">
      <div className="template-head">
        <h3>
          <RoleBadge roleId="broker" /> {tpl.title}
        </h3>
        <button className={`btn sm copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
          <Icon name="doc" /> {copied ? content.ui.common.copied : content.ui.common.copy}
        </button>
      </div>
      <div className="template-body">
        {tpl.lead && (
          <p className="muted small" style={{ marginBottom: 12 }}>
            {tpl.lead}
          </p>
        )}
        {renderWithPlaceholders(body)}
      </div>
    </RoleBlock>
  );
}

export default function Toolkit() {
  const d = content.toolkit;
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <div className="langtoggle" style={{ marginBottom: 16 }}>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
          EN
        </button>
        <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')}>
          中文
        </button>
      </div>
      {d.templates.map((tpl) => (
        <TemplateCard key={tpl.id} tpl={tpl} lang={lang} />
      ))}
    </>
  );
}
