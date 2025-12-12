import { Principle2 } from '@/types/brsr';
import { Switch } from '@/components/ui/switch';

interface Props { data: Principle2; onChange: (data: Principle2) => void; }

const Principle2Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle2>(key: K, value: Principle2[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="form-label">R&D Investment (%)</label><input type="number" value={data.rdInvestmentPercentage} onChange={(e) => update('rdInvestmentPercentage', Number(e.target.value))} className="form-input" step="0.1" /></div>
        <div><label className="form-label">Capex Investment (%)</label><input type="number" value={data.capexInvestmentPercentage} onChange={(e) => update('capexInvestmentPercentage', Number(e.target.value))} className="form-input" step="0.1" /></div>
        <div><label className="form-label">Sustainable Sourcing (%)</label><input type="number" value={data.sustainableSourcingPercentage} onChange={(e) => update('sustainableSourcingPercentage', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">Recycled Inputs (%)</label><input type="number" value={data.recycledInputsPercentage} onChange={(e) => update('recycledInputsPercentage', Number(e.target.value))} className="form-input" /></div>
      </div>
      <div><label className="form-label">Products with Environmental/Social Impact</label><textarea value={data.productsWithImpact} onChange={(e) => update('productsWithImpact', e.target.value)} className="form-textarea" rows={2} /></div>
      <div className="flex items-center gap-3"><Switch checked={data.eprCompliance} onCheckedChange={(c) => update('eprCompliance', c)} /><span className="text-sm">EPR Compliance</span></div>
      <div><label className="form-label">Reclaimed Products</label><textarea value={data.reclaimedProducts} onChange={(e) => update('reclaimedProducts', e.target.value)} className="form-textarea" rows={2} /></div>
    </div>
  );
};
export default Principle2Form;
