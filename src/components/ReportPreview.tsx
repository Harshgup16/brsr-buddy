import { BRSRData } from '@/types/brsr';
import { Button } from '@/components/ui/button';
import { FileDown, Printer, Leaf } from 'lucide-react';

interface ReportPreviewProps { data: BRSRData; }

const ReportPreview = ({ data }: ReportPreviewProps) => {
  const { sectionA, sectionB, sectionC } = data;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6 animate-fade-in">
        <h2 className="text-2xl font-display font-bold text-foreground">Report Preview</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Printer className="w-4 h-4 mr-2" />Print</Button>
          <Button variant="brsr" size="sm"><FileDown className="w-4 h-4 mr-2" />Download PDF</Button>
        </div>
      </div>

      {/* Report Document */}
      <div className="bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-700 text-white p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4"><Leaf className="w-8 h-8" /><span className="text-2xl font-bold">BRSR REPORT</span></div>
          <h1 className="text-3xl font-bold mb-2">{sectionA.companyDetails.name || 'Company Name'}</h1>
          <p className="text-lg opacity-90">Financial Year: {sectionA.companyDetails.financialYear || '2023-24'}</p>
          <p className="text-sm opacity-75 mt-2">Business Responsibility and Sustainability Report as per SEBI Annexure 1</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Section A */}
          <section>
            <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-6">SECTION A: GENERAL DISCLOSURES</h2>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div><span className="font-semibold">1. CIN:</span> {sectionA.companyDetails.cin}</div>
                <div><span className="font-semibold">2. Name:</span> {sectionA.companyDetails.name}</div>
                <div><span className="font-semibold">3. Year of Incorporation:</span> {sectionA.companyDetails.incorporationYear}</div>
                <div><span className="font-semibold">8. Financial Year:</span> {sectionA.companyDetails.financialYear}</div>
              </div>
              <div><span className="font-semibold">4. Registered Address:</span> {sectionA.companyDetails.registeredAddress}</div>
              <div><span className="font-semibold">5. Corporate Address:</span> {sectionA.companyDetails.corporateAddress}</div>
              
              <h3 className="font-bold text-green-700 mt-6 mb-3">20. Employees & 21. Workers</h3>
              <table className="w-full border-collapse text-xs">
                <thead><tr className="bg-green-700 text-white"><th className="p-2 border">Category</th><th className="p-2 border">Total</th><th className="p-2 border">Male</th><th className="p-2 border">Female</th></tr></thead>
                <tbody>
                  <tr><td className="p-2 border font-medium">Permanent Employees</td><td className="p-2 border text-center">{sectionA.employees.permanent.total}</td><td className="p-2 border text-center">{sectionA.employees.permanent.male}</td><td className="p-2 border text-center">{sectionA.employees.permanent.female}</td></tr>
                  <tr><td className="p-2 border font-medium">Permanent Workers</td><td className="p-2 border text-center">{sectionA.workers.permanent.total}</td><td className="p-2 border text-center">{sectionA.workers.permanent.male}</td><td className="p-2 border text-center">{sectionA.workers.permanent.female}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section B */}
          <section>
            <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-6">SECTION B: MANAGEMENT & PROCESS DISCLOSURES</h2>
            <p className="text-sm mb-4"><span className="font-semibold">Highest Governance Body:</span> {sectionB.highestGovernanceBody}</p>
            <p className="text-sm"><span className="font-semibold">Director's Statement:</span> {sectionB.directorStatement}</p>
          </section>

          {/* Section C Summary */}
          <section>
            <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-6">SECTION C: PRINCIPLE-WISE PERFORMANCE</h2>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="p-4 bg-green-50 rounded-lg"><p className="text-2xl font-bold text-green-700">{sectionC.principle1.trainingCoverage.employees}%</p><p className="text-gray-600">Ethics Training</p></div>
              <div className="p-4 bg-green-50 rounded-lg"><p className="text-2xl font-bold text-green-700">{sectionC.principle3.safetyIncidentsEmployees.ltifr}</p><p className="text-gray-600">LTIFR</p></div>
              <div className="p-4 bg-green-50 rounded-lg"><p className="text-2xl font-bold text-green-700">{(sectionC.principle6.ghgEmissions.scope1 / 1000000).toFixed(1)}M</p><p className="text-gray-600">Scope 1 (MT CO2e)</p></div>
            </div>
          </section>
        </div>

        <div className="bg-gray-100 p-4 text-center text-xs text-gray-500">Generated by BRSR Report Generator | SEBI Annexure 1 Format</div>
      </div>
    </div>
  );
};

export default ReportPreview;
