import { TrackedOrder } from '../types';

export const MOCK_ORDERS: Record<string, TrackedOrder> = {
  'JUR-84291': {
    orderId: 'JUR-84291',
    clientName: 'Aman Sharma',
    phone: '+91 98120 44552',
    email: 'aman.sharma@techspire.in',
    serviceName: 'Private Limited Company Incorporation',
    filingEntityName: 'Techspire Innovations Private Limited',
    currentStage: 'MCA/Govt Filing',
    estimatedCompletion: 'Tomorrow, 5:00 PM',
    assignedProfessional: {
      name: 'Hannu Goyal',
      role: 'Company Secretary',
      copNumber: 'FCS 11842 / CP 19284',
      phone: '+91 79880 68145',
    },
    timeline: [
      {
        stage: 'Order Received',
        timestamp: '14 Aug 2026, 10:30 AM',
        description: 'Order placed, welcome email sent, and CS onboarding lead assigned.',
        completed: true,
      },
      {
        stage: 'Document Verification',
        timestamp: '15 Aug 2026, 02:15 PM',
        description: 'PAN, Aadhaar, electricity bill and promoter NOC verified and verified against MCA database.',
        completed: true,
      },
      {
        stage: 'MCA/Govt Filing',
        timestamp: '16 Aug 2026, 11:45 AM',
        description: 'SPICe+ Part A Name Approved (TECHSPIRE INNOVATIONS PVT LTD). SPICe+ Part B & e-MoA uploaded on MCA V3 Portal under SRN AA9281044.',
        completed: false,
        active: true,
      },
      {
        stage: 'Completed',
        timestamp: 'Pending ROC Approval',
        description: 'Certificate of Incorporation (CIN), PAN, TAN, and EPFO/ESIC certificates dispatch.',
        completed: false,
      },
    ],
    documentsUploaded: [
      { name: 'Director PAN Cards (2)', status: 'Verified' },
      { name: 'Director Aadhaar Cards (2)', status: 'Verified' },
      { name: 'Office Electricity Bill & NOC', status: 'Verified' },
      { name: 'Draft e-MoA & e-AoA (Charter)', status: 'Verified' },
    ],
    downloadableCertificates: [
      { name: 'MCA_SPICe_Part_A_Name_Approval.pdf', issueDate: '15 Aug 2026', fileSize: '240 KB' },
      { name: 'ROC_Challan_SRN_AA9281044.pdf', issueDate: '16 Aug 2026', fileSize: '180 KB' },
    ],
  },
  'JUR-71044': {
    orderId: 'JUR-71044',
    clientName: 'Pooja Verma',
    phone: '+91 94160 88219',
    email: 'pooja@vermafoods.com',
    serviceName: 'GST Registration & MSME Udyam',
    filingEntityName: 'Verma Organic Foods',
    currentStage: 'Completed',
    estimatedCompletion: 'Completed on 12 Aug 2026',
    assignedProfessional: {
      name: 'CA Rajesh Singhal',
      role: 'Chartered Accountant',
      copNumber: 'FCA 094821',
      phone: '+91 79880 68145',
    },
    timeline: [
      { stage: 'Order Received', timestamp: '08 Aug 2026, 11:00 AM', description: 'Application initiated.', completed: true },
      { stage: 'Document Verification', timestamp: '09 Aug 2026, 04:00 PM', description: 'Aadhaar authentication and premise proofs cleared.', completed: true },
      { stage: 'MCA/Govt Filing', timestamp: '10 Aug 2026, 01:20 PM', description: 'Submitted on GST Portal ARN AA060826019284F.', completed: true },
      { stage: 'Completed', timestamp: '12 Aug 2026, 03:30 PM', description: 'GSTIN 06AAAFV9821M1Z5 & Udyam Certificate issued successfully.', completed: true },
    ],
    documentsUploaded: [
      { name: 'Proprietor PAN & Aadhaar', status: 'Verified' },
      { name: 'Bank Cancelled Cheque', status: 'Verified' },
      { name: 'Shop Electricity Bill & Rent Deed', status: 'Verified' },
    ],
    downloadableCertificates: [
      { name: 'GST_Registration_Certificate_REG-06.pdf', issueDate: '12 Aug 2026', fileSize: '412 KB' },
      { name: 'MSME_Udyam_Registration_UDYAM-HR-04-00291.pdf', issueDate: '11 Aug 2026', fileSize: '290 KB' },
    ],
  },
  'JUR-92381': {
    orderId: 'JUR-92381',
    clientName: 'Kunal Singhania',
    phone: '+91 98991 33201',
    email: 'kunal@singhaniabrew.com',
    serviceName: 'Trademark Registration (™)',
    filingEntityName: 'Singhania Craft Brews',
    currentStage: 'MCA/Govt Filing',
    estimatedCompletion: 'In Examination by IP India',
    assignedProfessional: {
      name: 'Adv. Priyanka Sharma',
      role: 'Senior Legal Advocate',
      copNumber: 'D/1942/2015',
      phone: '+91 79880 68145',
    },
    timeline: [
      { stage: 'Order Received', timestamp: '01 Aug 2026, 09:15 AM', description: 'Trademark order received.', completed: true },
      { stage: 'Document Verification', timestamp: '01 Aug 2026, 12:00 PM', description: 'Phonetic and Nice Class search completed (Class 32 & 33).', completed: true },
      { stage: 'MCA/Govt Filing', timestamp: '01 Aug 2026, 04:45 PM', description: 'Form TM-A filed under Application No. 5892104. ™ Allocated.', completed: true, active: true },
      { stage: 'Completed', timestamp: 'Awaiting Examination Report / Journal', description: 'IP India Examiner review in progress.', completed: false },
    ],
    documentsUploaded: [
      { name: 'Brand Logo & Typography Vector', status: 'Verified' },
      { name: 'Power of Attorney (TM-48)', status: 'Verified' },
      { name: 'MSME Udyam Certificate for 50% Subsidy', status: 'Verified' },
    ],
    downloadableCertificates: [
      { name: 'IP_India_TM_A_Acknowledgement_5892104.pdf', issueDate: '01 Aug 2026', fileSize: '320 KB' },
    ],
  },
};

