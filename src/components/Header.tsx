import { useEffect, useState } from 'react';
import { ArrowUpRight, Briefcase, GraduationCap, Minus, Moon, Plus, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiAngular,
  SiBootstrap,
  SiCanva,
  SiCplusplus,
  SiDart,
  SiDjango,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJira,
  SiJavascript,
  SiLaravel,
  SiLeaflet,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPhp,
  SiPostgresql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { portfolioData } from '../data/portfolio';
import './Header.css';

const toolboxSections = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'HTML / CSS', icon: SiHtml5, color: '#e34f26' },
      { name: 'Dart', icon: SiDart, color: '#0175c2' },
      { name: 'MySQL', icon: SiMysql, color: '#0f5e96' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Laravel', icon: SiLaravel, color: '#ff2d20' },
      { name: 'Django', icon: SiDjango, color: '#0c4b33' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'Angular', icon: SiAngular, color: '#dd0031' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#3c873a' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { name: 'Canva', icon: SiCanva, color: '#00c4cc' },
      { name: 'Jira', icon: SiJira, color: '#0052cc' },
      { name: 'GitHub', icon: SiGithub, color: '#f3f4f6' },
    ],
  },
];

const technicalParagraphs = [
  'I build responsive web applications with React, TypeScript, Tailwind CSS, Laravel, Django, and Node.js. I also develop cross-platform experiences with Flutter and Dart.',
  'My work combines accessible UI implementation, role-based authentication, REST-ready application flows, and collaborative delivery using Git, Jira, Figma, Docker, and agile sprints.',
];

const leadershipSections = [
  {
    title: 'Software Engineer',
    body:
      'Built responsive teacher and student dashboards, learning workflows, and accessible interfaces during a remote internship at Knowles Training Institute.',
  },
  {
    title: 'Core Stack',
    body:
      'React, Tailwind CSS, Laravel, Django, Node.js, Flutter, Git, Figma, Jira, Docker, MySQL, PostgreSQL, and SQLite.',
  },
];

const showcaseProjects = [
  {
    title: 'EDTRUST AI: AI-Native Educational Platform',
    image: '/edtrust-platform.png',
    imageStyle: 'contain',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#3c873a' },
    ],
    description:
      'A responsive learning platform with teacher and student dashboards, a Leitner spaced-repetition system, question verification, quiz sessions, and learning analytics.',
    demo: '',
    code: 'https://github.com/kiyoder/edtrust.git',
  },
  {
    title: 'RESQNECT: Emergency Response Platform',
    image: '/resqnect-cross-platform.png',
    imageStyle: 'contain',
    technologies: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
      { name: 'Django', icon: SiDjango, color: '#0c4b33' },
      { name: 'Leaflet', icon: SiLeaflet, color: '#199900' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
    ],
    description:
      'A GIS-enabled emergency response platform with image anonymization, nearest-responder dispatch, location-based alerts, and real-time incident dashboards.',
    demo: 'https://scm-resqnect.online/',
    code: 'https://github.com/Ayriee/resqnect-all-apps.git',
  },
];

const certificationCards = [
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    year: '2025',
    image: '/cert-aws-cloud-foundations.png',
  },
  {
    title: 'TRON: Team Champion Recognition',
    issuer: '7th Infantry Division, Philippine Army',
    year: '2025',
    image: '/cert-tron.jpg',
  },
  {
    title: 'Managing Cybersecurity Incidents and Disasters',
    issuer: 'Kennesaw State University',
    year: '2024',
    image: '/cert-cybersecurity-incidents-disasters.png',
  },
];

const academicCareerPath = [
  {
    title: 'Software Engineer Intern',
    institution: 'Knowles Training Institute',
    dateRange: 'JAN 2026 - APR 2026',
    iconType: 'briefcase',
    highlights: [
      'Built responsive teacher and student dashboards, a 5-box Leitner SRS, and a 3 × 3 question matrix using React and Tailwind CSS.',
      'Implemented an AI-question verification area with edit, approve, regenerate, and delete actions.',
      'Integrated JWT authentication, role-based access control, and WCAG 2.2 accessibility standards while working in agile sprints.',
    ],
  },
  {
    title: 'BS in Information Technology',
    institution: 'Central Luzon State University',
    dateRange: '2022 - 2026',
    iconType: 'graduation',
    highlights: [
      'Graduated Cum Laude with a 1.49 GPA.',
      'University Scholar from 2023 to 2026.',
      'College Scholar from 2022 to 2023.',
    ],
  },
  {
    title: 'Secretary',
    institution: 'Builders of Information Technology Society (BITS) — Science City of Muñoz, Nueva Ecija',
    dateRange: 'JAN 2025 - DEC 2025',
    iconType: 'briefcase',
    highlights: [
      'Analyzed member engagement data to inform and improve organizational strategies.',
      'Managed logistics and documentation for organizational meetings and workshops.',
    ],
  },
];

