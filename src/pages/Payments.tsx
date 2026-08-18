import PageHead from '../components/PageHead';
import Callout from '../components/Callout';
import RoleBadge from '../components/RoleBadge';
import RoleBlock from '../components/RoleBlock';
import { content } from '../data/content';
import type { PaymentsRoleBlock } from '../types/content';

function Block({ b }: { b: PaymentsRoleBlock }) {
  return (
    <RoleBlock roleId={b.role} className="card">
      <div className="section-title">
        <RoleBadge roleId={b.role} /> {b.title}
      </div>
      <p dangerouslySetInnerHTML={{ __html: b.html }} />
    </RoleBlock>
  );
}

export default function Payments() {
  const d = content.payments;
  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} />
      <Block b={d.broker} />
      <Block b={d.backoffice} />
      <Block b={d.finance} />
      <Callout callout={d.cash} />
      <p className="muted" style={{ marginTop: 12 }}>
        {d.banks.html}
      </p>
    </>
  );
}
