import styles from './Curriculo.module.scss';
import g4fLogo from '../../assets/experiencias/g4f.png';
import iosLogo from '../../assets/experiencias/ios.jpg';
import ibictLogo from '../../assets/experiencias/ibict.png';
import ibramLogo from '../../assets/experiencias/ibram.png';
import belaVistaLogo from '../../assets/experiencias/bela-vista.jpg';
import tainacanLogo from '../../assets/experiencias/tainacan.png';

const education = [
    {
        institution: 'UDF Centro Universitário',
        course: 'Análise e Desenvolvimento de Sistemas',
        period: '2024',
    },
];

const experiences = [
    {
        company: 'G4F',
        role: 'Desenvolvedor Full Stack Júnior',
        period: 'Fev/2026 - Atual',
        location: 'Brasília - Presencial',
        logo: g4fLogo,
        project: {
            name: 'Atuação no IBRAM',
            logo: ibramLogo,
        },
        badges: ['React Native', 'Node.js', 'PHP', 'WordPress', 'Docker', 'Kubernetes', 'PostgreSQL', 'MySQL', 'CI/CD'],
        description: [
            '- Atuação no ciclo completo de desenvolvimento, desde a criação de temas e plugins até a configuração de ambiente e banco de dados.',
            '- Execução de deploys e gestão de aplicações em ambiente Kubernetes, garantindo publicação e estabilidade em produção com Docker.',
            '- Desenvolvimento de plugins WordPress reutilizáveis com uso de shortcodes e parametrização.',
            '- Implementação de regras de permissão, garantindo governança e segurança sobre mídias e metadados no Tainacan.',
            '- Reestruturação de arquitetura WordPress, substituindo lógica estática por modelo dinâmico com posts e taxonomias, incluindo busca por cidade e integração com sistema externo Koha.',
            '- Execução de consultas em PostgreSQL via DBeaver com conexão SSH.',
            '- Desenvolvimento de aplicativo móvel em React Native e Expo para digitalização 3D de acervos museológicos, com integração à API do Tainacan, autenticação JWT e consumo de APIs REST.',
        ],
    },
    {
        company: 'IBICT',
        role: 'Bolsista de Pesquisa - Full Stack Developer | DevOps',
        period: 'Jun/2026 - Atual',
        location: 'Brasília - Remoto',
        logo: ibictLogo,
        badges: [
            'WordPress',
            'PHP',
            'JavaScript',
            'Gutenberg',
            'Tainacan',
            'Blocksy',
        ],
        description: [
            '- Atuação no ODIS (Observatório de Desenvolvimento Integrado e Sustentável), plataforma voltada à gestão e divulgação de acervos e iniciativas institucionais.',
            '- Contribuição para um projeto de alcance internacional, com participação de 16 países.',
            '- Criação de plugins personalizados para WordPress, incluindo Timeline, Carrossel e Mapa Interativo.',
            '- Reestruturação do portal com o tema Blocksy, utilizando blocos nativos do Gutenberg e boas práticas de desenvolvimento.',
            '- Implementação de funcionalidades e integrações para WordPress e Tainacan, conforme as necessidades do projeto.',
            '- Evolução da arquitetura do portal, com foco em reutilização de código, organização e facilidade de manutenção.',
            '- Implantação de novas versões da aplicação em ambiente Docker durante as etapas de homologação e migração.',
        ],
    },
    {
        company: 'IOS Informática',
        role: 'Analista de Desenvolvimento Jr',
        period: 'Fev/2025 - Fev/2026',
        location: 'Brasília - Presencial',
        logo: iosLogo,
        project: {
            name: 'Atuação no IBRAM',
            logo: ibramLogo,
        },
        badges: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'Linux', 'GitLab'],
        description: [
            '- Desenvolvimento de temas filho e plugins personalizados para WordPress, utilizando PHP e JavaScript.',
            '- Criação e manutenção de sites institucionais, seguindo padrões governamentais.',
            '- Integração e administração de bancos de dados MySQL, incluindo modelagem, consultas SQL, backup e restauração.',
            '- Treinamento de equipes para utilização e gestão de sites em WordPress.',
            '- Migração de portais entre ambientes local e produção, com configuração de permissões, administração de ambientes Linux e suporte à infraestrutura de aplicações web.',
            '- Experiência com deploy e versionamento de aplicações, manutenção de pipelines CI/CD e atuação em ambientes containerizados com Docker e Kubernetes (Rancher), garantindo estabilidade e boas práticas.',
        ],
    },
];

