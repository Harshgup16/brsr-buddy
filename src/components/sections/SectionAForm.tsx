import { SectionA, BusinessActivity, ProductService } from '@/types/brsr';
import { Building2, MapPin, Users, TrendingUp, Heart, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface SectionAFormProps {
  data: SectionA;
  onChange: (data: SectionA) => void;
}

const SectionAForm = ({ data, onChange }: SectionAFormProps) => {
  const updateField = <K extends keyof SectionA>(key: K, value: SectionA[K]) => {
    onChange({ ...data, [key]: value });
  };

  const updateCompanyDetails = <K extends keyof SectionA['companyDetails']>(
    key: K, 
    value: SectionA['companyDetails'][K]
  ) => {
    onChange({
      ...data,
      companyDetails: { ...data.companyDetails, [key]: value },
    });
  };

  const updateContactPerson = <K extends keyof SectionA['companyDetails']['contactPerson']>(
    key: K,
    value: SectionA['companyDetails']['contactPerson'][K]
  ) => {
    onChange({
      ...data,
      companyDetails: {
        ...data.companyDetails,
        contactPerson: { ...data.companyDetails.contactPerson, [key]: value },
      },
    });
  };

  const addBusinessActivity = () => {
    updateField('businessActivities', [
      ...data.businessActivities,
      { description: '', nicCode: '', turnoverPercentage: 0 },
    ]);
  };

  const removeBusinessActivity = (index: number) => {
    updateField('businessActivities', data.businessActivities.filter((_, i) => i !== index));
  };

  const updateBusinessActivity = (index: number, field: keyof BusinessActivity, value: string | number) => {
    const updated = data.businessActivities.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    updateField('businessActivities', updated);
  };

  const addProductService = () => {
    updateField('productsServices', [
      ...data.productsServices,
      { name: '', nicCode: '', turnoverPercentage: 0 },
    ]);
  };

  const removeProductService = (index: number) => {
    updateField('productsServices', data.productsServices.filter((_, i) => i !== index));
  };

  const updateProductService = (index: number, field: keyof ProductService, value: string | number) => {
    const updated = data.productsServices.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    updateField('productsServices', updated);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-8">
      {/* Section Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-display font-bold text-foreground mb-3">
          Section A: General Disclosures
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Provide company identification, business activities, operations, and employee information as per SEBI guidelines.
        </p>
      </div>

      {/* Q1-Q15: Company Details */}
      <div className="glass-card p-6 animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Company Details</h3>
            <p className="text-sm text-muted-foreground">Questions 1-15</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">1. Corporate Identity Number (CIN)</label>
            <input
              type="text"
              value={data.companyDetails.cin}
              onChange={(e) => updateCompanyDetails('cin', e.target.value)}
              className="form-input"
              placeholder="L23201MH1959GOI011388"
            />
          </div>
          
          <div>
            <label className="form-label">2. Company Name</label>
            <input
              type="text"
              value={data.companyDetails.name}
              onChange={(e) => updateCompanyDetails('name', e.target.value)}
              className="form-input"
              placeholder="Company Name"
            />
          </div>
          
          <div>
            <label className="form-label">3. Year of Incorporation</label>
            <input
              type="text"
              value={data.companyDetails.incorporationYear}
              onChange={(e) => updateCompanyDetails('incorporationYear', e.target.value)}
              className="form-input"
              placeholder="1959"
            />
          </div>
          
          <div>
            <label className="form-label">8. Financial Year</label>
            <input
              type="text"
              value={data.companyDetails.financialYear}
              onChange={(e) => updateCompanyDetails('financialYear', e.target.value)}
              className="form-input"
              placeholder="2023-24"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="form-label">4. Registered Office Address</label>
            <textarea
              value={data.companyDetails.registeredAddress}
              onChange={(e) => updateCompanyDetails('registeredAddress', e.target.value)}
              className="form-textarea"
              placeholder="Full registered office address"
              rows={2}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="form-label">5. Corporate Address</label>
            <textarea
              value={data.companyDetails.corporateAddress}
              onChange={(e) => updateCompanyDetails('corporateAddress', e.target.value)}
              className="form-textarea"
              placeholder="Full corporate address"
              rows={2}
            />
          </div>
          
          <div>
            <label className="form-label">6. Email</label>
            <input
              type="email"
              value={data.companyDetails.email}
              onChange={(e) => updateCompanyDetails('email', e.target.value)}
              className="form-input"
              placeholder="info@company.com"
            />
          </div>
          
          <div>
            <label className="form-label">7. Phone</label>
            <input
              type="tel"
              value={data.companyDetails.phone}
              onChange={(e) => updateCompanyDetails('phone', e.target.value)}
              className="form-input"
              placeholder="+91-11-26260000"
            />
          </div>
          
          <div>
            <label className="form-label">Website</label>
            <input
              type="url"
              value={data.companyDetails.website}
              onChange={(e) => updateCompanyDetails('website', e.target.value)}
              className="form-input"
              placeholder="www.company.com"
            />
          </div>
          
          <div>
            <label className="form-label">10. Paid-up Capital</label>
            <input
              type="text"
              value={data.companyDetails.paidUpCapital}
              onChange={(e) => updateCompanyDetails('paidUpCapital', e.target.value)}
              className="form-input"
              placeholder="₹ 14128.77 Crores"
            />
          </div>
          
          <div>
            <label className="form-label">14. Reporting Boundary</label>
            <select
              value={data.companyDetails.reportingBoundary}
              onChange={(e) => updateCompanyDetails('reportingBoundary', e.target.value)}
              className="form-input"
            >
              <option value="">Select...</option>
              <option value="Standalone">Standalone</option>
              <option value="Consolidated">Consolidated</option>
            </select>
          </div>
          
          <div>
            <label className="form-label">15. Assurance Provider</label>
            <input
              type="text"
              value={data.companyDetails.assuranceProvider}
              onChange={(e) => updateCompanyDetails('assuranceProvider', e.target.value)}
              className="form-input"
              placeholder="Ernst & Young LLP"
            />
          </div>
        </div>

        {/* Contact Person */}
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-medium text-foreground mb-4">11. Contact Person Details</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Name</label>
              <input
                type="text"
                value={data.companyDetails.contactPerson.name}
                onChange={(e) => updateContactPerson('name', e.target.value)}
                className="form-input"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="form-label">Designation</label>
              <input
                type="text"
                value={data.companyDetails.contactPerson.designation}
                onChange={(e) => updateContactPerson('designation', e.target.value)}
                className="form-input"
                placeholder="Chairman / Director"
              />
            </div>
            <div>
              <label className="form-label">Phone</label>
              <input
                type="tel"
                value={data.companyDetails.contactPerson.phone}
                onChange={(e) => updateContactPerson('phone', e.target.value)}
                className="form-input"
                placeholder="+91-11-26260000"
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                value={data.companyDetails.contactPerson.email}
                onChange={(e) => updateContactPerson('email', e.target.value)}
                className="form-input"
                placeholder="contact@company.com"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Q16: Business Activities */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">16. Business Activities</h3>
              <p className="text-sm text-muted-foreground">Top 3 by turnover percentage</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={addBusinessActivity}>
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </div>

        <div className="space-y-4">
          {data.businessActivities.map((activity, index) => (
            <div key={index} className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg">
              <div className="flex-1 grid md:grid-cols-3 gap-4">
                <div>
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    value={activity.description}
                    onChange={(e) => updateBusinessActivity(index, 'description', e.target.value)}
                    className="form-input"
                    placeholder="Refining of Crude Oil"
                  />
                </div>
                <div>
                  <label className="form-label">NIC Code</label>
                  <input
                    type="text"
                    value={activity.nicCode}
                    onChange={(e) => updateBusinessActivity(index, 'nicCode', e.target.value)}
                    className="form-input"
                    placeholder="19201"
                  />
                </div>
                <div>
                  <label className="form-label">Turnover %</label>
                  <input
                    type="number"
                    value={activity.turnoverPercentage}
                    onChange={(e) => updateBusinessActivity(index, 'turnoverPercentage', Number(e.target.value))}
                    className="form-input"
                    placeholder="65"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeBusinessActivity(index)}
                className="text-destructive hover:text-destructive/80 mt-6"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Q17: Products/Services */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">17. Products/Services</h3>
              <p className="text-sm text-muted-foreground">Top products/services by turnover</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={addProductService}>
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </div>

        <div className="space-y-4">
          {data.productsServices.map((product, index) => (
            <div key={index} className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg">
              <div className="flex-1 grid md:grid-cols-3 gap-4">
                <div>
                  <label className="form-label">Product/Service Name</label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => updateProductService(index, 'name', e.target.value)}
                    className="form-input"
                    placeholder="Diesel"
                  />
                </div>
                <div>
                  <label className="form-label">NIC Code</label>
                  <input
                    type="text"
                    value={product.nicCode}
                    onChange={(e) => updateProductService(index, 'nicCode', e.target.value)}
                    className="form-input"
                    placeholder="19201"
                  />
                </div>
                <div>
                  <label className="form-label">Turnover %</label>
                  <input
                    type="number"
                    value={product.turnoverPercentage}
                    onChange={(e) => updateProductService(index, 'turnoverPercentage', Number(e.target.value))}
                    className="form-input"
                    placeholder="45"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeProductService(index)}
                className="text-destructive hover:text-destructive/80 mt-6"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Q18: Operations */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">18-19. Operations & Markets</h3>
            <p className="text-sm text-muted-foreground">National and international presence</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="form-label">National Plants</label>
            <input
              type="number"
              value={data.operations.nationalPlants}
              onChange={(e) => updateField('operations', { ...data.operations, nationalPlants: Number(e.target.value) })}
              className="form-input"
              min="0"
            />
          </div>
          <div>
            <label className="form-label">National Offices</label>
            <input
              type="number"
              value={data.operations.nationalOffices}
              onChange={(e) => updateField('operations', { ...data.operations, nationalOffices: Number(e.target.value) })}
              className="form-input"
              min="0"
            />
          </div>
          <div>
            <label className="form-label">International Plants</label>
            <input
              type="number"
              value={data.operations.internationalPlants}
              onChange={(e) => updateField('operations', { ...data.operations, internationalPlants: Number(e.target.value) })}
              className="form-input"
              min="0"
            />
          </div>
          <div>
            <label className="form-label">International Offices</label>
            <input
              type="number"
              value={data.operations.internationalOffices}
              onChange={(e) => updateField('operations', { ...data.operations, internationalOffices: Number(e.target.value) })}
              className="form-input"
              min="0"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="form-label">Domestic States Served</label>
            <input
              type="number"
              value={data.markets.domesticStates}
              onChange={(e) => updateField('markets', { ...data.markets, domesticStates: Number(e.target.value) })}
              className="form-input"
              min="0"
              max="28"
            />
          </div>
          <div>
            <label className="form-label">International Countries</label>
            <input
              type="number"
              value={data.markets.internationalCountries}
              onChange={(e) => updateField('markets', { ...data.markets, internationalCountries: Number(e.target.value) })}
              className="form-input"
              min="0"
            />
          </div>
          <div>
            <label className="form-label">Export Percentage (%)</label>
            <input
              type="number"
              value={data.markets.exportPercentage}
              onChange={(e) => updateField('markets', { ...data.markets, exportPercentage: Number(e.target.value) })}
              className="form-input"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>

      {/* Q20-21: Employees & Workers */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '250ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">20-21. Employees & Workers</h3>
            <p className="text-sm text-muted-foreground">Permanent and contractual workforce details</p>
          </div>
        </div>

        {/* Employees Table */}
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-4">20. Employees</h4>
          <div className="overflow-x-auto">
            <table className="brsr-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Total</th>
                  <th>Male</th>
                  <th>Female</th>
                  <th>Differently Abled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Permanent</td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.permanent.total}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        permanent: { ...data.employees.permanent, total: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.permanent.male}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        permanent: { ...data.employees.permanent, male: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.permanent.female}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        permanent: { ...data.employees.permanent, female: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.permanent.differentlyAbled}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        permanent: { ...data.employees.permanent, differentlyAbled: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">Other (Contractual)</td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.other.total}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        other: { ...data.employees.other, total: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.other.male}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        other: { ...data.employees.other, male: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.other.female}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        other: { ...data.employees.other, female: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.employees.other.differentlyAbled}
                      onChange={(e) => updateField('employees', {
                        ...data.employees,
                        other: { ...data.employees.other, differentlyAbled: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Workers Table */}
        <div>
          <h4 className="font-medium text-foreground mb-4">21. Workers</h4>
          <div className="overflow-x-auto">
            <table className="brsr-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Total</th>
                  <th>Male</th>
                  <th>Female</th>
                  <th>Differently Abled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Permanent</td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.permanent.total}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        permanent: { ...data.workers.permanent, total: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.permanent.male}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        permanent: { ...data.workers.permanent, male: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.permanent.female}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        permanent: { ...data.workers.permanent, female: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.permanent.differentlyAbled}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        permanent: { ...data.workers.permanent, differentlyAbled: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">Other (Contractual)</td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.other.total}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        other: { ...data.workers.other, total: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.other.male}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        other: { ...data.workers.other, male: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.other.female}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        other: { ...data.workers.other, female: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={data.workers.other.differentlyAbled}
                      onChange={(e) => updateField('workers', {
                        ...data.workers,
                        other: { ...data.workers.other, differentlyAbled: Number(e.target.value) }
                      })}
                      className="form-input py-1 px-2"
                      min="0"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Q22-26: Women Participation, CSR, Grievances */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
            <Heart className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">22-26. Participation, CSR & Grievances</h3>
            <p className="text-sm text-muted-foreground">Women in leadership, CSR details, and mechanisms</p>
          </div>
        </div>

        {/* Women Participation */}
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-4">22. Women Participation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">Board of Directors</p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="form-label">Total</label>
                  <input
                    type="number"
                    value={data.womenParticipation.boardOfDirectors.total}
                    onChange={(e) => updateField('womenParticipation', {
                      ...data.womenParticipation,
                      boardOfDirectors: { ...data.womenParticipation.boardOfDirectors, total: Number(e.target.value) }
                    })}
                    className="form-input py-2"
                    min="0"
                  />
                </div>
                <div>
                  <label className="form-label">Women</label>
                  <input
                    type="number"
                    value={data.womenParticipation.boardOfDirectors.women}
                    onChange={(e) => updateField('womenParticipation', {
                      ...data.womenParticipation,
                      boardOfDirectors: { ...data.womenParticipation.boardOfDirectors, women: Number(e.target.value) }
                    })}
                    className="form-input py-2"
                    min="0"
                  />
                </div>
                <div>
                  <label className="form-label">%</label>
                  <input
                    type="number"
                    value={data.womenParticipation.boardOfDirectors.percentage}
                    onChange={(e) => updateField('womenParticipation', {
                      ...data.womenParticipation,
                      boardOfDirectors: { ...data.womenParticipation.boardOfDirectors, percentage: Number(e.target.value) }
                    })}
                    className="form-input py-2"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">Key Management Personnel</p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="form-label">Total</label>
                  <input
                    type="number"
                    value={data.womenParticipation.keyManagementPersonnel.total}
                    onChange={(e) => updateField('womenParticipation', {
                      ...data.womenParticipation,
                      keyManagementPersonnel: { ...data.womenParticipation.keyManagementPersonnel, total: Number(e.target.value) }
                    })}
                    className="form-input py-2"
                    min="0"
                  />
                </div>
                <div>
                  <label className="form-label">Women</label>
                  <input
                    type="number"
                    value={data.womenParticipation.keyManagementPersonnel.women}
                    onChange={(e) => updateField('womenParticipation', {
                      ...data.womenParticipation,
                      keyManagementPersonnel: { ...data.womenParticipation.keyManagementPersonnel, women: Number(e.target.value) }
                    })}
                    className="form-input py-2"
                    min="0"
                  />
                </div>
                <div>
                  <label className="form-label">%</label>
                  <input
                    type="number"
                    value={data.womenParticipation.keyManagementPersonnel.percentage}
                    onChange={(e) => updateField('womenParticipation', {
                      ...data.womenParticipation,
                      keyManagementPersonnel: { ...data.womenParticipation.keyManagementPersonnel, percentage: Number(e.target.value) }
                    })}
                    className="form-input py-2"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSR */}
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-4">24. CSR Details</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="form-label">CSR Obligation (₹ Crores)</label>
              <input
                type="number"
                value={data.csr.obligationAmount}
                onChange={(e) => updateField('csr', { ...data.csr, obligationAmount: Number(e.target.value) })}
                className="form-input"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="form-label">CSR Spent (₹ Crores)</label>
              <input
                type="number"
                value={data.csr.spentAmount}
                onChange={(e) => updateField('csr', { ...data.csr, spentAmount: Number(e.target.value) })}
                className="form-input"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="form-label">Projects Count</label>
              <input
                type="number"
                value={data.csr.projectsCount}
                onChange={(e) => updateField('csr', { ...data.csr, projectsCount: Number(e.target.value) })}
                className="form-input"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Transparency & Grievances */}
        <div>
          <h4 className="font-medium text-foreground mb-4">25-26. Transparency & Grievance Mechanisms</h4>
          <div className="space-y-4">
            <div>
              <label className="form-label">25. Transparency Measures</label>
              <textarea
                value={data.transparencyMeasures}
                onChange={(e) => updateField('transparencyMeasures', e.target.value)}
                className="form-textarea"
                placeholder="Annual Reports, Sustainability Reports, Website Updates..."
                rows={3}
              />
            </div>
            
            <div>
              <p className="form-label">26. Grievance Mechanisms Available For:</p>
              <div className="flex flex-wrap gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Switch
                    checked={data.grievanceMechanisms.stakeholders}
                    onCheckedChange={(checked) => updateField('grievanceMechanisms', {
                      ...data.grievanceMechanisms,
                      stakeholders: checked
                    })}
                  />
                  <span className="text-sm text-foreground">Stakeholders</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Switch
                    checked={data.grievanceMechanisms.employees}
                    onCheckedChange={(checked) => updateField('grievanceMechanisms', {
                      ...data.grievanceMechanisms,
                      employees: checked
                    })}
                  />
                  <span className="text-sm text-foreground">Employees</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Switch
                    checked={data.grievanceMechanisms.valueChainPartners}
                    onCheckedChange={(checked) => updateField('grievanceMechanisms', {
                      ...data.grievanceMechanisms,
                      valueChainPartners: checked
                    })}
                  />
                  <span className="text-sm text-foreground">Value Chain Partners</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAForm;
