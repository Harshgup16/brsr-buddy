import { BRSRData } from '@/types/brsr';
import { Button } from '@/components/ui/button';
import { FileDown, Printer, Leaf } from 'lucide-react';
import { useRef } from 'react';

interface ReportPreviewProps { data: BRSRData; }

const ReportPreview = ({ data }: ReportPreviewProps) => {
  const { sectionA, sectionB, sectionC } = data;
  const reportRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => window.print();

  const calcPercentage = (part: number, total: number): string => {
    if (!total) return '0%';
    return `${((part / total) * 100).toFixed(2)}%`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6 animate-fade-in print:hidden">
        <h2 className="text-2xl font-display font-bold text-foreground">Report Preview</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint}><Printer className="w-4 h-4 mr-2" />Print</Button>
          <Button variant="brsr" size="sm" onClick={handlePrint}><FileDown className="w-4 h-4 mr-2" />Save as PDF</Button>
        </div>
      </div>

      <div ref={reportRef} className="bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden animate-slide-up print:shadow-none">
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Leaf className="w-8 h-8" />
            <span className="text-2xl font-bold">BUSINESS RESPONSIBILITY & SUSTAINABILITY REPORT</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{sectionA.companyDetails.name || 'Company Name'}</h1>
          <p className="text-lg opacity-90">Financial Year: {sectionA.companyDetails.financialYear || '2023-24'}</p>
          <p className="text-sm opacity-75 mt-2">As per SEBI Annexure I Format</p>
        </div>

        <div className="p-8 space-y-8 text-sm">
          <section>
            <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-6">SECTION A: GENERAL DISCLOSURES</h2>
            <h3 className="text-lg font-semibold text-green-600 mb-4">I. Details of the listed entity</h3>
            <table className="w-full border-collapse mb-6">
              <tbody>
                <tr className="border-b"><td className="py-2 font-semibold w-1/3">1. CIN</td><td className="py-2">{sectionA.companyDetails.cin || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">2. Name</td><td className="py-2">{sectionA.companyDetails.name || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">3. Year of incorporation</td><td className="py-2">{sectionA.companyDetails.incorporationYear || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">4. Registered office address</td><td className="py-2">{sectionA.companyDetails.registeredAddress || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">5. Corporate address</td><td className="py-2">{sectionA.companyDetails.corporateAddress || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">6. E-mail</td><td className="py-2">{sectionA.companyDetails.email || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">7. Telephone</td><td className="py-2">{sectionA.companyDetails.phone || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">8. Website</td><td className="py-2">{sectionA.companyDetails.website || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">9. Financial year</td><td className="py-2">{sectionA.companyDetails.financialYear || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">10. Stock Exchanges</td><td className="py-2">{sectionA.companyDetails.stockExchanges?.join(', ') || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">11. Paid-up Capital</td><td className="py-2">{sectionA.companyDetails.paidUpCapital || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">12. Contact Person</td><td className="py-2">{sectionA.companyDetails.contactPerson?.name || '-'}, {sectionA.companyDetails.contactPerson?.designation || '-'}</td></tr>
                <tr className="border-b"><td className="py-2 font-semibold">13. Reporting boundary</td><td className="py-2">{sectionA.companyDetails.reportingBoundary || '-'}</td></tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold text-green-600 mb-4">IV. Employees (Q20)</h3>
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="p-2 border">Particulars</th>
                  <th className="p-2 border">Total</th>
                  <th className="p-2 border">Male</th>
                  <th className="p-2 border">% Male</th>
                  <th className="p-2 border">Female</th>
                  <th className="p-2 border">% Female</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-2 border">Permanent Employees</td><td className="p-2 border text-center">{sectionA.employees?.permanent?.total || 0}</td><td className="p-2 border text-center">{sectionA.employees?.permanent?.male || 0}</td><td className="p-2 border text-center">{calcPercentage(sectionA.employees?.permanent?.male || 0, sectionA.employees?.permanent?.total || 0)}</td><td className="p-2 border text-center">{sectionA.employees?.permanent?.female || 0}</td><td className="p-2 border text-center">{calcPercentage(sectionA.employees?.permanent?.female || 0, sectionA.employees?.permanent?.total || 0)}</td></tr>
                <tr className="border-b"><td className="p-2 border">Permanent Workers</td><td className="p-2 border text-center">{sectionA.workers?.permanent?.total || 0}</td><td className="p-2 border text-center">{sectionA.workers?.permanent?.male || 0}</td><td className="p-2 border text-center">{calcPercentage(sectionA.workers?.permanent?.male || 0, sectionA.workers?.permanent?.total || 0)}</td><td className="p-2 border text-center">{sectionA.workers?.permanent?.female || 0}</td><td className="p-2 border text-center">{calcPercentage(sectionA.workers?.permanent?.female || 0, sectionA.workers?.permanent?.total || 0)}</td></tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold text-green-600 mb-4">Q21. Women Participation</h3>
            <table className="w-full border-collapse mb-4">
              <thead><tr className="bg-green-700 text-white"><th className="p-2 border">Category</th><th className="p-2 border">Total</th><th className="p-2 border">Women</th><th className="p-2 border">%</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-2 border">Board of Directors</td><td className="p-2 border text-center">{sectionA.womenParticipation?.boardOfDirectors?.total || 0}</td><td className="p-2 border text-center">{sectionA.womenParticipation?.boardOfDirectors?.women || 0}</td><td className="p-2 border text-center">{sectionA.womenParticipation?.boardOfDirectors?.percentage || 0}%</td></tr>
                <tr className="border-b"><td className="p-2 border">Key Management Personnel</td><td className="p-2 border text-center">{sectionA.womenParticipation?.keyManagementPersonnel?.total || 0}</td><td className="p-2 border text-center">{sectionA.womenParticipation?.keyManagementPersonnel?.women || 0}</td><td className="p-2 border text-center">{sectionA.womenParticipation?.keyManagementPersonnel?.percentage || 0}%</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-6">SECTION B: MANAGEMENT AND PROCESS DISCLOSURES</h2>
            <p className="mb-4"><span className="font-semibold">Highest Governance Body:</span> {sectionB.highestGovernanceBody || '-'}</p>
            <p className="mb-4"><span className="font-semibold">Director Statement:</span> {sectionB.directorStatement || '-'}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-6">SECTION C: PRINCIPLE WISE PERFORMANCE</h2>
            
            <div className="mb-6">
              <h3 className="font-bold text-green-600 bg-green-50 p-3 rounded mb-4">PRINCIPLE 1: Ethics, Transparency and Accountability</h3>
              <p className="mb-2"><span className="font-semibold">Training Coverage:</span> Board: {sectionC.principle1?.trainingCoverage?.board}%, KMPs: {sectionC.principle1?.trainingCoverage?.kmps}%, Employees: {sectionC.principle1?.trainingCoverage?.employees}%, Workers: {sectionC.principle1?.trainingCoverage?.workers}%</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-green-600 bg-green-50 p-3 rounded mb-4">PRINCIPLE 3: Employee Wellbeing</h3>
              <table className="w-full border-collapse mb-4">
                <thead><tr className="bg-green-700 text-white"><th className="p-2 border">Safety Incident</th><th className="p-2 border">Employees</th><th className="p-2 border">Workers</th></tr></thead>
                <tbody>
                  <tr className="border-b"><td className="p-2 border">LTIFR</td><td className="p-2 border text-center">{sectionC.principle3?.safetyIncidentsEmployees?.ltifr || 0}</td><td className="p-2 border text-center">{sectionC.principle3?.safetyIncidentsWorkers?.ltifr || 0}</td></tr>
                  <tr className="border-b"><td className="p-2 border">Fatalities</td><td className="p-2 border text-center">{sectionC.principle3?.safetyIncidentsEmployees?.fatalities || 0}</td><td className="p-2 border text-center">{sectionC.principle3?.safetyIncidentsWorkers?.fatalities || 0}</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-green-600 bg-green-50 p-3 rounded mb-4">PRINCIPLE 6: Environment</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded"><p className="text-xl font-bold text-green-700">{((sectionC.principle6?.ghgEmissions?.scope1 || 0) / 1000000).toFixed(2)}M</p><p className="text-xs">Scope 1 (MT CO2e)</p></div>
                <div className="p-4 bg-green-50 rounded"><p className="text-xl font-bold text-green-700">{((sectionC.principle6?.ghgEmissions?.scope2 || 0) / 1000000).toFixed(2)}M</p><p className="text-xs">Scope 2 (MT CO2e)</p></div>
                <div className="p-4 bg-green-50 rounded"><p className="text-xl font-bold text-green-700">{sectionC.principle6?.water?.consumption?.toLocaleString() || 0}</p><p className="text-xs">Water (KL)</p></div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-gray-100 p-4 text-center text-xs text-gray-500">Generated by BRSR Report Generator | SEBI Annexure I Format</div>
      </div>
    </div>
  );
};

export default ReportPreview;
