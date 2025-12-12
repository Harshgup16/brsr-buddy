import { Principle9 } from '@/types/brsr';

interface Props { data: Principle9; onChange: (data: Principle9) => void; }

const Principle9Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle9>(key: K, value: Principle9[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div><label className="form-label">Product Recalls</label><input type="number" value={data.productRecalls} onChange={(e) => update('productRecalls', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">Cybersecurity Incidents</label><input type="number" value={data.cybersecurityIncidents} onChange={(e) => update('cybersecurityIncidents', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">Consumer Surveys</label><input type="number" value={data.consumerSurveys} onChange={(e) => update('consumerSurveys', Number(e.target.value))} className="form-input" /></div>
      </div>
      <div><label className="form-label">Corrective Actions</label><textarea value={data.correctiveActions} onChange={(e) => update('correctiveActions', e.target.value)} className="form-textarea" rows={3} /></div>
      <div><label className="form-label">Feedback Channels (comma-separated)</label><input type="text" value={data.feedbackChannels.join(', ')} onChange={(e) => update('feedbackChannels', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} className="form-input" /></div>
    </div>
  );
};
export default Principle9Form;
