import { SectionB, PolicyInfo } from '@/types/brsr';
import { ScrollText, Check, X, ExternalLink } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface SectionBFormProps {
  data: SectionB;
  onChange: (data: SectionB) => void;
}

const PRINCIPLES = [
  { key: 'P1_Ethics', name: 'P1: Ethics, Transparency & Accountability', short: 'Ethics' },
  { key: 'P2_Products', name: 'P2: Sustainable & Safe Products/Services', short: 'Products' },
  { key: 'P3_Employees', name: 'P3: Employee Wellbeing', short: 'Employees' },
  { key: 'P4_Stakeholders', name: 'P4: Stakeholder Engagement', short: 'Stakeholders' },
  { key: 'P5_HumanRights', name: 'P5: Human Rights', short: 'Human Rights' },
  { key: 'P6_Environment', name: 'P6: Environmental Protection', short: 'Environment' },
  { key: 'P7_PublicPolicy', name: 'P7: Public Policy Advocacy', short: 'Public Policy' },
  { key: 'P8_InclusiveGrowth', name: 'P8: Inclusive Growth & Equitable Development', short: 'Inclusive Growth' },
  { key: 'P9_ConsumerValue', name: 'P9: Consumer Value', short: 'Consumer' },
] as const;

type PrincipleKey = typeof PRINCIPLES[number]['key'];

const SectionBForm = ({ data, onChange }: SectionBFormProps) => {
  const updatePolicyMatrix = (principleKey: PrincipleKey, field: keyof PolicyInfo, value: boolean | string) => {
    onChange({
      ...data,
      policyMatrix: {
        ...data.policyMatrix,
        [principleKey]: {
          ...data.policyMatrix[principleKey],
          [field]: value,
        },
      },
    });
  };

  const updateField = <K extends keyof SectionB>(key: K, value: SectionB[K]) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
      {/* Section Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-display font-bold text-foreground mb-3">
          Section B: Management & Process Disclosures
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Policy matrix for the 9 NGRBC Principles covering governance, sustainability, and stakeholder management.
        </p>
      </div>

      {/* Policy Matrix */}
      <div className="glass-card p-6 animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
            <ScrollText className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Policy Matrix</h3>
            <p className="text-sm text-muted-foreground">NGRBC Principles P1-P9</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-lg">Principle</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Has Policy</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Policy Weblink</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Board Approved</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Director Statement</th>
                <th className="px-4 py-3 text-center text-sm font-semibold rounded-tr-lg">Committee Exists</th>
              </tr>
            </thead>
            <tbody>
              {PRINCIPLES.map((principle, index) => {
                const policy = data.policyMatrix[principle.key];
                return (
                  <tr 
                    key={principle.key} 
                    className={index % 2 === 0 ? 'bg-muted/20' : 'bg-transparent'}
                  >
                    <td className="px-4 py-4 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground text-sm">{principle.short}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{principle.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 border-b border-border text-center">
                      <div className="flex justify-center">
                        <Switch
                          checked={policy.hasPolicy}
                          onCheckedChange={(checked) => updatePolicyMatrix(principle.key, 'hasPolicy', checked)}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <input
                          type="url"
                          value={policy.weblink}
                          onChange={(e) => updatePolicyMatrix(principle.key, 'weblink', e.target.value)}
                          className="form-input py-2 text-sm flex-1"
                          placeholder="https://..."
                          disabled={!policy.hasPolicy}
                        />
                        {policy.weblink && (
                          <a 
                            href={policy.weblink.startsWith('http') ? policy.weblink : `https://${policy.weblink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-secondary/80"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 border-b border-border text-center">
                      <div className="flex justify-center">
                        <Switch
                          checked={policy.boardApproved}
                          onCheckedChange={(checked) => updatePolicyMatrix(principle.key, 'boardApproved', checked)}
                          disabled={!policy.hasPolicy}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 border-b border-border text-center">
                      <div className="flex justify-center">
                        <Switch
                          checked={policy.directorStatement}
                          onCheckedChange={(checked) => updatePolicyMatrix(principle.key, 'directorStatement', checked)}
                          disabled={!policy.hasPolicy}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 border-b border-border text-center">
                      <div className="flex justify-center">
                        <Switch
                          checked={policy.committeeExists}
                          onCheckedChange={(checked) => updatePolicyMatrix(principle.key, 'committeeExists', checked)}
                          disabled={!policy.hasPolicy}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-5 rounded-full bg-secondary" />
            <span>Yes / Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-5 rounded-full bg-muted" />
            <span>No / Disabled</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { 
            label: 'Policies in Place', 
            value: PRINCIPLES.filter(p => data.policyMatrix[p.key].hasPolicy).length,
            total: 9 
          },
          { 
            label: 'Board Approved', 
            value: PRINCIPLES.filter(p => data.policyMatrix[p.key].boardApproved).length,
            total: PRINCIPLES.filter(p => data.policyMatrix[p.key].hasPolicy).length 
          },
          { 
            label: 'With Committees', 
            value: PRINCIPLES.filter(p => data.policyMatrix[p.key].committeeExists).length,
            total: PRINCIPLES.filter(p => data.policyMatrix[p.key].hasPolicy).length 
          },
        ].map((stat, i) => (
          <div 
            key={i}
            className="glass-card-hover p-5 animate-slide-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-foreground">
              {stat.value}
              <span className="text-lg text-muted-foreground font-normal">/{stat.total}</span>
            </p>
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-secondary rounded-full transition-all duration-500"
                style={{ width: `${stat.total > 0 ? (stat.value / stat.total) * 100 : 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Commitments & Statements */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <h3 className="font-semibold text-foreground mb-6">Governance Disclosures</h3>
        
        <div className="space-y-6">
          <div>
            <label className="form-label">Commitments to Sustainability</label>
            <textarea
              value={data.commitments}
              onChange={(e) => updateField('commitments', e.target.value)}
              className="form-textarea"
              placeholder="Describe the company's commitment to sustainability and responsible business conduct..."
              rows={4}
            />
          </div>
          
          <div>
            <label className="form-label">Director's Statement</label>
            <textarea
              value={data.directorStatement}
              onChange={(e) => updateField('directorStatement', e.target.value)}
              className="form-textarea"
              placeholder="Statement from the Director affirming adherence to NGRBC principles..."
              rows={4}
            />
          </div>
          
          <div>
            <label className="form-label">Highest Governance Body Responsible</label>
            <input
              type="text"
              value={data.highestGovernanceBody}
              onChange={(e) => updateField('highestGovernanceBody', e.target.value)}
              className="form-input"
              placeholder="Board of Directors through the CSR & Sustainability Committee"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBForm;
