import styles from './ExperienceLogos.module.scss';
import g4fLogo from '../../../assets/experiencias/g4f.png';
import iosLogo from '../../../assets/experiencias/ios.jpg';
import ibictLogo from '../../../assets/experiencias/ibict.png';
import ibramLogo from '../../../assets/experiencias/ibram.png';
import belaVistaLogo from '../../../assets/experiencias/bela-vista.jpg';
import tainacanLogo from '../../../assets/experiencias/tainacan.png';

const experiences = [
    {
        name: 'G4F',
        logo: g4fLogo,
        scale: 0.95,
    },
    {
        name: 'IOS',
        logo: iosLogo,
        scale: 1.55,
    },
    {
        name: 'IBICT',
        logo: ibictLogo,
        scale: 1,
    },
    {
        name: 'IBRAM',
        logo: ibramLogo,
        scale: 1.45,
    },
    {
        name: 'Bela Vista',
        logo: belaVistaLogo,
        scale: 1.15,
    },
    {
        name: 'Tainacan',
        logo: tainacanLogo,
        scale: 1.35,
    },
];

const ExperienceLogos = () => {
    return (
        <section className={styles.experienceLogos}>
            <div className={styles.header}>
                <h2>Projetos e Instituições</h2>
            </div>

            <div className={styles.logoGrid}>
                {experiences.map((experience) => (
                    <div
                        className={styles.logoItem}
                        key={experience.name}
                        title={experience.name}
                        style={{ '--logo-scale': experience.scale }}
                    >
                        <img src={experience.logo} alt={`Logo ${experience.name}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceLogos;
