import { useState } from 'react';
import { BRSRData, TabType } from '@/types/brsr';
import { getEmptyBRSRData } from '@/data/mockBRSRData';
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import UploadSection from '@/components/UploadSection';
import SectionAForm from '@/components/sections/SectionAForm';
import SectionBForm from '@/components/sections/SectionBForm';
import SectionCForm from '@/components/sections/SectionCForm';
import ReportPreview from '@/components/ReportPreview';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('upload');
  const [brsrData, setBrsrData] = useState<BRSRData | null>(null);

  const handleDataExtracted = (data: BRSRData) => {
    setBrsrData(data);
    setActiveTab('sectionA');
  };

  const handleSectionAChange = (sectionA: BRSRData['sectionA']) => {
    if (brsrData) setBrsrData({ ...brsrData, sectionA });
  };

  const handleSectionBChange = (sectionB: BRSRData['sectionB']) => {
    if (brsrData) setBrsrData({ ...brsrData, sectionB });
  };

  const handleSectionCChange = (sectionC: BRSRData['sectionC']) => {
    if (brsrData) setBrsrData({ ...brsrData, sectionC });
  };

  return (
    <div className="min-h-screen bg-background print:bg-white print:min-h-0">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5 pointer-events-none print:hidden" />
      
      <div className="print:hidden">
        <Header />
      </div>
      
      <div className="pt-16 print:pt-0">
        <div className="print:hidden">
          <TabNavigation 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            hasData={!!brsrData} 
          />
        </div>
        
        <main className="relative pb-12 print:pb-0">
          {activeTab === 'upload' && (
            <UploadSection onDataExtracted={handleDataExtracted} />
          )}
          {activeTab === 'sectionA' && brsrData && (
            <SectionAForm data={brsrData.sectionA} onChange={handleSectionAChange} />
          )}
          {activeTab === 'sectionB' && brsrData && (
            <SectionBForm data={brsrData.sectionB} onChange={handleSectionBChange} />
          )}
          {activeTab === 'sectionC' && brsrData && (
            <SectionCForm data={brsrData.sectionC} onChange={handleSectionCChange} />
          )}
          {activeTab === 'preview' && brsrData && (
            <ReportPreview data={brsrData} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
