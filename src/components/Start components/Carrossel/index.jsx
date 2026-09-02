import {
  FaBootstrap,
  FaCode,
  FaDocker,
  FaGitlab,
  FaGithub,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaServer,
  FaTerminal,
} from 'react-icons/fa';
import {
  SiDbeaver,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiRancher,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si';
import styles from './Carrossel.module.scss';

const categories = [
  {
    title: 'Frontend',
    items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Sass', 'Tailwind', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'PHP', 'Express.js', 'REST API', 'JWT'],
  },
  {
    title: 'CMS & Acervos',
    items: ['WordPress', 'Tainacan', 'Plugins', 'Temas'],
  },
  {
    title: 'Dados',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Infraestrutura & DevOps',
    items: ['Docker', 'Kubernetes', 'Linux', 'GitLab', 'CI/CD', 'Rancher'],
  },
  {
    title: 'Ferramentas',
    items: ['VS Code', 'Git', 'GitHub', 'Postman', 'DBeaver', 'PuTTY', 'MobaXterm'],
  },
];

const iconByTechnology = {
  'CI/CD': FaGitlab,
  'Express.js': FaNodeJs,
  'REST API': FaServer,
  Bootstrap: FaBootstrap,
  DBeaver: SiDbeaver,
  Docker: FaDocker,
  GitHub: FaGithub,
  Git: FaGithub,
  GitLab: FaGitlab,
  'GitLab CI/CD': FaGitlab,
  JavaScript: FaJsSquare,
  JWT: FaServer,
  Kubernetes: SiKubernetes,
  Linux: FaLinux,
  MobaXterm: FaTerminal,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  'Node.js': FaNodeJs,
  PHP: FaPhp,
  PostgreSQL: SiPostgresql,
  Postman: SiPostman,
  Plugins: SiWordpress,
  PuTTY: FaServer,
  Rancher: SiRancher,
  React: FaReact,
  'React Native': FaReact,
  Sass: SiSass,
  Tailwind: SiTailwindcss,
  Tainacan: SiWordpress,
  Temas: SiWordpress,
  TypeScript: SiTypescript,
  'VS Code': FaCode,
  WordPress: SiWordpress,
};

const Carrossel = () => (
  <section className={styles.stackSection} id="skills">
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Tecnologias &amp; atuação</h2>
        <p>
          Tecnologias e ferramentas que utilizo diariamente no desenvolvimento de
          aplicações web, APIs, WordPress e infraestrutura.
        </p>
      </div>

      <div className={styles.stackList}>
        {categories.map((category) => (
          <div className={styles.stackRow} key={category.title}>
            <h3 className={styles.rowLabel}>{category.title}</h3>

            <ul className={styles.rowItems}>
              {category.items.map((item) => {
                const ItemIcon = iconByTechnology[item] || FaCode;

                return (
                  <li className={styles.techItem} key={item}>
                    <ItemIcon aria-hidden="true" className={styles.techIcon} />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Carrossel;
