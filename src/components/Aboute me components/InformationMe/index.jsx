import styles from './Information.module.scss';

const Informacoes = () => {
    return (
        <div className={styles.container__elementos}>
            <p className={styles.paragrafo}>
                Sou formado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário UDF (2024) e atuo como Desenvolvedor Full Stack com foco em aplicações web. Trabalho com tecnologias como HTML, CSS, JavaScript e TypeScript, utilizando frameworks e bibliotecas como React, Bootstrap, SCSS e tailwind css.
            </p>

            <p className={styles.paragrafo}>
                No back-end, tenho experiência com Node.js e PHP, além de bancos de dados como MySQL e MongoDB. Busco sempre aplicar boas práticas de organização, segurança e escalabilidade nos projetos em que atuo.Tenho familiaridade com princípios de API REST e arquitetura MVC, buscando sempre estruturar projetos de forma escalável e manutenível.
            </p>

            <p className={styles.paragrafo}>
                Tenho forte atuação com WordPress, desenvolvendo temas customizados e plugins sob demanda. Gosto de criar soluções adaptadas às necessidades reais de cada projeto, garantindo flexibilidade e boa experiência de uso para os administradores dos sites.
            </p>

            <p className={styles.paragrafo}>
                Sou movido por desafios e aprendizado contínuo, buscando evoluir como profissional e contribuir com projetos que gerem impacto real através da tecnologia.
            </p>
        </div>
    );
};

export default Informacoes;