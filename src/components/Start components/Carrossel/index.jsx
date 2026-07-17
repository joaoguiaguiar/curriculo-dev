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
    icon: FaReact,
    accent: '#61dafb',
    description: 'Desenvolvimento de interfaces modernas utilizando React e TypeScript.',
    items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Sass', 'Tailwind', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: FaNodeJs,
    accent: '#8cc84b',
    description: 'Desenvolvimento de APIs, plugins e aplicacoes utilizando Node.js e PHP.',
    items: ['Node.js', 'PHP', 'Express.js', 'REST API', 'JWT'],
  },
  {
    title: 'WordPress & Tainacan',
    icon: SiWordpress,
    accent: '#576ea3',
    description: 'Desenvolvimento de plugins, temas e integracoes para projetos baseados em WordPress e Tainacan.',
    items: ['WordPress', 'Tainacan', 'Plugins', 'Temas'],
  },
  {
    title: 'Banco de Dados',
    icon: SiMysql,
    accent: '#f6a623',
    description: 'Modelagem, consultas e administracao de bancos relacionais e NoSQL.',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps e Infraestrutura',
    icon: FaDocker,
    accent: '#2496ed',
    description: 'Deploy, containers e gerenciamento de ambientes de producao.',
    items: ['Docker', 'Kubernetes', 'Linux', 'GitLab', 'CI/CD', 'Rancher'],
  },
  {
    title: 'Ferramentas',
    icon: FaCode,
    accent: '#e0507a',
    description: 'Ferramentas utilizadas no desenvolvimento e manutencao de aplicacoes.',
    items: ['VS Code', 'Git', 'GitHub', 'GitLab', 'Postman', 'DBeaver', 'PuTTY', 'MobaXterm'],
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
  'Plugins WordPress': SiWordpress,
  Plugins: SiWordpress,
  PuTTY: FaServer,
  Rancher: SiRancher,
  React: FaReact,
  'React Native': FaReact,
  Sass: SiSass,
  Tailwind: SiTailwindcss,
  Tainacan: SiWordpress,
  'Temas WordPress': SiWordpress,
  Temas: SiWordpress,
  TypeScript: SiTypescript,
  'VS Code': FaCode,
  WordPress: SiWordpress,
};

const Carrossel = () => {
  return (
    <section className={styles.stackSection} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Full Stack</span>
          <h2>Tecnologias</h2>
          <p>
            Tecnologias e ferramentas que utilizo diariamente no desenvolvimento de
            aplicacoes web, APIs, WordPress e infraestrutura.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <article
                className={styles.categoryCard}
                key={category.title}
                style={{ '--accent': category.accent } }
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>
                    <CategoryIcon aria-hidden="true" />
                  </span>
                  <span className={styles.cardCount}>{category.items.length} techs</span>
                </div>

                <h3>{category.title}</h3>
                <p className={styles.cardDescription}>{category.description}</p>

                <div className={styles.badgeList}>
                  {category.items.map((item) => {
                    const ItemIcon = iconByTechnology[item] || FaCode;

                    return (
                      <span className={styles.badge} key={item}>
                        <ItemIcon aria-hidden="true" />
                        {item}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carrossel;