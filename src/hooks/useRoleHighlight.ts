import { useLayoutEffect } from 'react';

/**
 * Applies role dim/highlight classes to raw HTML injected via dangerouslySetInnerHTML
 * (e.g. phase descriptions) that carries `data-role` / `data-role-badge` attributes baked
 * into the content strings. Real React role components (RoleBadge/RoleBlock) handle their
 * own highlighting directly and don't need this.
 */
export function useRoleHighlight(role: string, containerRef: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.querySelectorAll('[data-role]').forEach((el) => {
      const r = el.getAttribute('data-role');
      el.classList.toggle('dim', role !== 'all' && r !== role);
    });
    container.querySelectorAll('[data-role-badge]').forEach((el) => {
      const r = el.getAttribute('data-role-badge');
      el.classList.toggle('hl', role !== 'all' && r === role);
    });
  });
}
