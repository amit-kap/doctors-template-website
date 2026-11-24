/** Shape every language file must follow. TypeScript flags any missing text. */
type Item = { year: string; title: string; place: string };

export interface Content {
  meta: { siteName: string; description: string };
  ui: {
    nav: Record<'home' | 'about' | 'services' | 'appointment' | 'accessibility' | 'privacy', string>;
    skipToContent: string;
    menu: string;
    closeMenu: string;
    mainNav: string;
    footerNav: string;
    book: string;
    bookShort: string;
    call: string;
    callFull: string;
    whatsapp: string;
    whatsappFull: string;
    email: string;
    newWindow: string;
    readMore: string;
    allServices: string;
    aboutMore: string;
    hours: string;
    closed: string;
    days: string[];
    address: string;
    directions: string;
    openWaze: string;
    openMaps: string;
    licenseLabel: string;
    specialistLicenseLabel: string;
    verifyLicense: string;
    languageName: string;
    switchLanguage: string;
    faqTitle: string;
    visitTitle: string;
    insuranceTitle: string;
    credentialsTitle: string;
    positionsTitle: string;
    membershipsTitle: string;
    publicationsTitle: string;
    languagesSpoken: string;
    accessibleSite: string;
    accessibleSiteLong: string;
    statementUpdated: string;
    rights: string;
    medicalDisclaimer: string;
    photoCredit: string;
    showcaseLabel: string;
    notFoundTitle: string;
    notFoundText: string;
    backHome: string;
    openNow: string;
    closedNow: string;
    until: string;
    opens: string;
    today: string;
    tomorrow: string;
  };
  a11y: Record<
    | 'open' | 'title' | 'close' | 'textSize' | 'smaller' | 'larger' | 'contrast' | 'monochrome'
    | 'links' | 'readable' | 'spacing' | 'motion' | 'focus' | 'reset' | 'resetDone' | 'statement' | 'note' | 'on' | 'off',
    string
  >;
  doctor: {
    title: string;
    name: string;
    fullName: string;
    specialty: string;
    headline: string;
    intro: string;
    shortBio: string;
    bio: string[];
    philosophy: string;
    education: Item[];
    positions: Item[];
    memberships: string[];
    publications: string[];
    languages: string[];
    highlights: string[];
  };
  serviceGroups: { id: string; title: string }[];
  services: { id: string; group: string; title: string; summary: string; details: string[] }[];
  visit: { title: string; text: string }[];
  insurance: { text: string; items: string[] };
  faq: { q: string; a: string }[];
  address: { street: string; city: string; notes: string };
  appointment: {
    title: string;
    intro: string;
    formTitle: string;
    name: string;
    phone: string;
    phoneHint: string;
    preferred: string;
    preferredOptions: string[];
    service: string;
    serviceOther: string;
    consent: string;
    privacyNotice: string;
    required: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    errorsSummary: string;
    errName: string;
    errPhone: string;
    errConsent: string;
    externalTitle: string;
    externalText: string;
    openingMail: string;
  };
  images: Record<string, string>;
  statement: Statement;
  privacy: { title: string; updated: string; sections: { h: string; p: string[] }[] };
  templates: Record<'clinic' | 'editorial' | 'warm', string>;
}

export interface Statement {
  title: string;
  intro: string[];
  levelTitle: string;
  level: string;
  doneTitle: string;
  done: string[];
  testedTitle: string;
  tested: string;
  toolbarTitle: string;
  toolbar: string;
  gapsTitle: string;
  gaps: string[];
  channelsTitle: string;
  channels: string[];
  physicalAlternatives: Partial<Record<'stepFreeEntrance' | 'elevator' | 'accessibleParking' | 'accessibleRestroom' | 'hearingLoop' | 'serviceAnimalsWelcome', string>>;
  physicalTitle: string;
  physicalLabels: Record<
    'stepFreeEntrance' | 'elevator' | 'accessibleParking' | 'accessibleRestroom' | 'hearingLoop' | 'serviceAnimalsWelcome',
    string
  >;
  yes: string;
  no: string;
  contactTitle: string;
  contactText: string;
  coordinator: string;
  responseTime: string;
  updatedLabel: string;
}