const galleryCards = [
  {
    title: 'Awarding Ceremony',
    image: '/gallery-01.png',
    category: 'Gallery',
  },
  {
    title: 'Team Recognition',
    image: '/gallery-02.png',
    category: 'Gallery',
  },
  {
    title: 'Graduation Day',
    image: '/gallery-03.png',
    category: 'Gallery',
  },
  {
    title: 'Class Memories',
    image: '/gallery-04.png',
    category: 'Gallery',
  },
  {
    title: 'Leadership Visit',
    image: '/gallery-05.png',
    category: 'Gallery',
  },
  {
    title: 'Research Showcase',
    image: '/gallery-06.png',
    category: 'Gallery',
  },
  {
    title: 'Campus Friends',
    image: '/gallery-07.png',
    category: 'Gallery',
  },
  {
    title: 'Student Moments',
    image: '/gallery-08.png',
    category: 'Gallery',
  },
  {
    title: 'Project Sprint',
    image: '/gallery-09.png',
    category: 'Gallery',
  },
];

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [expanded, setExpanded] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [visibleGalleryCards, setVisibleGalleryCards] = useState(() => (window.innerWidth <= 720 ? 2 : 4));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleGalleryCards(window.innerWidth <= 720 ? 2 : 4);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxGalleryIndex = Math.max(galleryCards.length - visibleGalleryCards, 0);
    setCurrentGalleryIndex((prev) => Math.min(prev, maxGalleryIndex));
  }, [visibleGalleryCards]);

  const handleGalleryNext = () => {
    const maxGalleryIndex = Math.max(galleryCards.length - visibleGalleryCards, 0);
    setCurrentGalleryIndex((prev) => (prev >= maxGalleryIndex ? 0 : prev + 1));
  };

  const handleGalleryPrev = () => {
    const maxGalleryIndex = Math.max(galleryCards.length - visibleGalleryCards, 0);
    setCurrentGalleryIndex((prev) => (prev <= 0 ? maxGalleryIndex : prev - 1));
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = portfolioData.cvFile;
    link.download = 'EdzSagabaen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="toolbox-page">
      <section className="profile-stage">
        <div className="profile-top-row">
          <div className="profile-photo-wrap">
            <img src={portfolioData.profileImage} alt={portfolioData.name} className="profile-image" />
          </div>

          <div className="profile-header-info">
            <h2 className="profile-name">{portfolioData.name}</h2>

            <div className="profile-social-links" aria-label="Social links">
              <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg className="profile-social-icon" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="profile-social-icon" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href={portfolioData.socialLinks.email} aria-label="Email">
                <svg className="profile-social-icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            <div className="profile-details">
              <span className="profile-title">{portfolioData.title}</span>
              <svg className="profile-location-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fillRule="evenodd" />
              </svg>
              <span className="profile-location">{portfolioData.location}</span>
            </div>
          </div>

          <div className="profile-cta-wrap">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
            <button className="profile-download-cv" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        </div>

        <div className="profile-divider" aria-hidden="true" />

        <header className="profile-section-header">
          <h1 className="profile-section-title">About me</h1>
          <span className="profile-section-underline" aria-hidden="true" />
        </header>

        <section className="profile-card">
          <div className="profile-column">
            <p className="profile-eyebrow">Technical background</p>
            <h3 className="profile-card-title">
              UI/UX focused work for mobile and web products that need to look sharp and feel easy to use.
            </h3>
            {technicalParagraphs.map((paragraph) => (
              <p key={paragraph} className="profile-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="profile-column">
            <p className="profile-eyebrow">Tech stack</p>
            {leadershipSections.map((section) => (
              <article className="profile-detail-block" key={section.title}>
                <h4 className="profile-detail-title">{section.title}</h4>
                <p className="profile-copy">{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="toolbox-stage">
        <header className="toolbox-header">
          <h1 className="toolbox-title">Technical toolbox</h1>
          <span className="toolbox-underline" aria-hidden="true" />
        </header>

        <section className="toolbox-grid" aria-label="Technical toolbox">
          {toolboxSections.map((section) => (
            <article className="toolbox-card" key={section.title}>
              <p className="toolbox-card-label">{section.title}</p>

              <ul className="toolbox-list">
                {(expanded ? section.items : section.items.slice(0, 4)).map(({ name, icon: Icon, color }) => (
                  <li className="toolbox-item" key={name}>
                    <span className="toolbox-icon-shell" aria-hidden="true">
                      <Icon className="toolbox-icon" style={{ color }} />
                    </span>
                    <span className="toolbox-item-name">{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <button className="toolbox-toggle" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
          {expanded ? <Minus size={18} strokeWidth={2.4} /> : <Plus size={18} strokeWidth={2.4} />}
          <span>{expanded ? 'Show less' : 'View more tools'}</span>
        </button>
      </section>

      <section className="showcase-stage">
        <header className="showcase-header">
          <h2 className="showcase-title">Work showcase</h2>
          <span className="showcase-underline" aria-hidden="true" />
        </header>

        <div className="showcase-list">
          {showcaseProjects.map((project) => (
            <article className="showcase-card" key={project.title}>
              <a
                className="showcase-image-link"
                href={project.demo || project.code}
                aria-label={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={`showcase-image ${project.imageStyle === 'contain' ? 'showcase-image--contain' : ''}`} src={project.image} alt={project.title} />
              </a>

              <div className="showcase-content">
                <div>
                  <h3 className="showcase-card-title">{project.title}</h3>

                  <div className="showcase-tags" aria-label={`${project.title} technologies`}>
                    {project.technologies.map(({ name, icon: Icon, color }) => (
                      <span className="showcase-tag" key={name}>
                        <Icon className="showcase-tag-icon" style={{ color }} aria-hidden="true" />
                        {name}
                      </span>
                    ))}
                  </div>

                  <p className="showcase-copy">{project.description}</p>
                </div>

                <div className="showcase-links">
                  {project.demo && (
                    <a href={project.demo} className="showcase-link" target="_blank" rel="noopener noreferrer">
                      <span>Live demo</span>
                      <ArrowUpRight size={16} strokeWidth={2.4} />
                    </a>
                  )}
                  <a href={project.code} className="showcase-link" target="_blank" rel="noopener noreferrer">
                    <span>Source code</span>
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="certifications-stage">
        <header className="certifications-header">
          <h2 className="certifications-title">Certifications</h2>
          <span className="certifications-underline" aria-hidden="true" />
        </header>

        <div className="certifications-grid">
          {certificationCards
            .slice(0, showAllCertificates ? certificationCards.length : 3)
            .map((certificate) => (
              <article className="certification-card" key={certificate.title}>
                <div className="certification-icon-shell" aria-hidden="true">
                  <svg className="certification-icon" viewBox="0 0 24 24">
                    <path d="M12 2l2.5 4.7 5.2.8-3.8 3.6.9 5.1L12 14.9 7.2 16.2l.9-5.1L4.3 7.5l5.2-.8L12 2zm0 1.9l-1.7 3.2-3.6.6 2.6 2.5-.6 3.6L12 11.7l3.3 2.1-.6-3.6 2.6-2.5-3.6-.6L12 3.9zM9 16.5V22l3-1.8 3 1.8v-5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="certification-name">{certificate.title}</h3>
                <p className="certification-issuer">{certificate.issuer}</p>

                <div className="certification-footer">
                  <span className="certification-year">{certificate.year}</span>
                  <a
                    href={certificate.image}
                    className="certification-link"
                    aria-label={`View ${certificate.title} certificate`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={16} strokeWidth={2.2} />
                  </a>
                </div>
              </article>
            ))}
        </div>

        <button className="certifications-toggle" onClick={() => setShowAllCertificates((value) => !value)} aria-expanded={showAllCertificates}>
          <span>{showAllCertificates ? 'Show less' : 'View all certificates'}</span>
          <svg className={`certifications-toggle-chevron ${showAllCertificates ? 'is-open' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      <section className="academic-stage">
        <header className="academic-header">
          <h2 className="academic-title">Academic &amp; career path</h2>
          <span className="academic-underline" aria-hidden="true" />
        </header>

        <div className="academic-list">
          {academicCareerPath.map((item) => (
            <article className="academic-card" key={item.title}>
              <div className="academic-icon-shell" aria-hidden="true">
                {item.iconType === 'briefcase' ? (
                  <Briefcase size={24} strokeWidth={1.8} />
                ) : (
                  <GraduationCap size={24} strokeWidth={1.8} />
                )}
              </div>

              <div className="academic-main">
                <div className="academic-header-content">
                  <div className="academic-title-group">
                    <h3 className="academic-item-title">{item.title}</h3>
                    <p className="academic-institution">{item.institution}</p>
                  </div>
                  <span className="academic-date">{item.dateRange}</span>
                </div>

                <ul className="academic-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="academic-highlight">{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-stage">
        <div className="gallery-content">
          <header className="gallery-header">
          <div className="gallery-title-wrap">
            <GraduationCap size={28} strokeWidth={1.5} className="gallery-icon" />
            <h2 className="gallery-title">Gallery</h2>
          </div>
          <div className="gallery-nav">
            <button className="gallery-nav-btn" onClick={handleGalleryPrev} aria-label="Previous gallery item">
              <ChevronLeft size={24} strokeWidth={2} />
            </button>
            <button className="gallery-nav-btn" onClick={handleGalleryNext} aria-label="Next gallery item">
              <ChevronRight size={24} strokeWidth={2} />
            </button>
          </div>
        </header>

        <div className="gallery-carousel">
          <div className="gallery-track" style={{ transform: `translateX(calc(-${currentGalleryIndex} * (${100 / visibleGalleryCards}% + 20px)))` }}>
            {galleryCards.map((card) => (
              <div className="gallery-card-wrapper" key={card.title}>
                <article className="gallery-card">
                  <img src={card.image} alt={card.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <h3 className="gallery-card-title">{card.title}</h3>
                    <p className="gallery-card-category">{card.category}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <footer className="footer-stage">
        <div className="footer-container">
          <div className="footer-column">
            <p className="footer-text">© 2026 Edz Sagabaen</p>
          </div>
          <div className="footer-column">
            <p className="footer-text">Science City of Muñoz, Nueva Ecija</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
