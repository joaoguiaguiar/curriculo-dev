import styles from './Information.module.scss';

const InformacoesModernizadas = () => {
    const areas = [
        {
            title: 'Desenvolvimento de aplicações',
            description: 'Interfaces e sistemas web com React, React Native, Node.js, PHP e WordPress.',
        },
        {
            title: 'DevOps e infraestrutura',
            description: 'Containers, pipelines CI/CD, Kubernetes, ambientes Linux e deploy de aplicações.',
        },
        {
            title: 'Software livre e dados',
            description: 'Desenvolvimento de plugins e temas WordPress, APIs REST, PostgreSQL, MySQL e integrações para projetos institucionais.',
        },
    ];

    return (
        <section className={styles.container} aria-labelledby="about-title">
            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title} id="about-title">Desenvolvedor Full Stack</h2>
                    <p>
                        Desenvolvedor e pesquisador com foco em aplicações web e software livre.
                        Sou formado em <b>Análise e Desenvolvimento de Sistemas</b> pelo UDF (2024)
                        e atuo como <b>Desenvolvedor Full Stack</b>, com mais de <b>2 anos</b> na
                        construção de aplicações web para instituições públicas e projetos privados.
                    </p>

                    <p>
                        Atuo no desenvolvimento e na manutenção de aplicações web, desde o front-end até a infraestrutura, incluindo bancos de dados, ambientes Linux, servidores, diagnóstico de problemas, deploy de aplicações e práticas de DevOps. Busco desenvolver soluções acessíveis, bem estruturadas e de fácil manutenção.
                    </p>
                </div>

                <div className={styles.areas} aria-label="Áreas de atuação">
                    {areas.map((area) => (
                        <article className={styles.area} key={area.title}>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InformacoesModernizadas;
