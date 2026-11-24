/**
 * THE ONE FILE TO EDIT PER CLINIC.
 *
 * - Non-language data (phones, license numbers, images, template choice) lives here.
 * - Texts live in src/content/<lang>.ts (one file per language, same shape).
 * - Everything marked PLACEHOLDER must be replaced before going live.
 */

export type TemplateId = 'clinic' | 'editorial' | 'warm';
export type Lang = 'he' | 'en';

export const site = {
  /** Which of the three layouts this clinic uses. */
  template: 'clinic' as TemplateId,

  /**
   * Showcase mode builds all three templates side by side under /t/<template>/
   * and shows a small template switcher. Turn OFF for a real clinic.
   */
  showcase: true,

  /** First language is the default (served at /). Others get a prefix: /en/ */
  languages: ['he', 'en'] as Lang[],

  /** Public URL, used for canonical and hreflang links. */
  url: 'https://example-clinic.co.il', // PLACEHOLDER

  /** Optional brand override. Leave empty to use the template's palette. */
  brand: {
    // primary: 'oklch(45% 0.09 200)',
  } as { primary?: string; accent?: string },

  doctor: {
    licenseNumber: '12345', // PLACEHOLDER – מספר רישיון משרד הבריאות
    specialistLicenseNumber: '6789', // PLACEHOLDER – מספר רישיון מומחה (leave '' if none)
    portrait: 'portrait-female', // key in images below
  },

  contact: {
    phone: '03-000-0000', // PLACEHOLDER
    phoneHref: '+97230000000',
    whatsapp: '972500000000', // PLACEHOLDER – digits only, or '' to hide
    email: 'clinic@example.co.il', // PLACEHOLDER
    /** External booking system (Doctoronline, Calendly, Zimmer…). '' = use the built-in request form. */
    bookingUrl: '',
    /** Where the request form posts. Formspree / Web3Forms / own endpoint. '' = opens an email draft. */
    formEndpoint: '',
    mapsQuery: 'Rothschild Blvd 1, Tel Aviv', // PLACEHOLDER – used for Google Maps / Waze links
  },

  /** 0 = Sunday … 6 = Saturday. Times are 24h strings. */
  hours: [
    { day: 0, open: '08:00', close: '16:00' },
    { day: 1, open: '12:00', close: '20:00' },
    { day: 2, open: '08:00', close: '16:00' },
    { day: 3, open: '12:00', close: '20:00' },
    { day: 4, open: '08:00', close: '14:00' },
  ],

  accessibility: {
    /** Required by regulation 35: name and contact of the accessibility coordinator. */
    coordinatorPhone: '03-000-0001', // PLACEHOLDER
    coordinatorEmail: 'access@example.co.il', // PLACEHOLDER
    /** Date the accessibility statement was last reviewed (YYYY-MM-DD). */
    statementUpdated: '2026-11-24',
    /** Physical clinic accessibility – shown in the statement and contact page. */
    physical: {
      stepFreeEntrance: true,
      elevator: true,
      accessibleParking: true,
      accessibleRestroom: false,
      hearingLoop: false,
      serviceAnimalsWelcome: true,
    },
  },

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  /**
   * Royalty-free starter images (Unsplash / Pexels licence). Replace with the clinic's own photos:
   * drop files into /public/images/ and set src: '/images/<file>.jpg'.
   * Alt texts per language live in src/content/<lang>.ts → images.
   */
  images: {
    'portrait-female': { src: 'https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?w=900&h=1100&q=80&auto=format&fit=crop', credit: 'Unsplash' },
    'portrait-male': { src: 'https://images.unsplash.com/photo-1645066928295-2506defde470?w=900&h=1100&q=80&auto=format&fit=crop', credit: 'Muhammad Hicham / Unsplash', page: 'https://unsplash.com/photos/AZDVF4fEcY4' },
    'portrait-alt': { src: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?w=900&h=1100&q=80&auto=format&fit=crop', credit: 'vaibhav vivian / Unsplash', page: 'https://unsplash.com/photos/3HIroMoyre8' },
    'consultation': { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80&auto=format&fit=crop', credit: 'National Cancer Institute / Unsplash', page: 'https://unsplash.com/photos/tl447mekwuQ' },
    'interior-reception': { src: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?w=1600&q=80&auto=format&fit=crop', credit: 'Amy Vosters / Unsplash', page: 'https://unsplash.com/photos/pxOQ-P97sA8' },
    'interior-room': { src: 'https://images.unsplash.com/photo-1704455306925-1401c3012117?w=1600&q=80&auto=format&fit=crop', credit: 'Kari Bjorn Photography / Unsplash', page: 'https://unsplash.com/photos/yJsMOVwazRU' },
    'interior-detail': { src: 'https://images.unsplash.com/photo-1787496994867-939269b4d323?w=1600&q=80&auto=format&fit=crop', credit: 'Enio Pereira da Silva / Unsplash', page: 'https://unsplash.com/photos/mISkLiMzypI' },
    'detail-stethoscope': { src: 'https://images.unsplash.com/photo-1763070282903-cbe9922ab7ab?w=1600&q=80&auto=format&fit=crop', credit: 'anita shirmohamadi / Unsplash', page: 'https://unsplash.com/photos/XBX9DepYQYQ' },
    'detail-instrument': { src: 'https://images.unsplash.com/photo-1700832082200-af7deeb63d9b?w=1600&q=80&auto=format&fit=crop', credit: 'Immo Wegmann / Unsplash', page: 'https://unsplash.com/photos/njrDE70M2VI' },
    'detail-desk': { src: 'https://images.unsplash.com/photo-1652787542567-f86c0b4c0269?w=1600&q=80&auto=format&fit=crop', credit: 'Abdulai Sayni / Unsplash', page: 'https://unsplash.com/photos/u2EjDa_hYJI' },
    'exterior-1': { src: 'https://images.unsplash.com/photo-1657314136565-f40eab6464c4?w=1600&q=80&auto=format&fit=crop', credit: 'Marat Badykov / Unsplash', page: 'https://unsplash.com/photos/I3mSCfG7AEg' },
    'exterior-2': { src: 'https://images.unsplash.com/photo-1672575770678-a1f806a19714?w=1600&q=80&auto=format&fit=crop', credit: 'Nils Adam / Unsplash', page: 'https://unsplash.com/photos/USSZb0BI9a0' },
    'texture-1': { src: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?w=1600&q=80&auto=format&fit=crop', credit: 'Annie Spratt / Unsplash', page: 'https://unsplash.com/photos/xTaOPMa6wAE' },
    'texture-2': { src: 'https://images.unsplash.com/photo-1764437835706-ba9d63250bd2?w=1600&q=80&auto=format&fit=crop', credit: 'Logan Voss / Unsplash', page: 'https://unsplash.com/photos/sFGj4Lj1un8' },
  } as Record<string, { src: string; credit?: string; page?: string }>,
};

export type Site = typeof site;
