// components
const seo = {
  populate: {
    og: true,
    twitter: true,
    metas: true,
    links: true,
    shareImage: true,
  },
};
const virtualTour = { populate: { image: true } };
const carouselsImageItem = { populate: { image: true } };
const carouselImages = { populate: { items: carouselsImageItem, infos: true } };
const coursePanel = { populate: { items: true, image: true } };
const textBeforeFooter = { populate: { title: true } };

// collection types
const courseSkillUnitsCollection = { populate: { courses: true } };

// DZ
const dynamicZone = {
  populate: {
    items: { populate: { image: true, icon: true } },
    infos: true,
    file: true,
    campuses: {
      populate: {
        campus: {
          populate: {
            focusImage: true,
          },
        },
      },
    },
    cta: true,
    carouselInfos: true,
    listInfos: true,
    listStyle: {
      populate: {
        backgroundImage: true,
      },
    },
    news: true,
    events: true,
    title: true,
    CTA: true,
    menu_sections: { populate: { items: true } },
    periodes: {
      populate: {
        historicPrice: true,
        programme_blocs_de_competences: true,
        ecole: true,
        campuses: true,
      },
    },
    header: { populate: { image: true } },
    categories: {
      populate: {
        courses: { populate: { course: { populate: { school: true } } } },
      },
    },
    courses: {
      populate: {
        course: {
          populate: { focusImage: true, profile: true, programCat: true },
        },
      },
    },
    partners: { populate: { logo: true } },
    video: { populate: { posterframe: true } },
    image: true,
    posterframe: true,
    ecole3a_actualite: true,
    cd_actualite: true,
    epsi_actualite: true,
    esail_actualite: true,
    figs_actualite: true,
    icl_actualite: true,
    idrac_actualite: true,
    ieft_actualite: true,
    iet_actualite: true,
    ifag_actualite: true,
    igefi_actualite: true,
    ihedrea_actualite: true,
    ileri_actualite: true,
    supdecom_actualite: true,
    wis_actualite: true,
    Cta: true,
    thumbnail: true,
    goals: {
      populate: { items: true, skills_unit: courseSkillUnitsCollection },
    },
    program: {
      populate: { items: true, skills_unit: courseSkillUnitsCollection },
    },
    members: {
      populate: {
        picture: true,
      },
    },
    temoignages: {
      populate: { thumbnail: true },
    },
  },
};

