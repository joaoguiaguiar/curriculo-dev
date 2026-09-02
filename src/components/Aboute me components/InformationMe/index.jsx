import styles from './Information.module.scss';

const InformacoesModernizadas = () => {
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
            </div>
        </section>
    );
};

export default InformacoesModernizadas;