export function getOrderByQuery(query: string): TrackedOrder | null {
  const clean = query.trim().toUpperCase();
  if (MOCK_ORDERS[clean]) {
    return MOCK_ORDERS[clean];
  }

  // Check by partial match or phone number
  for (const order of Object.values(MOCK_ORDERS)) {
    if (order.phone.includes(query) || order.email.toLowerCase().includes(query.toLowerCase()) || order.orderId.includes(clean)) {
      return order;
    }
  }

  // If user entered a realistic custom order ID (e.g. JUR-12345 or a 10-digit phone), generate a realistic dynamic order state so testing is seamless!
  if (clean.startsWith('JUR-') || /^\d{10}$/.test(query.trim())) {
    const generatedId = clean.startsWith('JUR-') ? clean : `JUR-${query.trim().slice(-5)}`;
    return {
      orderId: generatedId,
      clientName: 'Valued Client',
      phone: query.includes('@') ? '+91 79880 68145' : query.trim(),
      email: query.includes('@') ? query.trim() : 'client@jurisync.online',
      serviceName: 'ROC & MCA Secretarial Compliance Filing',
      filingEntityName: 'Jurisync Client Enterprise',
      currentStage: 'Document Verification',
      estimatedCompletion: 'In Progress (Within 48 Hours)',
      assignedProfessional: {
        name: 'Hannu Goyal',
        role: 'Company Secretary',
        copNumber: 'FCS 11842 / CP 19284',
        phone: '+91 79880 68145',
      },
      timeline: [
        { stage: 'Order Received', timestamp: 'Today, 09:00 AM', description: 'Order logged in Jurisync compliance registry.', completed: true },
        { stage: 'Document Verification', timestamp: 'In Progress', description: 'Our Company Secretary is scrutinizing your statutory documents.', completed: false, active: true },
        { stage: 'MCA/Govt Filing', timestamp: 'Pending', description: 'Submission on MCA V3 / GST Portal with official government SRN.', completed: false },
        { stage: 'Completed', timestamp: 'Pending', description: 'Final approved certificate issuance and compliance dossier handover.', completed: false },
      ],
      documentsUploaded: [
        { name: 'Entity Incorporation / KYC Proofs', status: 'Verified' },
        { name: 'Financial Statements / Premises NOC', status: 'Pending Review' },
      ],
      downloadableCertificates: [
        { name: 'Jurisync_Filing_Initiation_Receipt.pdf', issueDate: 'Today', fileSize: '190 KB' },
      ],
    };
  }

  return null;
}
