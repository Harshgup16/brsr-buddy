import { Principle4 } from '@/types/brsr';

interface Props { data: Principle4; onChange: (data: Principle4) => void; }

const Principle4Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle4>(key: K, value: Principle4[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div><label className="form-label">Vulnerable Groups Identified (comma-separated)</label><input type="text" value={data.vulnerableGroupsIdentified.join(', ')} onChange={(e) => update('vulnerableGroupsIdentified', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} className="form-input" placeholder="SC/ST Communities, Women, Differently Abled..." /></div>
      <div><label className="form-label">Value Chain Engagement Channels (comma-separated)</label><input type="text" value={data.valueChainEngagementChannels.join(', ')} onChange={(e) => update('valueChainEngagementChannels', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} className="form-input" placeholder="Supplier meets, Dealer conventions..." /></div>
      <div><label className="form-label">Stakeholder Feedback Integration</label><textarea value={data.stakeholderFeedbackIntegration} onChange={(e) => update('stakeholderFeedbackIntegration', e.target.value)} className="form-textarea" rows={3} /></div>
    </div>
  );
};
export default Principle4Form;
