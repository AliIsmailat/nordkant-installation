export interface ImageEntry {
  file: string
  alt: string
  photographer: string
}

export type IconName = 'drop' | 'bolt' | 'bath' | 'siren' | 'snow' | 'plug'

export interface Service {
  icon: IconName
  name: string
  text: string
}

export interface Step {
  title: string
  text: string
}

export interface Testimonial {
  quote: string
  name: string
  place: string
}

export interface Stat {
  value: string
  label: string
}

export const theme = {
  colors: {
    navy: '#12294A',
    deep: '#0B1D36',
    mist: '#EEF1F5',
    steel: '#D3DAE4',
    white: '#FFFFFF',
    muted: '#44556E',
    accent: '#FF7A1A',
  },
  fonts: {
    display: { family: 'Archivo Black', weights: [400] },
    body: { family: 'Public Sans', weights: [400, 500, 600, 700] },
  },
  radius: { ui: '6px' },
}

export const site = {
  name: 'Nordkant Installation (Demo)',
  shortName: 'Nordkant Installation',
  skipLabel: 'Hoppa till innehållet',
  footerText: 'Demo, inte ett riktigt företag',
  footerNote: 'Företaget, omdömena, siffrorna och kontaktuppgifterna är påhittade.',

  meta: {
    title: 'Nordkant Installation (Demo) | VVS och el i Malmö',
    description:
      'Demosida för ett påhittat VVS- och elföretag i Malmö. Fast pris, svar inom 24 timmar och enkel offertförfrågan.',
  },

  phone: {
    display: '040-000 00 02',
    href: 'tel:+46400000002',
    label: 'Ring oss',
  },
  email: 'info@nordkant.example',

  quote: {
    href: '#offert',
    buttonLabel: 'Begär offert',
  },

  hero: {
    eyebrow: 'VVS och el i Malmö',
    title: 'Snabb respons. Fast pris. Rätt gjort.',
    text: 'Vi installerar, reparerar och renoverar åt privatpersoner och bostadsrättsföreningar. Berätta vad du behöver, så får du en offert med fast pris.',
    trust: [
      { title: 'Auktoriserade', text: 'Behörig personal inom el och VVS' },
      { title: 'Fast pris', text: 'Du vet kostnaden innan vi börjar' },
      { title: 'Svar inom 24 timmar', text: 'Vi återkommer snabbt på din förfrågan' },
    ],
  },

  services: {
    eyebrow: 'Tjänster',
    title: 'Det här hjälper vi till med',
    items: [
      {
        icon: 'drop',
        name: 'VVS',
        text: 'Rörarbeten, kranar, avlopp och värmesystem i hem och lokaler.',
      },
      {
        icon: 'bolt',
        name: 'El',
        text: 'Nyinstallation, byte av elcentral och felsökning av elfel.',
      },
      {
        icon: 'bath',
        name: 'Badrumsrenovering',
        text: 'Komplett renovering med tätskikt, rör och el i ett och samma projekt.',
      },
      {
        icon: 'siren',
        name: 'Jour och felsökning',
        text: 'Snabb hjälp vid vattenläcka, strömavbrott och andra akuta problem.',
      },
      {
        icon: 'snow',
        name: 'Värmepumpar',
        text: 'Installation och service av luftvärmepumpar och bergvärme.',
      },
      {
        icon: 'plug',
        name: 'Laddboxar',
        text: 'Installation av laddbox för elbil hemma eller i föreningen.',
      },
    ] satisfies Service[],
  },

  process: {
    eyebrow: 'Så jobbar vi',
    title: 'Tre steg till ett färdigt jobb',
    steps: [
      {
        title: 'Du hör av dig',
        text: 'Fyll i formuläret eller ring oss. Berätta kort vad det gäller.',
      },
      {
        title: 'Du får en offert',
        text: 'Vi svarar inom 24 timmar med ett fast pris och en tydlig tidsplan.',
      },
      {
        title: 'Vi utför jobbet',
        text: 'Vi kommer på överenskommen tid, gör jobbet och städar efter oss.',
      },
    ] satisfies Step[],
  },

  testimonials: {
    eyebrow: 'Omdömen',
    title: 'Så säger kunderna',
    exampleLabel: 'Exempel',
    note: 'Omdömena är påhittade och finns bara för att visa hur sektionen ser ut.',
    items: [
      {
        quote: 'Snabb offert, tydligt pris och jobbet blev klart på utsatt tid.',
        name: 'Anna L.',
        place: 'Limhamn',
      },
      {
        quote: 'De hittade felet direkt och fixade det samma dag. Rekommenderas.',
        name: 'Johan S.',
        place: 'Rörsjöstaden',
      },
      {
        quote: 'Hela badrumsrenoveringen gick smidigt och slutpriset höll.',
        name: 'Brf Solgläntan',
        place: 'Husie',
      },
    ] satisfies Testimonial[],
  },

  stats: {
    eyebrow: 'Nordkant i siffror',
    demoLabel: 'Demosiffror',
    items: [
      { value: '1 200+', label: 'utförda jobb' },
      { value: '15', label: 'år i branschen' },
      { value: '24 h', label: 'svarstid på offert' },
      { value: '98 %', label: 'nöjda kunder' },
    ] satisfies Stat[],
  },

  form: {
    eyebrow: 'Offert',
    title: 'Begär offert',
    intro:
      'Berätta vad du behöver hjälp med så återkommer vi inom 24 timmar. Det här är en demo, så ingenting skickas på riktigt.',
    next: {
      title: 'Så går det till',
      items: [
        'Vi läser din förfrågan samma dag.',
        'Vi ringer eller mejlar om något behöver förtydligas.',
        'Du får en offert med fast pris.',
      ],
    },
    errorTitle: 'Kontrollera formuläret',
    labels: {
      name: 'Namn',
      phone: 'Telefon',
      topic: 'Vad gäller det?',
      message: 'Meddelande',
    },
    topicPlaceholder: 'Välj ämne',
    topics: [
      'VVS',
      'El',
      'Badrumsrenovering',
      'Jour och felsökning',
      'Värmepump',
      'Laddbox',
      'Annat',
    ],
    messageHint: 'Beskriv kort vad det gäller och var du bor.',
    submitLabel: 'Skicka förfrågan',
    demoNote: 'Demo: ingen förfrågan skickas och inga uppgifter sparas.',
    errors: {
      name: 'Skriv ditt namn.',
      phone: 'Skriv ett giltigt telefonnummer.',
      topic: 'Välj vad det gäller.',
      message: 'Skriv några rader om vad du behöver hjälp med.',
    },
    confirm: {
      title: 'Tack, vi har tagit emot din förfrågan',
      thanks: 'Tack',
      message: 'Vi återkommer inom 24 timmar.',
      summary: 'Din förfrågan',
      again: 'Skicka en ny förfrågan',
    },
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Kontakt och område',
    phoneLabel: 'Telefon',
    emailLabel: 'E-post',
    hoursLabel: 'Tider',
    hours: 'Vardagar 07-17. Jour dygnet runt.',
    areasTitle: 'Vi arbetar i',
    areas: ['Malmö', 'Lund', 'Burlöv', 'Staffanstorp', 'Vellinge', 'Svedala'],
  },
}

export const logo = { alt: 'Nordkant Installation (Demo), till toppen av sidan' }

export const images = {
  hero: {
    file: 'hero',
    alt: 'Installatör som arbetar med metallkapsåg',
    photographer: 'annie-gray',
  },
  work1: {
    file: 'arbete-1',
    alt: 'Närbild på nyinstallerade vattenrör',
    photographer: 'compagnons',
  },
  work2: {
    file: 'arbete-2',
    alt: 'elcentral med säkringar',
    photographer: 'sirius-harrison',
  },
} satisfies { hero: ImageEntry; work1: ImageEntry; work2: ImageEntry }
