import { Principle1 } from '@/types/brsr';

interface Props { data: Principle1; onChange: (data: Principle1) => void; }

const Principle1Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle1>(key: K, value: Principle1[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium text-foreground mb-4">Training Coverage (%)</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(['board', 'kmps', 'employees', 'workers'] as const).map(key => (
            <div key={key}>
              <label className="form-label capitalize">{key}</label>
              <input type="number" value={data.trainingCoverage[key]} onChange={(e) => update('trainingCoverage', { ...data.trainingCoverage, [key]: Number(e.target.value) })} className="form-input" min="0" max="100" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="form-label">Disciplinary Actions</label><input type="number" value={data.disciplinaryActions} onChange={(e) => update('disciplinaryActions', Number(e.target.value))} className="form-input" min="0" /></div>
        <div><label className="form-label">Conflict Complaints</label><input type="number" value={data.conflictComplaints} onChange={(e) => update('conflictComplaints', Number(e.target.value))} className="form-input" min="0" /></div>
      </div>
      <div><label className="form-label">Awareness Programs</label><textarea value={data.awarenessPrograms} onChange={(e) => update('awarenessPrograms', e.target.value)} className="form-textarea" rows={3} /></div>
      <div><label className="form-label">Whistleblowing Processes</label><textarea value={data.whistleblowingProcesses} onChange={(e) => update('whistleblowingProcesses', e.target.value)} className="form-textarea" rows={3} /></div>
    </div>
  );
};
export default Principle1Form;
