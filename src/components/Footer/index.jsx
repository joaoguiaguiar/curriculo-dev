import styles from './Footer.module.scss';
import { FaGithub } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__info}>
            <h3 className={styles.footer__name}>João Guilherme Rodrigues Aguiar</h3>
            <p className={styles.footer__role}>Desenvolvedor Web</p>
          </div>

          <div className={styles.footer__contacts}>
            <div className={styles.footer__contact_item}>
              <span className={styles.footer__icon}>📱</span>
              <a href="tel:+5561994540642" className={styles.footer__link}>
                (61) 99454-0642
              </a>
            </div>

            <div className={styles.footer__contact_item}>
              <span className={styles.footer__icon}>✉️</span>
              <a href="mailto:joaoguilhermeaguiar@gmail.com" className={styles.footer__link}>
                joaoguilhermeaguiar@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer__divider}></div>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__social}>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-guilherme-rodrigues-aguiar/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.footer__social_link} ${styles.footer__social_link__linkedin}`}
            >
              in
            </a>
            <a
              href="https://github.com/joaoguiaguiar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__social_link}
            >
              <FaGithub />
            </a>

          </div>

          <div className={styles.footer__copyright}>
            <span className={styles.footer__copyright_icon}>©</span>
            <span>2024 João Guilherme. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
