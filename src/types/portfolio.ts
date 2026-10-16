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
};
