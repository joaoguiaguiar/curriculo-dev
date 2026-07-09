import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaGraduationCap, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contato.module.scss';

const contactLinks = [
    {
        title: 'GitHub',
        description: 'Projetos, plugins e contribuições.',
        href: 'https://github.com/joaoguiaguiar',
        icon: FaGithub,
    },
    {
        title: 'LinkedIn',
        description: 'Trajetória profissional e conexões.',
        href: 'https://www.linkedin.com/in/joaoguiaguiar/',
        icon: FaLinkedinIn,
    },
    {
        title: 'Currículo Lattes',
        description: 'Produção acadêmica e atuação técnica.',
        href: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=84B23DC92CE58709DA5A670D72AFD81C.buscatextual_0',
        icon: FaGraduationCap,
    },
    {
        title: 'Telefone',
        description: '(61) 99454-0642',
        href: 'tel:+5561994540642',
        icon: FaPhoneAlt,
        action: false,
    },
    {
        title: 'E-mail',
        description: 'joaoguilhermeaguiar@gmail.com',
        href: 'mailto:joaoguilhermeaguiar@gmail.com',
        icon: FaEnvelope,
        action: false,
    },
];

const Contato = () => {
    return (
        <main className={styles.contactPage}>
            <section className={styles.container}>
                <div className={styles.header}>
                    <span>Contato</span>
                    <h1>Contato</h1>
                    <p>
                        Estou sempre aberto para conversar sobre desenvolvimento de software, projetos e novas oportunidades. Entre em contato.
                    </p>
                </div>

                <div className={styles.linkGrid}>
                    {contactLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className={`${styles.card} ${item.action === false ? styles.staticCard : ''}`}
                                key={item.title}
                            >
                                <div className={styles.icon}>
                                    <Icon />
                                </div>

                                <div className={styles.cardText}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>

                                {item.action !== false && (
                                    <a href={item.href} rel="noopener noreferrer" target="_blank">
                                        Abrir
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Contato;
