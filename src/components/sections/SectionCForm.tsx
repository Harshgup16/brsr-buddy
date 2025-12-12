import { SectionC } from '@/types/brsr';
import { 
  Shield, Package, Users, MessageSquare, Heart, Leaf, 
  Building, TrendingUp, ShoppingCart, ChevronDown 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Principle1Form from './principles/Principle1Form';
import Principle2Form from './principles/Principle2Form';
import Principle3Form from './principles/Principle3Form';
import Principle4Form from './principles/Principle4Form';
import Principle5Form from './principles/Principle5Form';
import Principle6Form from './principles/Principle6Form';
import Principle7Form from './principles/Principle7Form';
import Principle8Form from './principles/Principle8Form';
import Principle9Form from './principles/Principle9Form';

interface SectionCFormProps {
  data: SectionC;
  onChange: (data: SectionC) => void;
}

const PRINCIPLES_CONFIG = [
  { 
    key: 'principle1', 
    name: 'Principle 1: Ethics, Transparency & Accountability',
    description: 'Training coverage, fines, disciplinary actions, whistleblowing',
    icon: Shield,
    color: 'text-blue-400'
  },
  { 
    key: 'principle2', 
    name: 'Principle 2: Safe & Sustainable Products',
    description: 'R&D investments, sustainable sourcing, EPR compliance',
    icon: Package,
    color: 'text-green-400'
  },
  { 
    key: 'principle3', 
    name: 'Principle 3: Employee & Worker Wellbeing',
    description: 'Benefits, safety incidents, training hours, LTIFR',
    icon: Users,
    color: 'text-purple-400'
  },
  { 
    key: 'principle4', 
    name: 'Principle 4: Stakeholder Engagement',
    description: 'Vulnerable groups, value chain engagement',
    icon: MessageSquare,
    color: 'text-yellow-400'
  },
  { 
    key: 'principle5', 
    name: 'Principle 5: Human Rights',
    description: 'Training, minimum wage, accessibility assessments',
    icon: Heart,
    color: 'text-red-400'
  },
  { 
    key: 'principle6', 
    name: 'Principle 6: Environment',
    description: 'Energy, water, emissions, waste management',
    icon: Leaf,
    color: 'text-emerald-400'
  },
  { 
    key: 'principle7', 
    name: 'Principle 7: Public Policy Advocacy',
    description: 'Trade associations, policy activities',
    icon: Building,
    color: 'text-indigo-400'
  },
  { 
    key: 'principle8', 
    name: 'Principle 8: Inclusive Growth',
    description: 'CSR projects, social impact assessments',
    icon: TrendingUp,
    color: 'text-orange-400'
  },
  { 
    key: 'principle9', 
    name: 'Principle 9: Consumer Value',
    description: 'Complaints, recalls, cybersecurity, surveys',
    icon: ShoppingCart,
    color: 'text-pink-400'
  },
] as const;

const SectionCForm = ({ data, onChange }: SectionCFormProps) => {
  const updatePrinciple = <K extends keyof SectionC>(key: K, value: SectionC[K]) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-6">
      {/* Section Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-display font-bold text-foreground mb-3">
          Section C: Principle-wise Performance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Detailed performance disclosures for each of the 9 NGRBC Principles with Essential and Leadership indicators.
        </p>
      </div>

      {/* Principles Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {PRINCIPLES_CONFIG.map((principle, index) => {
          const Icon = principle.icon;
          
          return (
            <AccordionItem 
              key={principle.key} 
              value={principle.key}
              className="glass-card border-none overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center ${principle.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base">{principle.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{principle.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4 border-t border-border">
                  {principle.key === 'principle1' && (
                    <Principle1Form 
                      data={data.principle1} 
                      onChange={(value) => updatePrinciple('principle1', value)} 
                    />
                  )}
                  {principle.key === 'principle2' && (
                    <Principle2Form 
                      data={data.principle2} 
                      onChange={(value) => updatePrinciple('principle2', value)} 
                    />
                  )}
                  {principle.key === 'principle3' && (
                    <Principle3Form 
                      data={data.principle3} 
                      onChange={(value) => updatePrinciple('principle3', value)} 
                    />
                  )}
                  {principle.key === 'principle4' && (
                    <Principle4Form 
                      data={data.principle4} 
                      onChange={(value) => updatePrinciple('principle4', value)} 
                    />
                  )}
                  {principle.key === 'principle5' && (
                    <Principle5Form 
                      data={data.principle5} 
                      onChange={(value) => updatePrinciple('principle5', value)} 
                    />
                  )}
                  {principle.key === 'principle6' && (
                    <Principle6Form 
                      data={data.principle6} 
                      onChange={(value) => updatePrinciple('principle6', value)} 
                    />
                  )}
                  {principle.key === 'principle7' && (
                    <Principle7Form 
                      data={data.principle7} 
                      onChange={(value) => updatePrinciple('principle7', value)} 
                    />
                  )}
                  {principle.key === 'principle8' && (
                    <Principle8Form 
                      data={data.principle8} 
                      onChange={(value) => updatePrinciple('principle8', value)} 
                    />
                  )}
                  {principle.key === 'principle9' && (
                    <Principle9Form 
                      data={data.principle9} 
                      onChange={(value) => updatePrinciple('principle9', value)} 
                    />
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default SectionCForm;
