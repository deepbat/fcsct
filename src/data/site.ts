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

export interface MagazineIssue {
  /** Display label, e.g. "January–March 2026" */
  name: string;
  year: number;
  /** Starting month of the issue, used for ordering within a year */
  month: number;
  href: string;
}

/**
 * Archive of Ideas Exchange issues, in any order — they are sorted for display.
 * Links point at the PDFs published on the Trust's Google Drive account.
 */
export const MAGAZINE_ISSUES: MagazineIssue[] = [
  { name: 'January–March 2026', year: 2026, month: 1, href: 'https://drive.google.com/file/d/1DHnk5TFV--vF5jjiZH_1fQKRM5En_srR/view' },
  { name: 'April–June 2026', year: 2026, month: 4, href: 'https://drive.google.com/file/d/1naGvwXXq5pQPajrZ8S_JjW_X2cr-9aJb/view' },
  { name: 'July–September 2026', year: 2026, month: 7, href: 'https://drive.google.com/file/d/1cxiTj4E1zcJHd0IT_r_uMP4a7v5rxpHe/view' },
  { name: 'October–December 2026', year: 2026, month: 10, href: 'https://drive.google.com/file/d/1jJWy-qyMS-BVyOGxFkbB4M5dRiWLnP8v/view' },

  { name: 'January–March 2025', year: 2025, month: 1, href: 'https://drive.google.com/file/d/1vqLgGPpvyBGiUP0S8vNnrrrPSUpS0L2Q/view' },
  { name: 'April–June 2025', year: 2025, month: 4, href: 'https://drive.google.com/file/d/1tp-Gz6PnBLA6NoK22IL3OuNqMnyrrFig/view' },
  { name: 'July–September 2025', year: 2025, month: 7, href: 'https://drive.google.com/file/d/1XjUyQhNrcoAX3dzvkx9qXD3vONcNoyXc/view' },
  { name: 'October–December 2025', year: 2025, month: 10, href: 'https://drive.google.com/file/d/1bEoLqmAsC-w2QV0Lz1Q8IzzuCQhnxOfo/view' },

  { name: 'January–March 2024', year: 2024, month: 1, href: 'https://drive.google.com/file/d/1TWEDa7Yvm01AeYR6YZAsgiwgRLw6Ar5i/view' },
  { name: 'April–June 2024', year: 2024, month: 4, href: 'https://drive.google.com/file/d/1qbw1GOSaLkesNpv7Ikst3RD5L4nO2MG9/view' },
  { name: 'July–September 2024', year: 2024, month: 7, href: 'https://drive.google.com/file/d/1UHdulDeMSTUqOhKINU2KWMgmGaRjQUo6/view' },
  { name: 'October–December 2024', year: 2024, month: 10, href: 'https://drive.google.com/file/d/1J96dljLDGorSxZ1nm8AW2lKdBPRJlKdQ/view' },

  { name: 'January–February 2023', year: 2023, month: 1, href: 'https://drive.google.com/file/d/1aLgPPGHgN36GlyFuMY45EIUGXHzNGnFU/view' },
  { name: 'March–April 2023', year: 2023, month: 3, href: 'https://drive.google.com/file/d/1BpOnwGhz_z9zKAlflvgNoVTM5mXui2PK/view' },
  { name: 'May–June 2023', year: 2023, month: 5, href: 'https://drive.google.com/file/d/1soH4NGRw47CSTyRIdUAF_uZHAcZLegVh/view' },
  { name: 'July–August 2023', year: 2023, month: 7, href: 'https://drive.google.com/file/d/1IrAbaEE8LUjpBSGKlBToc40iRg4gy2Ut/view' },
  { name: 'September–October 2023', year: 2023, month: 9, href: 'https://drive.google.com/file/d/180dMGcfIec56fZopx5sTQUZeM-WUjoJR/view' },
  { name: 'November–December 2023', year: 2023, month: 11, href: 'https://drive.google.com/file/d/1lj6PkoDAY2-5zQQOF3WZP2I1L2bxnc23/view' },

  { name: 'January–February 2022', year: 2022, month: 1, href: 'https://drive.google.com/file/d/1PKlNk6Z7q_BXWnIH_167WBhgq9A-ozRT/view' },
  { name: 'March–April 2022', year: 2022, month: 3, href: 'https://drive.google.com/file/d/1g8S-CsjH7uxQpyIy88QmKW2n1a6f93A6/view' },
  { name: 'May–June 2022', year: 2022, month: 5, href: 'https://drive.google.com/file/d/1HgEhx2nmwqWynrzYSSTeoW59RxaccXup/view' },
  { name: 'July–August 2022', year: 2022, month: 7, href: 'https://drive.google.com/file/d/19NMHMipFReyHrj3zBvlcyWrVu3hF9nje/view' },
  { name: 'September–October 2022', year: 2022, month: 9, href: 'https://drive.google.com/file/d/1tv1UCmoYgUSnNgsV3B1VlwUce4SHe0pS/view' },
  { name: 'November–December 2022', year: 2022, month: 11, href: 'https://drive.google.com/file/d/1vxzfAcxL0WzwwQPOX3bUbfh8U8sC0ieE/view' },

  { name: 'January–February 2021', year: 2021, month: 1, href: 'https://drive.google.com/file/d/1pVgjIja96DaY7iX9ITSes90XRyzqPtue/view' },
  { name: 'March–April 2021', year: 2021, month: 3, href: 'https://drive.google.com/file/d/1C4rGA1V3nwsglgnfOffo_BNopbeZqeWo/view' },
  { name: 'May–June 2021', year: 2021, month: 5, href: 'https://drive.google.com/file/d/1yEW3QOte-DhZlhguQggckZ6H5V7X9RQm/view' },
  { name: 'July–August 2021', year: 2021, month: 7, href: 'https://drive.google.com/file/d/1pl2LgiAm2BxOS4rmuSY4cESP8W0GLceP/view' },
  { name: 'September–October 2021', year: 2021, month: 9, href: 'https://drive.google.com/file/d/149LLspaO2i8-oUl5hsTAY06VOyetPRVF/view' },
  { name: 'November–December 2021', year: 2021, month: 11, href: 'https://drive.google.com/file/d/1Xv4XTOG662j9SJWZrJNc4XRZ3orks_ga/view' },

  { name: 'January–February 2020', year: 2020, month: 1, href: 'https://drive.google.com/open?id=1fQwDpnrchitsVE3AimmFLDo0k-tB5MGa' },
  { name: 'March–April 2020', year: 2020, month: 3, href: 'https://drive.google.com/open?id=1KUgBhSI7op6AX7rnRLq8L0uHjxH-ZkN3' },
  { name: 'May–June 2020', year: 2020, month: 5, href: 'https://drive.google.com/open?id=1baPaBuo1hBPMvKRaAlyvA9qAdYiTEmVc' },
  { name: 'July–August 2020', year: 2020, month: 7, href: 'https://drive.google.com/file/d/1y6tnPx9lsbLl4k5e5Lv0H8A9lUflGjdG/view' },
  { name: 'September–October 2020', year: 2020, month: 9, href: 'https://drive.google.com/file/d/1UECCyDeAskCgdRNCxSZ5U229WTuT2ltd/view' },
  { name: 'November–December 2020', year: 2020, month: 11, href: 'https://drive.google.com/file/d/1_ARXjb420YdMoN19MMsjWFoG8BUC13t2/view' },
];

