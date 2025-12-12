import { Principle5 } from '@/types/brsr';

interface Props { data: Principle5; onChange: (data: Principle5) => void; }

const Principle5Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle5>(key: K, value: Principle5[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div><label className="form-label">HR Training - Employees (%)</label><input type="number" value={data.humanRightsTrainingEmployees} onChange={(e) => update('humanRightsTrainingEmployees', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">HR Training - Value Chain (%)</label><input type="number" value={data.humanRightsTrainingValueChain} onChange={(e) => update('humanRightsTrainingValueChain', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">Accessibility Assessments</label><input type="number" value={data.accessibilityAssessments} onChange={(e) => update('accessibilityAssessments', Number(e.target.value))} className="form-input" /></div>
      </div>
      <div><label className="form-label">Policy Elements (comma-separated)</label><input type="text" value={data.policyElements.join(', ')} onChange={(e) => update('policyElements', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} className="form-input" /></div>
      <div><label className="form-label">Minimum Wage Remuneration</label><textarea value={data.minimumWageRemuneration} onChange={(e) => update('minimumWageRemuneration', e.target.value)} className="form-textarea" rows={2} /></div>
      <div><label className="form-label">Focal Points</label><input type="text" value={data.focalPoints} onChange={(e) => update('focalPoints', e.target.value)} className="form-input" /></div>
      <div><label className="form-label">Grievance Mechanisms</label><textarea value={data.grievanceMechanisms} onChange={(e) => update('grievanceMechanisms', e.target.value)} className="form-textarea" rows={2} /></div>
    </div>
  );
};
export default Principle5Form;
