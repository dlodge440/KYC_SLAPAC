const ICON_PATHS: Record<string, string> = {
  home: 'M3.5 10 11 3.8 18.5 10 M5.8 8.6V18.3H16.2V8.6',
  wizard: 'M5.5 5H16.5V19H5.5Z M8.5 3.5H13.5V6H8.5Z M8 10.5H14 M8 13.5H14 M8 16.5H11.5',
  calc: 'M5.5 3.5H16.5V18.5H5.5Z M7.5 5.5H14.5V8.5H7.5Z M7.8 11.5H8.6 M10.6 11.5H11.4 M13.4 11.5H14.2 M7.8 14.3H8.6 M10.6 14.3H11.4 M13.4 14.3H14.2',
  role: 'M11 10.2a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z M4.5 18.5c.8-3.6 3.2-5.4 6.5-5.4s5.7 1.8 6.5 5.4',
  faq: 'M8.2 8.3c.3-1.7 1.6-2.7 3.2-2.7 1.9 0 3.1 1.1 3.1 2.6 0 2-3.1 2.2-3.1 4.7 M11.3 15.5v.1',
  doc: 'M6 3.5H13L16.5 7V18.5H6Z M13 3.5V7H16.5',
  raci: 'M4 6.5H18 M4 11H14.5 M4 15.5H16',
  phase:
    'M6.3 12.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z M11 12.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z M15.7 12.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z M7.6 11H9.7 M12.3 11H14.4',
  chevron: 'M8 5.5 13.5 11 8 16.5',
  threshold:
    'M15.5 6.5 6.5 15.5 M8 8.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z M14 16.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
  reg: 'M4 8 11 3.5 18 8 M5.5 8V18.5H16.5V8 M8 9.5V17 M11 9.5V17 M14 9.5V17 M4 18.5H18',
  check: 'M5.5 3.5H16.5V18.5H5.5Z M8 8 9.4 9.4 12.6 6.2 M8 12.5H14.5 M8 15.5H14.5',
  pay: 'M3.5 6H18.5V16.5H3.5Z M3.5 9.3H18.5 M6 13.2H9.5',
  scr: 'M11 3.3 17.5 5.8V10.3C17.5 14.5 14.7 17.4 11 19 7.3 17.4 4.5 14.5 4.5 10.3V5.8Z M8.3 11 10.2 12.9 13.9 9',
  esc: 'M11 3.5 19 18H3Z M11 9V13.3 M11 15.6v.1',
  kit: 'M4 6H18V17H4Z M4 6.5 11 12.5 18 6.5',
  rec: 'M4 4.5H18V8H4Z M5 8V18H17V8 M9 11H13',
};

const FALLBACK_PATH = 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z';

export interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const p = ICON_PATHS[name] || FALLBACK_PATH;
  const segments = p.split('M').filter(Boolean);
  return (
    <svg
      className={className ? `ic ${className}` : 'ic'}
      viewBox="0 0 22 22"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {segments.map((seg, i) => (
        <path key={i} d={`M${seg}`} />
      ))}
    </svg>
  );
}

export const SIDEBAR_ICON_MAP: Record<string, string> = {
  wizard: 'wizard',
  calculator: 'calc',
  'role-timeline': 'role',
  toolkit: 'kit',
  faq: 'faq',
  raci: 'raci',
  phases: 'phase',
  thresholds: 'threshold',
  registries: 'reg',
  checklists: 'check',
  payments: 'pay',
  screening: 'scr',
  escalation: 'esc',
  records: 'rec',
};
