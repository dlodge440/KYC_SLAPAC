import PageHead from '../components/PageHead';
import RaciTable from '../components/RaciTable';
import { content } from '../data/content';

export default function Raci() {
  const d = content.raci;
  return (
    <>
      <PageHead eyebrow={d.eyebrow} title={d.title} sub={d.subtitle} />
      <RaciTable variant="full" />
    </>
  );
}