// collection types
const school = {
  partner: true,
  phone: true,
  location: true,
  sameAs: true,
  social: true,
  logo: true,
  campuses2: true,
  courses: true,
  alternative_logo: true,
};
const periode = {
  historicPrice: true,
  programme_blocs_de_competences: courseSkillUnitsCollection,
  ecole: { populate: school },
  campuses: true,
};
const course = {
  duration: true,
  sessions: true,
  indicators: true,
  focusImage: true,
  course_skills_unit: true,
  campuses: { populate: { focusImage: true } },
  programCat: true,
  periodes: true,
  panel: coursePanel,
  details: dynamicZone,
  content: dynamicZone,
  fullWidthContent: dynamicZone,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
  profile: true,
  school: {
    populate: {
      logo: true,
      sameAs: true,
    },
  },
  course_sector: true,
  course_careers: true,
  fundings: true,
  labels: {
    populate: {
      logo: true,
    },
  },
};
const campus = {
  id: true,
  title: true,
  slug: true,
  summary: true,
  cta: true,
  label: true,
  createdAt: true,
  updatedAt: true,
  publishedAt: true,
  focusImage: true,
  virtualTour: virtualTour,
  content: dynamicZone,
  images: carouselImages,
  seo: seo,
  schools: {
    populate: { ...school, logo: false, campuses2: false, courses: false },
  },
  courses: {
    populate: {
      ...course,
      details: false,
      content: false,
      duration: false,
      sessions: false,
      indicators: false,
      seo: false,
      textBeforeFooter: false,
      //if school is not populated, campus.controllers.findOne will not work properly (because of filterCoursesForUser())
      school: true,
      campuses: false,
    },
  },
  campus_geozones: true,
};
const campusContact = {
  location: true,
  phone: true,
  whatsapp: true,
  email: true,
  campus: { fields: ["id"] },
  school: { fields: ["id"] },
};
const news = {
  content: dynamicZone,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
  focusImage: true,
  bannerImage: true,
  cat_news: true,
  campus_infos: { populate: { campus: { fields: ["id", "title", "slug"] } } },
};
const campusInfo = {
  campus: {
    populate: {
      ...campus,
      campus_infos: false,
      schools: false,
      courses: false,
      periodes: false,
    },
  },
  textBeforeFooter: textBeforeFooter,
  content: dynamicZone,
  seo: seo,
  fullWidthContent: dynamicZone,
  actualites: { populate: news },
};
const campusLanding = {
  seo: seo,
  content: dynamicZone,
  textBeforeFooter: textBeforeFooter,
  image: true,
  children: {
    populate: {
      ...campus,
      content: false,
      virtualTour: false,
      images: false,
      seo: false,
      courses: true,
    },
  },
};
const article = {
  focusImage: true,
  bannerImage: true,
  content: dynamicZone,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
  landing: true,
  websites: true,
  headerCta: true,
};
const crmLanding = {
  focusImage: true,
  bannerImage: true,
  content: dynamicZone,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
};
const crmLinks = {
  courses: {
    populate: {
      profile: true,
    },
  },
};
const landing = {
  image: true,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
  children: { populate: article },
};
const menuEnrichi = {
  body: dynamicZone,
};
const landingPorfolio = {
  content: dynamicZone,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
  focusImage: true,
};
const users = {
  role: true,
  profile: true,
  logo: true,
  menu_enrichis: {
    populate: menuEnrichi,
  },
  seo: seo,
  menus: {
    populate: {
      items: true,
    },
  },
  schools: { populate: school },
};
const homepage = {
  focusImage: true,
  slider: { populate: { image: true } },
  headerTitle: true,
  cta: true,
  seo: seo,
  content: dynamicZone,
  textBeforeFooter: textBeforeFooter,
  website: {
    populate: { ...users, menu_enrichis: false, menus: false, schools: false },
  },
};
const portfolio = {
  course: { populate: course },
  focusImage: true,
  portfolio: true,
};
const schoolsInfo = {
  logo: true,
  header_image: true,
  content: dynamicZone,
  text_before_footer: textBeforeFooter,
  seo: seo,
  school: {
    populate: { ...school, courses: { populate: { course_sector: true } } },
  },
};
const globalNews = {
  main_news: {
    populate: {
      ecole3a_actualite: { populate: news },
      cd_actualite: { populate: news },
      epsi_actualite: { populate: news },
      esail_actualite: { populate: news },
      figs_actualite: { populate: news },
      icl_actualite: { populate: news },
      idrac_actualite: { populate: news },
      ieft_actualite: { populate: news },
      iet_actualite: { populate: news },
      ifag_actualite: { populate: news },
      igefi_actualite: { populate: news },
      ihedrea_actualite: { populate: news },
      ileri_actualite: { populate: news },
      supdecom_actualite: { populate: news },
      wis_actualite: { populate: news },
    },
  },
  news: {
    populate: {
      ecole3a_actualite: { populate: news },
      cd_actualite: { populate: news },
      epsi_actualite: { populate: news },
      esail_actualite: { populate: news },
      figs_actualite: { populate: news },
      icl_actualite: { populate: news },
      idrac_actualite: { populate: news },
      ieft_actualite: { populate: news },
      iet_actualite: { populate: news },
      ifag_actualite: { populate: news },
      igefi_actualite: { populate: news },
      ihedrea_actualite: { populate: news },
      ileri_actualite: { populate: news },
      supdecom_actualite: { populate: news },
      wis_actualite: { populate: news },
    },
  },
  website: true,
};

// single types
const programs = {
  content: dynamicZone,
  textBeforeFooter: textBeforeFooter,
  seo: seo,
  articles: true,
};
const nsActualites = {
  content: dynamicZone,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
  image: true,
};
const nsPrograms = {
  textBeforeFooter: textBeforeFooter,
  seo: seo,
  content: dynamicZone,
  image: true,
  articles: { populate: article },
};
const agenda = {
  image: true,
  textBeforeFooter: textBeforeFooter,
  seo: seo,
};
const landingJob = {
  image: true,
  job_offers: {
    populate: {
      jobSector: true,
      campus: true,
      jobDescription: true,
      companyDescription: true,
      school: true,
      image: true,
    },
  },
  content: dynamicZone,
  seo: seo,
  textBeforeFooter: textBeforeFooter,
};

module.exports = {
  components: {
    seo,
    virtualTour,
    carouselsImageItem,
    carouselImages,
    coursePanel,
    textBeforeFooter,
  },
  collections: {
    school,
    course,
    campus,
    periode,
    courseSkillUnitsCollection,
    campusContact,
    campusInfo,
    news,
    campusLanding,
    article,
    crmLanding,
    homepage,
    crmLinks,
    landing,
    menuEnrichi,
    landingPorfolio,
    portfolio,
    schoolsInfo,
    globalNews,
    users,
  },
  singleTypes: {
    nsActualites,
    programs,
    nsPrograms,
    agenda,
    landingJob,
  },
  dynamicZone,
};