/** Issues grouped by year, newest year first and newest issue first within each year. */
export const MAGAZINE_BY_YEAR = Object.entries(
  [...MAGAZINE_ISSUES]
    .sort((a, b) => b.year - a.year || b.month - a.month)
    .reduce<Record<number, MagazineIssue[]>>((acc, issue) => {
      (acc[issue.year] ??= []).push(issue);
      return acc;
    }, {}),
)
  // Object.entries orders integer-like keys ascending, so sort the years back down.
  .sort(([a], [b]) => Number(b) - Number(a))
  .map(([year, issues]) => ({ year: Number(year), issues }));

export interface Update {
  /** Start month of the quarter, as an ISO date — used for ordering */
  date: string;
  period: string;
  title: string;
  paragraphs: string[];
}

/** Quarterly updates, in any order — they are sorted newest first for display. */
export const UPDATES: Update[] = [
  {
    date: '2026-04-01',
    period: 'April – June 2026',
    title: 'Vocational education programme & grant revision',
    paragraphs: [
      'As part of current year\u2019s initiatives, the Trust has introduced a focused programme to promote vocational education among students completing 10th and 10+2, encouraging a shift from classroom learning to skill-based careers.',
      'A scholarship scheme for vocational courses has been rolled out across 8\u20139 government schools. Students are being encouraged to explore skill-based career options, and application forms are available through the Trust office.',
      'With effect from 1st April, the monthly grant has been increased from \u20b9750/\u2013 to \u20b9850/\u2013 for all beneficiaries. Beneficiaries with special needs or exceptional circumstances will continue to receive \u20b91,000/\u2013 per month.',
    ],
  },
  {
    date: '2026-07-01',
    period: 'July – August – September 2026',
    title: 'Scholarships for students from flood-affected families',
    paragraphs: [
      'As reported in The Tribune on 15th May 2026, sisters Prabhjot Kaur and Veerpal Kaur from Village Rampur Gaura achieved outstanding academic results despite their family suffering severe losses in the August 2025 floods. Prabhjot scored 88.2% in Class 12 and Veerpal secured 88.7% in Class 10.',
      'To encourage them to continue in education, F. C. Sondhi Charitable Trust has awarded scholarships to both girls. While we understand that financial assistance alone cannot solve all the challenges faced by the family, we hope this support provides some encouragement and relief. Subject to satisfactory progress, these scholarships will continue each year for as long as they remain in education.',
    ],
  },
  {
    date: '2026-10-01',
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

/** Quarterly updates, newest first. */
export const UPDATES_NEWEST_FIRST = [...UPDATES].sort((a, b) => b.date.localeCompare(a.date));
