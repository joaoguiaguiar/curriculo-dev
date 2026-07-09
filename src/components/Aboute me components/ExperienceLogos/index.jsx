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
    },
    {
        name: 'IOS',
        logo: iosLogo,
    },
    {
        name: 'IBICT',
        logo: ibictLogo,
    },
    {
        name: 'IBRAM',
        logo: ibramLogo,
    },
    {
        name: 'Bela Vista',
        logo: belaVistaLogo,
    },
    {
        name: 'Tainacan',
        logo: tainacanLogo,
    },
];

const ExperienceLogos = () => {
    return (
        <section className={styles.experienceLogos}>
            <div className={styles.header}>
                <span>Onde atuei</span>
                <h2>Projetos e Instituições </h2>
            </div>

            <div className={styles.logoGrid}>
                {experiences.map((experience) => (
                    <div className={styles.logoCard} key={experience.name} title={experience.name}>
                        <img src={experience.logo} alt={`Logo ${experience.name}`} />
                        <small>{experience.name}</small>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceLogos;
