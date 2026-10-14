export const SITE = {
  name: 'F. C. Sondhi Charitable Trust',
  shortName: 'FCSCT',
  founded: 1978,
  tagline: 'Serving the needy in Jalandhar since 1978',
  description:
    'The F. C. Sondhi Charitable Trust, founded on 2 May 1978, provides scholarships, vocational training grants and monthly assistance to the elderly, widows and physically challenged people of Jalandhar and beyond.',
  email: 'fcsondhitrust@gmail.com',
  phone: '81980-62233',
  whatsapp: '918198062233',
  address: {
    street: '15 Adarsh Nagar',
    city: 'Jalandhar',
    state: 'Punjab',
    postalCode: '144008',
    country: 'India',
  },
  bank: {
    beneficiary: 'F.C. Sondhi Charitable Trust, 15 Adarsh Nagar, Jalandhar-144008',
    bankName: 'Union Bank of India, Basti Nau, Jalandhar',
    accountNumber: '390602050000119',
    ifsc: 'UBIN0539066',
  },
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about-us/', label: 'About Us' },
  { href: '/grants-scholarships/', label: 'Scholarships & Grants' },
  { href: '/how-to-donate/', label: 'How to Donate' },
  { href: '/trust-activities-updates/', label: 'Activities & Updates' },
  { href: '/ideas-exchange/', label: 'Ideas Exchange' },
  { href: '/e-magazine/', label: 'e-Magazine' },
  { href: '/annual-reports/', label: 'Annual Reports' },
  { href: '/contact/', label: 'Contact' },
] as const;

export interface NavItem {
  href: string;
  label: string;
}

export const SPONSORSHIP_TIERS = [
  { stage: 'Classes 1 to 7', amount: '₹1,500', note: 'per year' },
  { stage: 'Class 8 or 9', amount: '₹3,000', note: 'per year' },
  { stage: 'Class 10', amount: '₹4,000', note: 'per year' },
  { stage: 'Class 10+1 or 10+2', amount: '₹5,000', note: 'per year' },
  { stage: 'Graduation — Arts / Commerce', amount: '₹5,400', note: 'per year' },
  { stage: 'Graduation — Professional Courses', amount: '₹7,200', note: 'per year' },
  { stage: 'Post Graduation', amount: '₹8,400', note: 'per year' },
  { stage: 'Sports', amount: '₹8,000', note: 'per year' },
  { stage: 'Vocational', amount: '₹10,000', note: 'per year' },
] as const;

export const MAGAZINE_ISSUES = [
  { year: '2026', issues: ['January–March 2026', 'April–June 2026', 'July–September 2026', 'October–December 2026'] },
  { year: '2025', issues: ['January–March 2025', 'April–June 2025', 'July–September 2025', 'October–December 2025'] },
  { year: '2024', issues: ['January–March 2024', 'April–June 2024', 'July–September 2024', 'October–December 2024'] },
  { year: '2023', issues: ['March–April 2023', 'May–June 2023', 'July–August 2023', 'September–October 2023', 'November–December 2023'] },
  { year: '2022', issues: ['March–April 2022', 'May–June 2022', 'July–August 2022', 'September–October 2022', 'November–December 2022'] },
  { year: '2021', issues: ['January–February 2021', 'March–April 2021', 'May–June 2021', 'July–August 2021', 'September–October 2021', 'November–December 2021'] },
  { year: '2020', issues: ['January–February 2020', 'March–April 2020', 'May–June 2020', 'July–August 2020', 'September–October 2020', 'November–December 2020'] },
] as const;

export interface Update {
  period: string;
  title: string;
  paragraphs: string[];
}

export const UPDATES: Update[] = [
  {
    period: 'April – June 2026',
    title: 'Vocational education programme & grant revision',
    paragraphs: [
      'As part of current year\u2019s initiatives, the Trust has introduced a focused programme to promote vocational education among students completing 10th and 10+2, encouraging a shift from classroom learning to skill-based careers.',
      'A scholarship scheme for vocational courses has been rolled out across 8\u20139 government schools. Students are being encouraged to explore skill-based career options, and application forms are available through the Trust office.',
      'With effect from 1st April, the monthly grant has been increased from \u20b9750/\u2013 to \u20b9850/\u2013 for all beneficiaries. Beneficiaries with special needs or exceptional circumstances will continue to receive \u20b91,000/\u2013 per month.',
    ],
  },
  {
    period: 'July – August – September 2026',
    title: 'Scholarships for students from flood-affected families',
    paragraphs: [
      'As reported in The Tribune on 15th May 2026, sisters Prabhjot Kaur and Veerpal Kaur from Village Rampur Gaura achieved outstanding academic results despite their family suffering severe losses in the August 2025 floods. Prabhjot scored 88.2% in Class 12 and Veerpal secured 88.7% in Class 10.',
      'To encourage them to continue in education, F. C. Sondhi Charitable Trust has awarded scholarships to both girls. While we understand that financial assistance alone cannot solve all the challenges faced by the family, we hope this support provides some encouragement and relief. Subject to satisfactory progress, these scholarships will continue each year for as long as they remain in education.',
    ],
  },
  {
    period: 'October – November – December 2026',
    title: 'Our commitment \u2014 financial and otherwise',
    paragraphs: [
      'During the current financial year, the Trust has planned an estimated expenditure of \u20b970 lakh towards grants, scholarships and other charitable initiatives, with an aim to benefit more than 850 deserving beneficiaries.',
      'Up to August 2026, an amount of \u20b936 lakh has already been disbursed, including \u20b924 lakh towards grants and financial assistance, and \u20b912 lakh towards scholarships for deserving students.',
      'For the remaining part of the financial year, a further \u20b934 lakh has been earmarked for various commitments, including \u20b924.5 lakh towards grants and \u20b98.5 lakh towards college scholarships.',
      'We remain committed to supporting both existing and new beneficiaries through our grant and scholarship programmes. Our endeavour is to ensure that assistance reaches deserving individuals in a timely, efficient and transparent manner, while continuing our efforts to make a meaningful difference in their lives.',
    ],
  },
];
