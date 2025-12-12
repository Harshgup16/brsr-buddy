import { Principle3 } from '@/types/brsr';
import { Switch } from '@/components/ui/switch';

interface Props { data: Principle3; onChange: (data: Principle3) => void; }

const Principle3Form = ({ data, onChange }: Props) => {
  const update = <K extends keyof Principle3>(key: K, value: Principle3[K]) => onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium text-foreground mb-4">Training Hours (Average)</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><label className="form-label">Male Employees</label><input type="number" value={data.trainingHoursMaleEmployees} onChange={(e) => update('trainingHoursMaleEmployees', Number(e.target.value))} className="form-input" step="0.1" /></div>
          <div><label className="form-label">Female Employees</label><input type="number" value={data.trainingHoursFemaleEmployees} onChange={(e) => update('trainingHoursFemaleEmployees', Number(e.target.value))} className="form-input" step="0.1" /></div>
          <div><label className="form-label">Male Workers</label><input type="number" value={data.trainingHoursMaleWorkers} onChange={(e) => update('trainingHoursMaleWorkers', Number(e.target.value))} className="form-input" step="0.1" /></div>
          <div><label className="form-label">Female Workers</label><input type="number" value={data.trainingHoursFemaleWorkers} onChange={(e) => update('trainingHoursFemaleWorkers', Number(e.target.value))} className="form-input" step="0.1" /></div>
        </div>
      </div>
      <div>
        <h4 className="font-medium text-foreground mb-4">Safety Incidents - Employees</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><label className="form-label">LTIFR</label><input type="number" value={data.safetyIncidentsEmployees.ltifr} onChange={(e) => update('safetyIncidentsEmployees', { ...data.safetyIncidentsEmployees, ltifr: Number(e.target.value) })} className="form-input" step="0.01" /></div>
          <div><label className="form-label">Fatalities</label><input type="number" value={data.safetyIncidentsEmployees.fatalities} onChange={(e) => update('safetyIncidentsEmployees', { ...data.safetyIncidentsEmployees, fatalities: Number(e.target.value) })} className="form-input" /></div>
          <div><label className="form-label">High Consequence</label><input type="number" value={data.safetyIncidentsEmployees.highConsequenceInjuries} onChange={(e) => update('safetyIncidentsEmployees', { ...data.safetyIncidentsEmployees, highConsequenceInjuries: Number(e.target.value) })} className="form-input" /></div>
          <div><label className="form-label">Recordable</label><input type="number" value={data.safetyIncidentsEmployees.recordableIncidents} onChange={(e) => update('safetyIncidentsEmployees', { ...data.safetyIncidentsEmployees, recordableIncidents: Number(e.target.value) })} className="form-input" /></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="form-label">Working Conditions Complaints</label><input type="number" value={data.workingConditionsComplaints} onChange={(e) => update('workingConditionsComplaints', Number(e.target.value))} className="form-input" /></div>
        <div><label className="form-label">Retirement Benefits Coverage (%)</label><input type="number" value={data.retirementBenefitsCoverage} onChange={(e) => update('retirementBenefitsCoverage', Number(e.target.value))} className="form-input" /></div>
      </div>
      <div className="flex gap-6">
        <label className="flex items-center gap-2"><Switch checked={data.statutoryDuesCompliance} onCheckedChange={(c) => update('statutoryDuesCompliance', c)} /><span className="text-sm">Statutory Dues Compliance</span></label>
        <label className="flex items-center gap-2"><Switch checked={data.minimumWagesCompliance} onCheckedChange={(c) => update('minimumWagesCompliance', c)} /><span className="text-sm">Minimum Wages Compliance</span></label>
      </div>
    </div>
  );
};
export default Principle3Form;
