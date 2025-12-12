import { Principle6 } from '@/types/brsr';

interface Props { data: Principle6; onChange: (data: Principle6) => void; }

const Principle6Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle6>(key: K, value: Principle6[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div><h4 className="font-medium text-foreground mb-4">Energy (Joules)</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div><label className="form-label">Renewable</label><input type="number" value={data.energy.renewableJoules} onChange={(e) => update('energy', { ...data.energy, renewableJoules: Number(e.target.value) })} className="form-input" /></div>
          <div><label className="form-label">Non-Renewable</label><input type="number" value={data.energy.nonRenewableJoules} onChange={(e) => update('energy', { ...data.energy, nonRenewableJoules: Number(e.target.value) })} className="form-input" /></div>
          <div><label className="form-label">Intensity Ratio</label><input type="number" value={data.energy.intensityRatio} onChange={(e) => update('energy', { ...data.energy, intensityRatio: Number(e.target.value) })} className="form-input" step="0.001" /></div>
        </div>
      </div>
      <div><h4 className="font-medium text-foreground mb-4">GHG Emissions (MT CO2e)</h4>
        <div className="grid md:grid-cols-4 gap-4">
          <div><label className="form-label">Scope 1</label><input type="number" value={data.ghgEmissions.scope1} onChange={(e) => update('ghgEmissions', { ...data.ghgEmissions, scope1: Number(e.target.value) })} className="form-input" /></div>
          <div><label className="form-label">Scope 2</label><input type="number" value={data.ghgEmissions.scope2} onChange={(e) => update('ghgEmissions', { ...data.ghgEmissions, scope2: Number(e.target.value) })} className="form-input" /></div>
          <div><label className="form-label">Scope 3</label><input type="number" value={data.ghgEmissions.scope3} onChange={(e) => update('ghgEmissions', { ...data.ghgEmissions, scope3: Number(e.target.value) })} className="form-input" /></div>
          <div><label className="form-label">Intensity</label><input type="number" value={data.ghgEmissions.intensityRatio} onChange={(e) => update('ghgEmissions', { ...data.ghgEmissions, intensityRatio: Number(e.target.value) })} className="form-input" step="0.001" /></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="form-label">Environmental Impact Assessments</label><input type="number" value={data.environmentalImpactAssessments} onChange={(e) => update('environmentalImpactAssessments', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">Significant Spills</label><input type="number" value={data.significantSpills} onChange={(e) => update('significantSpills', Number(e.target.value))} className="form-input" /></div>
      </div>
    </div>
  );
};
export default Principle6Form;
