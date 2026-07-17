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
        href: 'http://lattes.cnpq.br/0134374370409906',
        icon: FaGraduationCap,
    },
    {
        title: 'Telefone',
        description: '(61) 99454-0642',
        icon: FaPhoneAlt,
    },
    {
        title: 'E-mail',
        description: 'joaoguilhermeaguiar@gmail.com',
        icon: FaEnvelope,
    },
];

const actionLinks = contactLinks.filter((item) => item.href);
const footerContacts = contactLinks.filter((item) => !item.href);

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
                    {actionLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className={styles.card}
                                key={item.title}
                            >
                                <div className={styles.icon}>
                                    <Icon />
                                </div>

                                <div className={styles.cardText}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>

                                <a href={item.href} rel="noopener noreferrer" target="_blank">
                                    Abrir
                                    <FaExternalLinkAlt />
                                </a>
                            </article>
                        );
                    })}
                </div>

                <footer className={styles.contactFooter}>
                    {footerContacts.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div className={styles.footerContact} key={item.title}>
                                <Icon />
                                <div>
                                    <span>{item.title}</span>
                                    <strong>{item.description}</strong>
                                </div>
                            </div>
                        );
                    })}
                </footer>
            </section>
        </main>
    );
};

export default Contato;
