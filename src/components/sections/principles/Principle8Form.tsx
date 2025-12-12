import { Principle8 } from '@/types/brsr';

interface Props { data: Principle8; onChange: (data: Principle8) => void; }

const Principle8Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle8>(key: K, value: Principle8[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="form-label">Social Impact Assessments</label><input type="number" value={data.socialImpactAssessments} onChange={(e) => update('socialImpactAssessments', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">Rehabilitation Projects</label><input type="number" value={data.rehabilitationProjects} onChange={(e) => update('rehabilitationProjects', Number(e.target.value))} className="form-input" /></div>
      </div>
      <p className="text-sm text-muted-foreground">CSR Projects: {data.csrProjects.length} projects with {data.csrProjects.reduce((acc, p) => acc + p.beneficiaries, 0).toLocaleString()} total beneficiaries</p>
    </div>
  );
};
export default Principle8Form;
