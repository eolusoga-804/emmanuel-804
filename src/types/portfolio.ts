export type SkillGroup = {
  title: string;
  items: string[];
};

export type Service = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  summary: string;
  favorite: boolean;
  verificationNeeded: boolean;
  technologies: string[];
  caseStudyUrl: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
};

export type ContactLink = {
  label: string;
  href: string | null;
};

export type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export type Testimonial = {
  author: string;
  role: string;
  organization: string;
  quote: string;
  image: string | null;
};

export type Statistic = {
  value: number;
  label: string;
  context: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type PortfolioContent = {
  identity: {
    fullName: string;
    displayName: string;
    primaryTitle: string;
    titles: string[];
    location: string;
    availability: string[];
  };
  summary: string;
  heroSummary: string;
  objective: string;
  mission: string;
  vision: string;
  values: string[];
  contact: {
    email: string;
    phone: string;
    secondaryPhone: string;
    whatsappNumber: string;
    whatsappUrl: string;
    links: ContactLink[];
  };
  resumePath: string;
  aboutSlides: {
    title: string;
    body: string;
  }[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  certificates: string[];
  languages: string[];
  skillsMarquees: [SkillGroup, SkillGroup, SkillGroup];
  services: Service[];
  projects: Project[];
  strengths: {
    title: string;
    description: string;
  }[];
  philosophy: {
    title: string;
    description: string;
  }[];
  workflow: {
    number: string;
    title: string;
    description: string;
  }[];
  careerTimeline: TimelineEntry[];
  testimonials: Testimonial[];
  statistics: Statistic[];
  faqs: FAQ[];
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    pages: {
      projects: {
        title: string;
        description: string;
      };
      contact: {
        title: string;
        description: string;
      };
    };
  };
  contactOutro: {
    eyebrow: string;
    title: string;
    message: string;
    actionLabel: string;
    emailSubject: string;
  };
  footer: {
    message: string;
    termsLabel: string;
    privacyLabel: string;
    contactLabel: string;
    socialsLabel: string;
    legalLabel: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappTitle: string;
    resumeLabel: string;
    resumeTitle: string;
    whatsappMessage: string;
  };
  loadingScreen: {
    minimumDurationMs: number;
    eyebrow: string;
    title: string;
    message: string;
  };
  navigation: {
    brandHref: string;
    mainLabel: string;
    mobileLabel: string;
    panelHeading: string;
    openLabel: string;
    closeLabel: string;
    availabilityLabel: string;
    items: {
      label: string;
      href: string;
    }[];
  };
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      serviceLabel: string;
      servicePlaceholder: string;
      messageLabel: string;
      submitLabel: string;
      notice: string;
    };
    details: {
      ariaLabel: string;
      emailLabel: string;
      phoneLabel: string;
      secondaryPhoneLabel: string;
      whatsappLabel: string;
      whatsappAction: string;
      locationLabel: string;
      socialsLabel: string;
    };
    emailDraft: {
      subjectPrefix: string;
      nameLabel: string;
      emailLabel: string;
      serviceLabel: string;
      whatsappMessage: string;
    };
  };
  hero: {
    availabilityPrefix: string;
    roleLead: string;
    contactAction: string;
    resumePreviewAction: string;
    projectsAction: string;
    cvLabel: string;
    openResumeLabel: string;
    downloadResumeLabel: string;
    closeResumeLabel: string;
    cvFrameTitlePrefix: string;
    typingDelays: {
      deleteCharacterMs: number;
      completedTitleMs: number;
      typeCharacterMs: number;
    };
  };
  aboutSection: {
    eyebrow: string;
    title: string;
    carouselLabel: string;
    slidePositionLabel: string;
    previousSlideLabel: string;
    nextSlideLabel: string;
    indicatorGroupLabel: string;
    indicatorLabel: string;
    experienceSlideTitle: string;
    educationSlideTitle: string;
    certificatesLanguagesSlideTitle: string;
    languageListPrefix: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    intro: string;
    numberDigits: number;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    intro: string;
    previewUnavailableLabel: string;
    featuredLabel: string;
    verificationLabel: string;
    technologyUnavailableLabel: string;
    caseStudyLabel: string;
    liveProjectLabel: string;
    sourceCodeLabel: string;
    linksUnavailableLabel: string;
    footerPrompt: string;
    openShowcaseLabel: string;
    requestPortfolioLabel: string;
    portfolioRequestMessage: string;
  };
  whyWorkSection: {
    eyebrow: string;
    title: string;
    intro: string;
    numberDigits: number;
    accordionName: string;
  };
  philosophySection: {
    eyebrow: string;
    title: string;
    intro: string;
    numberDigits: number;
  };
  workflowSection: {
    eyebrow: string;
    title: string;
    introTemplate: string;
  };
  statisticsSection: {
    eyebrow: string;
    title: string;
    numberLocale: string;
  };
  careerJourneySection: {
    eyebrow: string;
    title: string;
    intro: string;
    markerDigits: number;
  };
  testimonialSection: {
    eyebrow: string;
    title: string;
    emptyTitle: string;
    emptyMessage: string;
    contactAction: string;
    contactHref: string;
    carouselLabel: string;
    previousLabel: string;
    nextLabel: string;
    indicatorGroupLabel: string;
    indicatorLabelTemplate: string;
    slidePositionTemplate: string;
    portraitAltTemplate: string;
  };
  faqSection: {
    eyebrow: string;
    title: string;
    intro: string;
    accordionName: string;
  };
};
