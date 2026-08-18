import { useAppState } from '../state/AppState';
import { content } from '../data/content';
import type { RoleKey } from '../types/content';

export default function RoleBadge({ roleId, extraClass }: { roleId: RoleKey; extraClass?: string }) {
  const { role } = useAppState();
  const label = content.ui.roles[roleId] || roleId;
  const hl = role !== 'all' && role === roleId;
  return (
    <span className={`badge role-${roleId} ${extraClass || ''}${hl ? ' hl' : ''}`} data-role-badge={roleId}>
      {label}
    </span>
  );
}
