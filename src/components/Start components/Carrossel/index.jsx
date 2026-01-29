import styles from './Carrossel.module.scss';
import { useState, useEffect } from 'react';

const Carrossel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainSkills = [
    { name: 'React', icon: '../IMG/skils/react logo.png', color: '#61DAFB' },
    { name: 'TypeScript', icon: '../IMG/skils/logo ts.png', color: '#3178C6' },
    { name: 'Node.js', icon: '../IMG/skils/node.webp', color: '#339933' },
    { name: 'PHP', icon: '../IMG/skils/php.png', color: '#777BB4' },
    { name: 'Docker', icon: '../IMG/skils/docker.png', color: '#2496ED' },
    { name: 'Kubernetes', icon: '../IMG/skils/kubernetes.png', color: '#326CE5' }
  ];

  const complementarySkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'SCSS',
    'Styled Components',
    'Bootstrap',
    'Tailwind CSS',
    'WordPress',
    'Git',
    'GitHub',
    'GitLab',
    'CI/CD Pipelines',
    'SQL',
    'MySQL',
    'MongoDB',
    'Linux (ambiente servidor)',
    'SSH',
    'Vercel',
    'MySQL Workbench',
    'MobaXterm'
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % mainSkills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mainSkills.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % mainSkills.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + mainSkills.length) % mainSkills.length);
  };

  return (
    <section className={styles.skills_section} id="skills">
      <div className={styles.container}>
        <div className={styles.section_header}>
          <h2 className={styles.section_title}>Principais Tecnologias</h2>
          <div className={styles.section_subtitle}>
            Tecnologias que utilizo no dia a dia
          </div>
        </div>

        <div className={styles.skills_grid}>
          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skill_card} ${index === activeIndex ? styles.active : ''
                }`}
              style={{ '--accent-color': skill.color }}
              onClick={() => goToSlide(index)}
            >
              <div className={styles.skill_icon_wrapper}>
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className={styles.skill_icon}
                />
              </div>
              <div className={styles.skill_name}>{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Carrossel */}
        <div className={styles.carousel_container}>
          <button
            className={`${styles.carousel_arrow} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Tecnologia anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.carousel_wrapper}>
            <div
              className={styles.carousel_track}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {mainSkills.map((skill, index) => (
                <div key={index} className={styles.carousel_slide}>
                  <div className={styles.skill_spotlight}>
                    <div
                      className={styles.skill_spotlight_icon}
                      style={{ '--skill-color': skill.color }}
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className={styles.spotlight_image}
                      />
                    </div>
                    <h3 className={styles.skill_spotlight_name}>
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.carousel_arrow} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Próxima tecnologia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Indicadores */}
        <div className={styles.carousel_indicators}>
          {mainSkills.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.active : ''
                }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para ${mainSkills[index].name}`}
            />
          ))}
        </div>

        {/* Tecnologias complementares */}
        <div className={styles.complementary_section}>
          <div className={styles.complementary_divider} />
          <p className={styles.complementary_intro}>Também trabalho com</p>

          <div className={styles.complementary_flow}>
            {complementarySkills.map((skill, index) => (
              <span key={index} className={styles.complementary_item}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrossel;
