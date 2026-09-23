import {
    FaEnvelope,
    FaExternalLinkAlt,
    FaGithub,
    FaGraduationCap,
    FaLinkedinIn,
    FaPhoneAlt,
} from 'react-icons/fa';
import styles from './ContactSection.module.scss';

const professionalLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/joaoguiaguiar',
        icon: FaGithub,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/joaoguiaguiar/',
        icon: FaLinkedinIn,
    },
    {
        label: 'Currículo Lattes',
        href: 'http://lattes.cnpq.br/0134374370409906',
        icon: FaGraduationCap,
    },
];

const ContactSection = () => (
    <section className={styles.contactSection} id="contato" aria-label="Contato">
        <div className={styles.container}>
            <div className={styles.directContacts}>
                <a href="mailto:joaoguilhermeaguiar@gmail.com">
                    <FaEnvelope />
                    <span>
                        <small>E-mail</small>
                        joaoguilhermeaguiar@gmail.com
                    </span>
                </a>

                <a href="tel:+5561994540642">
                    <FaPhoneAlt />
                    <span>
                        <small>Telefone</small>
                        (61) 99454-0642
                    </span>
                </a>
            </div>

            <nav className={styles.professionalLinks} aria-label="Perfis profissionais">
                {professionalLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a href={item.href} key={item.label} rel="noopener noreferrer" target="_blank">
                            <Icon />
                            <span>{item.label}</span>
                            <FaExternalLinkAlt className={styles.externalIcon} />
                        </a>
                    );
                })}
            </nav>
        </div>
    </section>
);

export default ContactSection;
