/**
 * English content. Every text on the site comes from here (the default language is Hebrew, see he.ts).
 * The doctor, credentials, services and address are PLACEHOLDERS – replace them all.
 *
 * Israeli advertising rules for doctors (Physicians Regulations, Prohibited Advertising, 2008):
 * no testimonials, no before/after photos, no prices or discounts, no success rates,
 * no praise of the doctor's own skill, no comparisons with other doctors, and the word
 * "Specialist" only for a specialist title approved by the Ministry of Health.
 */
import type { Content } from './types';

const en: Content = {
  meta: {
    siteName: 'Dr. Michal Oren – Ear, Nose & Throat',
    description:
      'Private ear, nose and throat (ENT) clinic for adults and children in Tel Aviv. Hearing, sinuses, tonsils and breathing during sleep. Book by phone, WhatsApp or the form on this site.',
  },

  ui: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Areas of care',
      appointment: 'Book an appointment',
      accessibility: 'Accessibility statement',
      privacy: 'Privacy policy',
    },
    skipToContent: 'Skip to main content',
    menu: 'Menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    footerNav: 'Site links',
    footerClinic: 'The clinic',
    book: 'Book an appointment',
    bookShort: 'Book',
    call: 'Call',
    callFull: 'Call the clinic',
    whatsapp: 'WhatsApp',
    whatsappFull: 'Send a WhatsApp message',
    email: 'Email',
    newWindow: '(opens in a new window)',
    readMore: 'Learn more',
    allServices: 'All areas of care',
    aboutMore: 'More about Dr. Oren',
    hours: 'Opening hours',
    closed: 'Closed',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    address: 'Address',
    directions: 'Getting to the clinic',
    openWaze: 'Navigate with Waze',
    openMaps: 'Open in Google Maps',
    licenseLabel: 'License no.',
    specialistLicenseLabel: 'Specialist license no.',
    verifyLicense: "Verify the license in the Ministry of Health's physician registry",
    languageName: 'English',
    switchLanguage: 'עברית',
    faqTitle: 'Frequently asked questions',
    visitTitle: 'What a visit looks like',
    insuranceTitle: 'Reimbursement and insurance',
    credentialsTitle: 'Education and training',
    positionsTitle: 'Positions',
    membershipsTitle: 'Professional memberships',
    publicationsTitle: 'Publications and lectures',
    languagesSpoken: 'Languages spoken at the clinic',
    accessibleSite: 'Accessible site',
    accessibleSiteLong: 'This site is accessible under Israeli Standard 5568, level AA',
    statementUpdated: 'Last updated',
    rights: 'All rights reserved',
    medicalDisclaimer:
      'The information on this site is general and does not replace medical advice, diagnosis or treatment. In an emergency, call Magen David Adom at 101 or go to an emergency room.',
    photoCredit: 'Sample photos: Unsplash / Pexels',
    showcaseLabel: 'Display template',
    notFoundTitle: 'Page not found',
    notFoundText: 'The link may be wrong, or the page may have been removed.',
    openNow: 'Open now',
    closedNow: 'Closed now',
    until: 'until',
    opens: 'Opens',
    today: 'today',
    tomorrow: 'tomorrow',
    trustTitle: 'License, specialty and insurance',
    backHome: 'Back to the home page',
  },

  a11y: {
    open: 'Accessibility menu',
    title: 'Accessibility settings',
    close: 'Close accessibility menu',
    textSize: 'Text size',
    smaller: 'Decrease text size',
    larger: 'Increase text size',
    contrast: 'High contrast',
    monochrome: 'Grayscale',
    links: 'Highlight links',
    readable: 'Readable font',
    spacing: 'Text spacing',
    motion: 'Stop animations',
    focus: 'Highlight focus',
    resetDone: 'Settings reset',
    reset: 'Reset settings',
    statement: 'Accessibility statement',
    note: 'This site was built to be accessible from the start. These settings are an added convenience and are saved in this browser only.',
    on: 'On',
    off: 'Off',
  },

  doctor: {
    title: 'Dr.',
    name: 'Michal Oren',
    fullName: 'Dr. Michal Oren',
    /** Use "Specialist in …" ONLY with an approved specialist title. Otherwise e.g. "Physician practicing …" */
    specialty: 'Specialist in Otolaryngology (ENT)',
    headline: 'Ear, nose and throat care for children and adults, in a private clinic in Tel Aviv',
    intro:
      'At the clinic I diagnose and treat hearing problems, ear conditions, sinus problems, tonsil problems and breathing difficulties during sleep. Visits are scheduled at a time that suits you, with time for your questions.',
    shortBio:
      'Dr. Michal Oren is a board-certified ENT specialist with a fellowship in pediatric head and neck surgery. She works in her private clinic and in the ENT department of a university hospital.',
    bio: [
      'I completed medical school and my ENT residency at a university medical center, and then did a fellowship in pediatric head and neck surgery abroad.',
      'In my private clinic I see children and adults: recurrent ear infections, fluid in the ears, tonsils and polyps, sinusitis, snoring and pauses in breathing during sleep.',
      'Every visit starts with a conversation. I explain what I found, what the options are and what the next step is, and I send a written visit summary.',
    ],
    philosophy: 'A thorough diagnosis, a clear explanation, and a shared decision about treatment.',
    education: [
      { year: '2006–2012', title: 'Medical studies (M.D.)', place: 'Faculty of Medicine, a university in Israel' },
      { year: '2013–2018', title: 'Residency in Otolaryngology (ENT)', place: 'University medical center' },
      { year: '2018–2020', title: 'Fellowship in pediatric head and neck surgery', place: "Children's hospital, Canada" },
    ],
    positions: [
      { year: 'Since 2020', title: 'Senior physician, ENT Department', place: 'University medical center' },
      { year: 'Since 2021', title: 'Medical director', place: 'Private clinic, Tel Aviv' },
    ],
    memberships: [
      'Israeli Society of Otolaryngology – Head and Neck Surgery',
      'Israel Medical Association',
    ],
    publications: [
      'Co-author of articles on sleep apnea in children (professional journals)',
      'Lectures at continuing education courses for pediatricians and family physicians',
    ],
    languages: ['Hebrew', 'English'],
    highlights: ['Children and adults', 'No referral needed', 'Reimbursement from supplementary and private insurance', 'Accessible clinic'],
  },

  serviceGroups: [
    { id: 'consult', title: 'Clinic diagnosis and treatment' },
    { id: 'surgery', title: 'Surgery' },
  ],

  services: [
    {
      id: 'ears',
      group: 'consult',
      title: 'Ears and hearing',
      summary: 'Recurrent ear infections, fluid in the middle ear, hearing loss and tinnitus.',
      details: ['Ear examination under a microscope', 'Referral for a hearing test', 'Follow-up and treatment plan'],
    },
    {
      id: 'sinus',
      group: 'consult',
      title: 'Nose and sinuses',
      summary: 'Nasal congestion, recurrent sinusitis, allergy and nosebleeds.',
      details: ['Nasal endoscopy at the clinic', 'Tailored medication', 'Referral for imaging when needed'],
    },
    {
      id: 'sleep',
      group: 'consult',
      title: 'Snoring and breathing during sleep',
      summary: 'Evaluation of snoring and pauses in breathing during sleep, in children and adults.',
      details: ['Examination and sleep questionnaire', 'Referral for a sleep study', 'Treatment matched to the findings'],
    },
    {
      id: 'voice',
      group: 'consult',
      title: 'Throat and voice',
      summary: 'Hoarseness, recurrent sore throats, difficulty swallowing and voice problems.',
      details: ['Vocal cord examination', 'Coordination with speech therapists', 'Follow-up'],
    },
    {
      id: 'tonsils',
      group: 'surgery',
      title: 'Tonsils and polyps',
      summary: 'Surgery to remove the tonsils or polyps, including preparation for surgery and follow-up care.',
      details: ['Evaluation before surgery', 'Full explanation for parents', 'Follow-up visit'],
    },
    {
      id: 'tubes',
      group: 'surgery',
      title: 'Ear tubes (ventilation tubes)',
      summary: 'Placement of ventilation tubes in the ears for fluid or recurrent infections.',
      details: ['Hearing test before and after', 'Short procedure under general anesthesia', 'Follow-up until the tubes come out'],
    },
  ],

  visit: [
    { title: 'Book an appointment', text: 'By phone, WhatsApp or the form on this site. We will get back to you to schedule within one business day.' },
    { title: 'Come to the clinic', text: 'Please bring medical summaries, hearing test results and a list of medications. The entrance is accessible, and there is an elevator.' },
    { title: 'Examination and conversation', text: 'An examination, an explanation of the findings and a treatment plan. There is time for your questions.' },
    { title: 'Summary and follow-up', text: 'You receive a written visit summary and, if needed, a follow-up date.' },
  ],

  insurance: {
    text: 'The clinic is private. You can submit a reimbursement claim to your health fund’s supplementary insurance or to your private insurance. Actual coverage depends on your policy terms, and we are happy to help you check by phone.',
    items: ['Clalit Mushlam', 'Maccabi Sheli', 'Meuhedet Si', 'Leumit Zahav', 'Private insurance'],
  },

  faq: [
    {
      q: 'Do I need a referral from a doctor?',
      a: 'No. You can book an appointment directly. If you have a referral, a hearing test or previous summaries, please bring them.',
    },
    {
      q: 'Can I get reimbursed by my insurance?',
      a: 'In most cases, yes, through supplementary or private insurance. At the end of the visit you will receive a receipt and a visit summary to submit.',
    },
    {
      q: 'From what age do you see children?',
      a: 'From birth. Children under 18 come with a parent or guardian.',
    },
    {
      q: 'Is the clinic accessible?',
      a: 'Yes. The building entrance has no steps, there is an elevator and accessible parking nearby. Full details are in the accessibility statement.',
    },
    {
      q: 'How do I cancel or reschedule an appointment?',
      a: 'By phone or WhatsApp, up to 24 hours before the appointment.',
    },
  ],

  address: {
    street: 'Rothschild Blvd 1, 3rd floor',
    city: 'Tel Aviv-Yafo',
    notes: 'Public parking lot next door, including accessible parking. Step-free entrance and an elevator to the 3rd floor.',
  },

  appointment: {
    title: 'Book an appointment',
    intro: 'You can call, send a WhatsApp message, or leave your details and we will get back to you to schedule.',
    formTitle: 'Appointment request',
    name: 'Full name',
    phone: 'Phone',
    phoneHint: 'We will call you back on this number',
    preferred: 'Preferred time',
    preferredOptions: ['Any time', 'Morning', 'Afternoon', 'Evening'],
    service: 'Reason for contact',
    serviceOther: 'Other',
    consent: 'I have read the privacy policy and I agree that the clinic may contact me to schedule an appointment.',
    privacyNotice:
      'Your details are used only to schedule the appointment and are kept at the clinic. Please do not include medical information here; we will be glad to hear it in conversation.',
    required: 'Required field',
    submit: 'Send request',
    sending: 'Sending…',
    success: 'Your request was sent. We will get back to you within one business day.',
    error: 'Sending failed. You can call us or try again.',
    errorsSummary: 'Please fix the following fields:',
    errName: 'Please enter your name',
    errPhone: 'Please enter a valid phone number',
    errConsent: 'Please accept the privacy policy',
    externalTitle: 'Book online',
    openingMail: 'Opening your email app…',
    externalText: 'Choose an available time in the booking system',
  },

  images: {
    'portrait-female': 'Dr. Michal Oren in a physician’s coat, smiling',
    'portrait-male': 'Portrait of a doctor in a white coat',
    'portrait-alt': 'Portrait of a doctor',
    consultation: 'A doctor talking with a patient at the clinic',
    'interior-reception': 'The clinic waiting area',
    'interior-room': 'The clinic examination room',
    'interior-detail': 'A corner of the clinic',
    'detail-stethoscope': 'A stethoscope on a table',
    'detail-instrument': 'Close-up of a medical instrument',
    'detail-desk': 'A desk in the clinic',
    'exterior-1': 'The building where the clinic is located',
    'exterior-2': 'A city street',
    'building-tlv': 'A white Bauhaus-style building in Tel Aviv, surrounded by trees',
    'kids-corner': 'A children’s play corner with small tables and chairs',
    'waiting-corner': 'A bright waiting corner with a table, chairs and a plant',
    'exam-otoscope': 'An otoscope for ear examinations on the examination room wall',
    'teddy-otoscope': 'A teddy bear having its ear examined with an otoscope',
    'texture-1': '',
    'texture-2': '',
    'abstract-violet': '',
  },

  /** Accessibility statement (Regulation 35ה). Physical items and contacts come from site.config.ts. */
  statement: {
    title: 'Accessibility statement',
    intro: [
      'The clinic values providing equal and accessible service to all patients, including people with disabilities.',
      'This site was built to be accessible from the start, in accordance with the Equal Rights for Persons with Disabilities Law and the Equal Rights for Persons with Disabilities Regulations (Accessibility Adjustments for Service), 2013.',
    ],
    levelTitle: 'Accessibility level',
    level:
      'This site meets the requirements of Israeli Standard IS 5568 at level AA, which is based on WCAG 2.0, and was built to WCAG 2.2 level AA guidelines.',
    doneTitle: 'Accessibility features on this site',
    done: [
      'Full keyboard navigation, with a clear focus indicator and a link to skip to the main content',
      'Semantic heading structure and navigation landmarks for screen readers',
      'Text color contrast of at least 4.5:1',
      'Text can be enlarged up to 200%, and the layout works on narrow screens without horizontal scrolling',
      'Text descriptions for meaningful images',
      'Forms with labels, written error messages and no CAPTCHA',
      'Respect for the operating system’s "reduce motion" setting',
      'Language and direction set on every page, including the Hebrew version',
    ],
    testedTitle: 'Testing performed',
    // UPDATE after testing: list only what was really tested, with the date.
    tested:
      'The site was tested with the axe-core automated checker, keyboard-only navigation, 200% text zoom and a 320px-wide screen, in Chrome and Safari.',
    toolbarTitle: 'Accessibility menu',
    toolbar:
      'From this page you can open additional display settings: text size, high contrast, grayscale, link highlighting, readable font, text spacing and stopping animations. The settings apply to every page of the site. They are an added convenience, and the site is accessible without them too.',
    gapsTitle: 'Parts that are not fully accessible',
    gaps: [
      'Links to external sites (maps, the appointment booking system, social networks) are not under the clinic’s control.',
      'If you come across content that is not accessible, we will gladly provide the information in another way: by phone, WhatsApp or email.',
    ],
    channelsTitle: 'Accessible ways to get service',
    channels: [
      'Book by phone, WhatsApp, email or the form on this site',
      'You can ask for an adjustment before your visit, such as a longer appointment or a companion',
      'A written visit summary is sent after every visit',
    ],
    physicalTitle: 'Clinic accessibility',
    physicalAlternatives: {
      accessibleRestroom: "An accessible restroom is on the building's ground floor.", // PLACEHOLDER
      hearingLoop: 'You can arrange written or WhatsApp communication in advance.',
    },
    physicalLabels: {
      stepFreeEntrance: 'Step-free entrance',
      elevator: 'Elevator',
      accessibleParking: 'Accessible parking nearby',
      accessibleRestroom: 'Accessible restroom',
      hearingLoop: 'Hearing loop for people with hearing loss',
      serviceAnimalsWelcome: 'Service animals welcome',
    },
    yes: 'Available',
    no: 'Not available',
    contactTitle: 'Accessibility inquiries',
    contactText:
      'Did you run into an accessibility problem, or do you need an accommodation for a visit to the clinic? Contact us and we will handle your request.',
    coordinator: 'Accessibility contact: Michal Oren', // PLACEHOLDER – name of the accessibility contact
    responseTime: 'We will reply to every inquiry within 14 business days, and fix a reported problem within 60 days at the latest.',
    updatedLabel: 'Statement last updated',
  },

  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated',
    sections: [
      {
        h: 'Who we are',
        p: ['This site is operated by the clinic of Dr. Michal Oren ("the clinic"). Contact details appear at the bottom of every page.'],
      },
      {
        h: 'What information we collect',
        p: [
          'In the appointment form: name, phone number, preferred time and reason for contact. Providing this information is voluntary, but without it we cannot get back to you.',
          'We do not ask for medical information in the form. Medical details are shared during the visit itself.',
        ],
      },
      {
        h: 'How the information is used',
        p: ['Only to schedule your appointment and to contact you. The information is not sold and is not passed to others for marketing purposes.'],
      },
      {
        h: 'Who receives the information',
        p: ['The clinic staff, and service providers who run the site and the form delivery for us, subject to a duty of confidentiality.'],
      },
      {
        h: 'Cookies and measurement tools',
        p: [
          'The site stores in your browser only the accessibility settings you chose. The site has no third-party advertising or tracking tools.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'Under the Protection of Privacy Law, you may review the information held about you and ask to correct or delete it. To do so, contact the clinic by email or phone.',
        ],
      },
      {
        h: 'Storage and security',
        p: ['The information is stored by secure means and deleted when it is no longer needed to arrange your care.'],
      },
    ],
  },

  templates: { landing: 'Landing', editorial: 'Profile', warm: 'Family', journey: 'Journey' },

  journey: {
    heroLabel: 'Private ENT clinic',
    heroLines: ['Ear, nose and throat', 'care for all ages'],
    credTitle: 'Training and experience',
    visitIntro: 'From the first call to the written summary, so you know what to expect before you arrive.',
    bookFirst: 'Book a first appointment',
    factsLabel: 'The clinic at a glance',
    specialtyLabel: 'Specialty',
    allHours: 'All opening hours',
    aboutLabel: 'About the clinic',
    treatmentsLabel: 'Treatments',
    treatmentsTitle: 'How we can help',
    whyLabel: 'Why this clinic',
    whyTitle: 'A calm visit, a clear explanation',
    goodToKnow: 'Good to know',
    pathLabel: 'Your first visit',
    pathTitle: 'Your visit, step by step',
    pathEnd: 'You can ask anything, at any stage. We will find a time that suits you.',
    pathPhases: ['Before the visit', 'On the day', 'In the exam room', 'After the visit'],
    doctorLabel: 'The doctor',
    doctorWords: 'I want you to leave the visit knowing what I found and what the next step is.',
    faqLabel: 'Your questions, answered',
    locationLabel: 'Getting here',
    ctaLabel: 'The first step',
    ctaTitle: 'It all starts with a conversation',
    ctaText: 'Book by phone, on WhatsApp or with the form on this site, and we will get back to you within one working day.',
    readyTitle: 'Ready to book a visit?',
    alsoLabel: 'Also at the clinic',
  },
};

export default en;
