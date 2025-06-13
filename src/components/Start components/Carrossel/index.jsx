import styles from './Carrossel.module.scss'

import { useState, useEffect } from 'react';

const Carrossel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const skills = [
    { name: 'HTML', icon: '../IMG/skils/logo html.png', color: '#E44D26' },
    { name: 'CSS', icon: '../IMG/skils/logo css.png', color: '#264DE4' },
    { name: 'JavaScript', icon: '../IMG/skils/logo js.png', color: '#F7DF1E' },
    { name: 'React', icon: '../IMG/skils/react logo.png', color: '#61DAFB' },
    { name: 'Bootstrap', icon: '../IMG/skils/bootstrap logo.jpeg', color: '#7952B3' },
    { name: 'TypeScript', icon: '../IMG/skils/logo ts.png', color: '#3178C6' },
    { name: 'SCSS', icon: '../IMG/skils/logo scss.png', color: '#CD6799' },
    { name: 'Node.js', icon: '../IMG/skils/nodejs.jpg', color: '#339933' },
    { name: 'Tailwind', icon: '../IMG/skils/twind.png', color: '#06B6D4' },
    { name: 'WordPress', icon: '../IMG/skils/wordpress.png', color: '#21759B' }
  ];

  // Auto avanço do carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % skills.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [skills.length]);

  // Função para navegar para um slide específico
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Avançar manualmente
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % skills.length);
  };

  // Voltar manualmente
  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + skills.length) % skills.length);
  };

  return (
    <section className={styles.skills_section} id="skills">
      <div className={styles.container}>
        <div className={styles.section_header}>
          <h2 className={styles.section_title}>Skills</h2>
          <div className={styles.section_subtitle}>Tecnologias que utilizo</div>
        </div>
        
        <div className={styles.skills_grid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`${styles.skill_card} ${index === activeIndex ? styles.active : ''}`}
              style={{'--accent-color': skill.color}}
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

        <div className={styles.carousel_container}>
          <button className={`${styles.carousel_arrow} ${styles.prev}`} onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className={styles.carousel_wrapper}>
            <div 
              className={styles.carousel_track} 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {skills.map((skill, index) => (
                <div key={index} className={styles.carousel_slide}>
                  <div className={styles.skill_spotlight}>
                    <div className={styles.skill_spotlight_icon}>
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className={styles.spotlight_image}
                      />
                    </div>
                    <h3 className={styles.skill_spotlight_name}>{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className={`${styles.carousel_arrow} ${styles.next}`} onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        <div className={styles.carousel_indicators}>
          {skills.map((_, index) => (
            <button 
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carrossel;