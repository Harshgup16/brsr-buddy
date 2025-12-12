import { Principle7 } from '@/types/brsr';

interface Props { data: Principle7; onChange: (data: Principle7) => void; }

const Principle7Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle7>(key: K, value: Principle7[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div><label className="form-label">Policy Advocacy Activities</label><textarea value={data.policyAdvocacyActivities} onChange={(e) => update('policyAdvocacyActivities', e.target.value)} className="form-textarea" rows={3} /></div>
      <div><label className="form-label">Corrective Actions</label><textarea value={data.correctiveActions} onChange={(e) => update('correctiveActions', e.target.value)} className="form-textarea" rows={3} /></div>
    </div>
  );
};
export default Principle7Form;
