import type { ReactNode } from 'react';
import { useAppState } from '../state/AppState';
import type { RoleKey } from '../types/content';

export default function RoleBlock({
  roleId,
  children,
  className,
}: {
  roleId: RoleKey;
  children: ReactNode;
  className?: string;
}) {
  const { role } = useAppState();
  const dim = role !== 'all' && role !== roleId;
  return (
    <div className={`role-block${dim ? ' dim' : ''}${className ? ' ' + className : ''}`} data-role={roleId}>
      {children}
    </div>
  );
}
