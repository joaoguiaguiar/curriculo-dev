import styles from './Information.module.scss';
import ExperienceLogos from '../ExperienceLogos';

const metrics = [
    { value: '+20', label: 'projetos desenvolvidos' },
    { value: '3+', label: 'anos de experiência' },
    { value: '2', label: 'instituições públicas' },
    { value: '10+', label: 'tecnologias utilizadas' },
];

const InformacoesModernizadas = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>Desenvolvedor Full Stack</h2>
                    <p>
                        Desenvolvedor e pesquisador com foco em aplicações web e software livre.
                        Sou formado em <b>Análise e Desenvolvimento de Sistemas</b> pelo UDF (2024)
                        e atuo como <b>Desenvolvedor Full Stack</b>, com mais de <b>2 anos</b> na
                        construção de aplicações web para instituições públicas e projetos privados.
                    </p>
                    <p>
                        Crio soluções acessíveis, modernas e fáceis de manter, sempre buscando
                        aprimorar minhas habilidades e contribuir para projetos inovadores,
                        aliando eficiência técnica às boas práticas de desenvolvimento.
                    </p>

                    <div className={styles.metricsGrid}>
                        {metrics.map((metric) => (
                            <div className={styles.metricCard} key={metric.label}>
                                <strong>{metric.value}</strong>
                                <span>{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ExperienceLogos />
        </section>
    );
};

export default InformacoesModernizadas;
