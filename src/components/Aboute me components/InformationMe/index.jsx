import { useState, useEffect, useRef } from 'react';
import styles from './Information.module.scss';

const InformacoesModernizadas = () => {
    const [cardsQueApareceram, setCardsQueApareceram] = useState([]);
    const referenciasDosCards = useRef([]);

    useEffect(() => {
        const observador = new IntersectionObserver(
            (itensObservados) => {
                itensObservados.forEach((item) => {
                    if (item.isIntersecting) {
                        const indiceDoCard = referenciasDosCards.current.findIndex(ref => ref === item.target);
                        if (indiceDoCard !== -1 && !cardsQueApareceram.includes(indiceDoCard)) {
                            setTimeout(() => {
                                setCardsQueApareceram(prev => [...prev, indiceDoCard]);
                            }, indiceDoCard * 150);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        referenciasDosCards.current.forEach(ref => {
            if (ref) observador.observe(ref);
        });

        return () => observador.disconnect();
    }, [cardsQueApareceram]);

    return (
        <div className={styles.container}>
            {/* Texto introdutório */}
            <div className={styles.intro}>
                <p>
                    Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> pelo UDF (2024),
                    com foco em desenvolvimento web. Atuo como <strong>Desenvolvedor Full Stack</strong>,
                    com mais de 2 anos na construção de aplicações web, sempre buscando aprimorar
                    minhas habilidades e contribuir para projetos inovadores, aliando eficiência
                    técnica às boas práticas de desenvolvimento.
                </p>
            </div>

            {/* Timeline Section */}
            <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.timelineIcon}>🎓</span>
                    </div>
                    <div className={styles.timelineContent}>
                        <h3>Formação Acadêmica</h3>
                        <p>Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> pelo UDF (2024)</p>
                    </div>
                </div>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.timelineIcon}>💼</span>
                    </div>
                    <div className={styles.timelineContent}>
                        <h3>Experiência Profissional</h3>
                        <p>Mais de <strong>2 anos</strong> na construção de aplicações web como Desenvolvedor Full Stack</p>
                    </div>
                </div>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.timelineIcon}>🏛️</span>
                    </div>
                    <div className={styles.timelineContent}>
                        <h3>Atuação Atual</h3>
                        <p><strong>Analista de Desenvolvimento Jr na IOS Informática, Organização e Sistemas Ltda</strong> - Atuação como desenvolvedor no IBRAM responsável pelo desenvolvimento de sites institucionais seguindo padrões governamentais.</p>
                    </div>
                </div>
            </div>

            <div className={styles.section_title_experiencia}>
                <h2 className={styles.section_title_experiencia}>experience</h2>
            </div>

            {/* Cards informativos */}
            <div className={styles.cardsContainer}>
                <div
                    ref={el => referenciasDosCards.current[0] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(0) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>⚛️</div>
                    <h3>Desenvolvimento React Moderno</h3>
                    <div className={styles.cardContent}>
                        <p>Criação de aplicações modernas usando React, TypeScript, hooks avançados, gerenciamento de estado com Context API, Recoil e Redux, além de testes com Jest e React Testing Library. Alguns projetos para destacar são: site de e-commerce envolvendo CRUD, barra de navegação e autenticação de usuários; Plataforma de vídeos desenvolvida com React e TypeScript como projeto de estudos, implementando funcionalidades de listagem e cadastro de vídeos por meio de requisições GET e POST utilizando MyJSONServer como API mock; projetos que utilizam ferramentas modernas de formulário como React Hook Forms, Formik, e para validação de dados usando Zod e Yup entre outros projetos que envolvem sistema de cadastro e eventos. Possuo experiência também em consumo de APIs REST com React Query e consultas com GraphQL.</p>
                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[1] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(1) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>💼</div>
                    <h3>Freelancer - Vendas de Sites</h3>
                    <div className={styles.cardContent}>
                        <p>Experiência em projetos freelancer desenvolvendo sites institucionais. Os dois projetos já disponíveis em meu GitHub foram desenvolvidos em código puro usando HTML, CSS e JavaScript. Nesses projetos fiz todo o levantamento de requisitos até chegar no resultado final.</p>
                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[2] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(2) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>🎯</div>
                    <h3>Especialização WordPress</h3>
                    <div className={styles.cardContent}>
                        <p>Criação de tema e plugins, com destaque para o child theme <b>Ibram 2025</b> e dois plugins feitos para o IBRAM, que hoje estão <b>ativos</b> em 18 sites de museus ligados à instituição. Todo o desenvolvimento exigiu um <b>sólido domínio</b> de PHP e da arquitetura do WordPress, com integração em rede de sites governamentais. Repositório disponível no meu GitHub.</p>
                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[3] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(3) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>🗄️</div>
                    <h3>Experiência com Banco de Dados</h3>
                    <div className={styles.cardContent}>
                        <p>Sólida experiência em modelagem e consultas SQL <strong>com MySQL</strong> tanto na formação acadêmica quanto no trabalho atual, utilizando MySQL e MongoDB em projetos reais e estudos avançados.</p>
                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[4] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(4) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>🚀</div>
                    <h3>DevOps & Deploy</h3>
                    <div className={styles.cardContent}>
                        <p>Experiência prática com migração de portais, deploy via SSH e GitLab, gerenciamento no Rancher (Kubernetes) e ambientes de produção em servidores governamentais <strong>do IBRAM</strong>.</p>
                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[5] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(5) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>👥</div>
                    <h3>Capacitação de Equipes</h3>
                    <div className={styles.cardContent}>
                        <p>Treinamento de equipes para gestão de sites WordPress, garantindo autonomia e segurança na administração de conteúdos, além de documentação técnica detalhada.</p>
                    </div>
                </div>
            </div>

            {/* Seção de destaque */}
            <div className={styles.highlight}>
                <div className={styles.highlightContent}>
                    <h2>Sempre em Evolução</h2>
                    <p>
                        Movido por desafios e aprendizado contínuo, busco constantemente evoluir como
                        profissional e contribuir com projetos que gerem impacto real através da tecnologia.
                        Acredito que a combinação entre conhecimento técnico sólido e paixão pelo que faço
                        resulta em soluções inovadoras e eficientes. Atualmente faço cursos na Alura, o que vem
                        trazendo um grande avanço no meu conhecimento. Meu foco atual está em Node.js, onde estou seguindo a
                        trilha de estudos deles.
                    </p>
                    <div className={styles.highlightStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>2+</span>
                            <span className={styles.statLabel}>Anos de experiência</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Projetos concluídos</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Dedicação</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformacoesModernizadas;