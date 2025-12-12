// BRSR Data Types based on SEBI Annexure 1 Format

export interface CompanyDetails {
  cin: string;
  name: string;
  incorporationYear: string;
  registeredAddress: string;
  corporateAddress: string;
  email: string;
  phone: string;
  website: string;
  financialYear: string;
  stockExchanges: string[];
  paidUpCapital: string;
  contactPerson: {
    name: string;
    designation: string;
    phone: string;
    email: string;
  };
  reportingBoundary: string;
  assuranceProvider: string;
}

export interface BusinessActivity {
  description: string;
  nicCode: string;
  turnoverPercentage: number;
}

export interface ProductService {
  name: string;
  nicCode: string;
  turnoverPercentage: number;
}

export interface OperationsData {
  nationalPlants: number;
  nationalOffices: number;
  internationalPlants: number;
  internationalOffices: number;
}

export interface MarketData {
  domesticStates: number;
  internationalCountries: number;
  exportPercentage: number;
}

export interface EmployeeBreakdown {
  total: number;
  male: number;
  female: number;
  differentlyAbled: number;
}

export interface EmployeesData {
  permanent: EmployeeBreakdown;
  other: EmployeeBreakdown;
}

export interface WorkersData {
  permanent: EmployeeBreakdown;
  other: EmployeeBreakdown;
}

export interface WomenParticipation {
  boardOfDirectors: {
    total: number;
    women: number;
    percentage: number;
  };
  keyManagementPersonnel: {
    total: number;
    women: number;
    percentage: number;
  };
}

export interface TurnoverRate {
  permanentEmployees: {
    maleFY: number;
    femaleFY: number;
    malePrevFY: number;
    femalePrevFY: number;
  };
  permanentWorkers: {
    maleFY: number;
    femaleFY: number;
    malePrevFY: number;
    femalePrevFY: number;
  };
}

export interface CSRData {
  obligationAmount: number;
  spentAmount: number;
  projectsCount: number;
}

export interface GrievanceMechanism {
  stakeholders: boolean;
  employees: boolean;
  valueChainPartners: boolean;
}

export interface SectionA {
  companyDetails: CompanyDetails;
  businessActivities: BusinessActivity[];
  productsServices: ProductService[];
  operations: OperationsData;
  markets: MarketData;
  employees: EmployeesData;
  workers: WorkersData;
  womenParticipation: WomenParticipation;
  turnoverRate: TurnoverRate;
  csr: CSRData;
  transparencyMeasures: string;
  grievanceMechanisms: GrievanceMechanism;
}

export interface PolicyInfo {
  hasPolicy: boolean;
  weblink: string;
  boardApproved: boolean;
  directorStatement: boolean;
  committeeExists: boolean;
}

export interface PolicyMatrix {
  P1_Ethics: PolicyInfo;
  P2_Products: PolicyInfo;
  P3_Employees: PolicyInfo;
  P4_Stakeholders: PolicyInfo;
  P5_HumanRights: PolicyInfo;
  P6_Environment: PolicyInfo;
  P7_PublicPolicy: PolicyInfo;
  P8_InclusiveGrowth: PolicyInfo;
  P9_ConsumerValue: PolicyInfo;
}

export interface SectionB {
  policyMatrix: PolicyMatrix;
  commitments: string;
  directorStatement: string;
  highestGovernanceBody: string;
}

export interface TrainingCoverage {
  board: number;
  kmps: number;
  employees: number;
  workers: number;
}

export interface MonetaryFine {
  regulation: string;
  authority: string;
  amount: number;
  appealStatus: string;
}

export interface NonMonetaryFine {
  regulation: string;
  authority: string;
  description: string;
  appealStatus: string;
}

export interface Principle1 {
  trainingCoverage: TrainingCoverage;
  monetaryFines: MonetaryFine[];
  nonMonetaryFines: NonMonetaryFine[];
  disciplinaryActions: number;
  conflictComplaints: number;
  awarenessPrograms: string;
  whistleblowingProcesses: string;
}

export interface Principle2 {
  rdInvestmentPercentage: number;
  capexInvestmentPercentage: number;
  sustainableSourcingPercentage: number;
  recycledInputsPercentage: number;
  productsWithImpact: string;
  eprCompliance: boolean;
  reclaimedProducts: string;
}

