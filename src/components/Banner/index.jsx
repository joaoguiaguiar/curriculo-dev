import styles from './Banner.module.scss';
import logo__banner from './banner.png';
import mobileBanner from './banner-mobile.png';

const Banner = () => {
    return (
        <section
            className={styles.banner}
            style={{
                '--banner-desktop': `url(${logo__banner})`,
                '--banner-mobile': `url(${mobileBanner})`,
            }}
        >
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Hello World</h1>
                <p className={styles.subtitulo}>Sou o João</p>
            </div>
        </section>
    );
};

export default Banner;