const projects = [
    {
        company: 'Tainacan',
        role: 'Tainacan (Open Source)',
        period: 'Projeto 1',
        location: 'Contribuição Open Source',
        logo: tainacanLogo,
        badges: ['WordPress', 'Tainacan', 'PHP', 'JavaScript', 'APIs REST'],
        category: 'Contribuição Open Source',
        description: [
            '- Contribuição para o ecossistema Open Source do Tainacan, plataforma brasileira voltada à gestão e publicação de acervos digitais.',
            '- Desenvolvimento de customizações voltadas à gestão, preservação e difusão de acervos digitais.',
            '- Implementação de integrações e funcionalidades para projetos baseados em Tainacan desenvolvidos pelo IBRAM e IBICT.',
            '- Colaboração no desenvolvimento de soluções para instituições públicas que utilizam o ecossistema WordPress/Tainacan.',
        ],
        links: [
            {
                label: 'Site Oficial',
                href: 'https://tainacan.org',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/tainacan',
            },
        ],
    },
    {
        company: 'Bela Vista',
        role: 'Desenvolvedor Full Stack',
        period: 'Projeto',
        location: 'Brasília / Remoto',
        logo: belaVistaLogo,
        badges: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'UX/UI'],
        description: [
            '- Desenvolvimento de uma plataforma web de gestão interna para controle operacional de clientes, supervisores, fornecedores, itens e lançamentos mensais.',
            '- Criação de interface em React com TypeScript, priorizando usabilidade, organização dos fluxos e experiência do usuário.',
            '- Estruturação de cadastro multiempresa, permitindo separar dados operacionais por unidade da Bela Vista.',
            '- Implementação de lógica para vinculação de supervisores aos clientes e organização dos dados por empresa.',
            '- Tratamento e mapeamento de planilhas operacionais para preenchimento de códigos de entrega, endereços e dados cadastrais dos clientes.',
            '- Planejamento da arquitetura backend com Node.js, Express, PostgreSQL e Prisma para substituição gradual do armazenamento local por API e banco de dados.',
            '- Modelagem inicial de entidades como empresas, clientes, supervisores, fornecedores, catálogo, lançamentos mensais e relatórios.',
        ],
    },
    {
        company: 'Freelancer',
        role: 'Desenvolvedor Web',
        period: 'Projetos independentes',
        location: 'Remoto',
        badges: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'StaticForms', 'AOS', 'Vercel', 'Hostinger'],
        description: [
            '- Desenvolvimento e venda de websites institucionais para empresas de diferentes segmentos, como contabilidade, RH & DP, serviços empresariais e turismo.',
            '- Atuação em todo o ciclo do projeto: levantamento de requisitos, design, desenvolvimento, deploy e manutenção.',
            '- Criação de sites modernos, responsivos e focados em conversão e experiência do usuário.',
            '- Tecnologias utilizadas: HTML, CSS, JavaScript (ES6+), Bootstrap, Git, StaticForms, AOS, Vercel e Hostinger.',
        ],
    },
];

const TimelineItem = ({ item }) => (
    <article className={styles.workItem}>
        <div className={styles.workMeta}>
            <span>{item.period}</span>
            {item.logo && (
                <img src={item.logo} alt={`Logo ${item.company}`} />
            )}
        </div>

        <div className={styles.workContent}>
            <span className={styles.period}>{item.period}</span>
            <h3>{item.role}</h3>
            <p>{item.company} | {item.location}</p>

            {item.category && (
                <span className={styles.categoryTag}>{item.category}</span>
            )}

            {item.project && (
                <div className={styles.projectTag}>
                    <img src={item.project.logo} alt="" />
                    <span>{item.project.name}</span>
                </div>
            )}

            <div className={styles.badgeList}>
                {item.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                ))}
            </div>

            <ul className={styles.description}>
                {item.description.map((descriptionItem) => (
                    <li key={descriptionItem}>{descriptionItem}</li>
                ))}
            </ul>

            {item.links && (
                <div className={styles.projectLinks}>
                    {item.links.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    </article>
);

const Curriculo = () => {
    return (
        <section className={styles.curriculo}>
            <div className={styles.container}>
                <header className={styles.hero}>
                    <span className={styles.ribbon}>Currículo</span>
                </header>

                <div className={styles.curriculumGrid}>
                    <section className={styles.column}>
                        <div className={styles.sectionHeader}>
                            <h2>Educação</h2>
                        </div>

                        <div className={styles.timeline}>
                            {education.map((item) => (
                                <article className={styles.timelineItem} key={item.course}>
                                    <span className={styles.timeLabel}>{item.institution}</span>
                                    <div className={styles.timelineContent}>
                                        <span className={styles.period}>{item.period}</span>
                                        <h3>{item.course}</h3>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className={styles.column}>
                        <div className={styles.sectionHeader}>
                            <h2>Histórico de trabalho</h2>
                        </div>

                        <div className={styles.workTimeline}>
                            {experiences.map((experience) => (
                                <TimelineItem item={experience} key={experience.company} />
                            ))}
                        </div>
                    </section>

                    <section className={styles.column}>
                        <div className={styles.sectionHeader}>
                            <h2>Projetos</h2>
                        </div>

                        <div className={styles.workTimeline}>
                            {projects.map((project) => (
                                <TimelineItem item={project} key={project.company} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Curriculo;
