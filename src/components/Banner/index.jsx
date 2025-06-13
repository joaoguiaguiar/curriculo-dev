import styles from './Banner.module.scss';
import logo__banner from './banner.jpg';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <div className={styles.repertorioOverlay}></div>
                <h1 className={styles.titulo}>Hello World</h1>
                <p className={styles.paragrafo}>
                    Me chamo João Guilherme e sou Desenvolvedor Full Stack formado em Análise e Desenvolvimento de Sistemas pela UDF (2024). Atualmente atuo na área de desenvolvimento web, busco sempre aprimorar minhas habilidades e contribuir para projetos inovadores.
                </p>
                <p className={styles.paragrafo}>
                    Vamos transformar ideias em realidade? 👨🏽‍💻🚀
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.imagemBanner}
                    src={logo__banner}
                    alt='Foto logo currículo'
                />
            </div>
        </section>
    );
};

export default Banner;