export interface WellbeingMeasure {
  category: string;
  permanentEmployeesMale: number;
  permanentEmployeesFemale: number;
  otherEmployeesMale: number;
  otherEmployeesFemale: number;
  permanentWorkersMale: number;
  permanentWorkersFemale: number;
  otherWorkersMale: number;
  otherWorkersFemale: number;
}

export interface SafetyIncident {
  ltifr: number;
  fatalities: number;
  highConsequenceInjuries: number;
  recordableIncidents: number;
}

export interface Principle3 {
  wellbeingMeasures: WellbeingMeasure[];
  retirementBenefitsCoverage: number;
  accessibilityForDifferentlyAbled: string;
  trainingHoursMaleEmployees: number;
  trainingHoursFemaleEmployees: number;
  trainingHoursMaleWorkers: number;
  trainingHoursFemaleWorkers: number;
  safetyIncidentsEmployees: SafetyIncident;
  safetyIncidentsWorkers: SafetyIncident;
  healthSafetyManagement: string;
  workingConditionsComplaints: number;
  statutoryDuesCompliance: boolean;
  minimumWagesCompliance: boolean;
}

export interface Principle4 {
  vulnerableGroupsIdentified: string[];
  valueChainEngagementChannels: string[];
  stakeholderFeedbackIntegration: string;
}

export interface Principle5 {
  humanRightsTrainingEmployees: number;
  humanRightsTrainingValueChain: number;
  policyElements: string[];
  minimumWageRemuneration: string;
  focalPoints: string;
  grievanceMechanisms: string;
  accessibilityAssessments: number;
}

export interface EnergyData {
  renewableJoules: number;
  nonRenewableJoules: number;
  intensityRatio: number;
}

export interface WaterData {
  surfaceWithdrawal: number;
  groundWithdrawal: number;
  seawaterWithdrawal: number;
  discharge: number;
  consumption: number;
  intensityRatio: number;
}

export interface AirEmissions {
  nox: number;
  sox: number;
  pm: number;
}

export interface GHGEmissions {
  scope1: number;
  scope2: number;
  scope3: number;
  intensityRatio: number;
}

export interface WasteData {
  plasticGenerated: number;
  eWasteGenerated: number;
  biomedicalGenerated: number;
  radioactiveGenerated: number;
  hazardousGenerated: number;
  otherGenerated: number;
  recovered: number;
  disposed: number;
}

export interface Principle6 {
  energy: EnergyData;
  water: WaterData;
  airEmissions: AirEmissions;
  ghgEmissions: GHGEmissions;
  waste: WasteData;
  environmentalImpactAssessments: number;
  significantSpills: number;
}

export interface TradeAssociation {
  name: string;
  focus: string;
}

export interface Principle7 {
  tradeAssociations: TradeAssociation[];
  policyAdvocacyActivities: string;
  correctiveActions: string;
}

export interface CSRProject {
  name: string;
  beneficiaries: number;
  socialImpact: string;
}

export interface Principle8 {
  csrProjects: CSRProject[];
  socialImpactAssessments: number;
  rehabilitationProjects: number;
}

export interface ConsumerComplaint {
  category: string;
  currentFY: number;
  previousFY: number;
  pendingResolution: number;
}

export interface Principle9 {
  consumerComplaints: ConsumerComplaint[];
  productRecalls: number;
  cybersecurityIncidents: number;
  correctiveActions: string;
  consumerSurveys: number;
  feedbackChannels: string[];
}

export interface SectionC {
  principle1: Principle1;
  principle2: Principle2;
  principle3: Principle3;
  principle4: Principle4;
  principle5: Principle5;
  principle6: Principle6;
  principle7: Principle7;
  principle8: Principle8;
  principle9: Principle9;
}

export interface BRSRData {
  sectionA: SectionA;
  sectionB: SectionB;
  sectionC: SectionC;
}

export type TabType = 'upload' | 'sectionA' | 'sectionB' | 'sectionC' | 'preview';

export interface ExtractionProgress {
  currentChunk: number;
  totalChunks: number;
  chunkName: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
}
