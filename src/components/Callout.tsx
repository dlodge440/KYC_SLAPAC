import type { Callout as CalloutData } from '../types/content';

export default function Callout({ callout }: { callout?: CalloutData | null }) {
  if (!callout) return null;
  const cls = callout.type && (callout.type as string) !== 'plain' ? ` ${callout.type}` : '';
  return <div className={`callout${cls}`} dangerouslySetInnerHTML={{ __html: callout.html }} />;
}
