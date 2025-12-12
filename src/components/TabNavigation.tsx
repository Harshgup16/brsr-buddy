import { TabType } from '@/types/brsr';
import { Upload, Building2, ScrollText, BarChart3, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  hasData: boolean;
}

const tabs: { id: TabType; label: string; icon: React.ElementType; description: string }[] = [
  { id: 'upload', label: 'Upload', icon: Upload, description: 'Upload PDF/Excel' },
  { id: 'sectionA', label: 'Section A', icon: Building2, description: 'General Disclosures' },
  { id: 'sectionB', label: 'Section B', icon: ScrollText, description: 'Policy Matrix' },
  { id: 'sectionC', label: 'Section C', icon: BarChart3, description: 'Principle Performance' },
  { id: 'preview', label: 'Preview', icon: Eye, description: 'Report Preview' },
];

const TabNavigation = ({ activeTab, onTabChange, hasData }: TabNavigationProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isDisabled = tab.id !== 'upload' && !hasData;
            
            return (
              <button
                key={tab.id}
                onClick={() => !isDisabled && onTabChange(tab.id)}
                disabled={isDisabled}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 min-w-fit",
                  isActive 
                    ? "bg-secondary text-secondary-foreground shadow-lg" 
                    : isDisabled 
                      ? "text-muted-foreground/50 cursor-not-allowed"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg transition-all",
                  isActive ? "bg-primary-foreground/20" : "bg-muted/50"
                )}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-medium">{tab.label}</p>
                  <p className={cn(
                    "text-xs",
                    isActive ? "text-secondary-foreground/80" : "text-muted-foreground"
                  )}>
                    {tab.description}
                  </p>
                </div>
                
                {/* Step indicator */}
                <div className={cn(
                  "absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {index + 1}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
