import { useState, useEffect, useRef } from 'react';
import curriculo from '../../../../public/documents/Joao-Aguiar-DesenvolvedorWeb.pdf'
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
            <div className={styles.intro}>
                <p>
                    Formado em <b>Análise e Desenvolvimento de Sistemas</b> pelo UDF (2024),
                    com foco em desenvolvimento web. Atuo como <b>Desenvolvedor Full Stack</b>,
                    com mais de <b>2 anos</b> na construção de aplicações web, sempre buscando aprimorar
                    minhas habilidades e contribuir para projetos inovadores, aliando eficiência
                    técnica às boas práticas de desenvolvimento.
                </p>
            </div>

            <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.timelineIcon}>🎓</span>
                    </div>
                    <div className={styles.timelineContent}>
                        <h3>Formação Acadêmica</h3>
                        <p>Formado em <b>Análise e Desenvolvimento de Sistemas</b> pelo UDF (2024)</p>
                    </div>
                </div>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.timelineIcon}>💼</span>
                    </div>
                    <div className={styles.timelineContent}>
                        <h3>Experiência Profissional</h3>
                        <p>Mais de <b>2 anos</b> na construção de aplicações web como <b>Desenvolvedor Full Stack</b></p>
                    </div>
                </div>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.timelineIcon}>🏛️</span>
                    </div>
                    <div className={styles.timelineContent}>
                        <h3>Atuação Atual</h3>
                        <p>
                            <b>Analista de Desenvolvimento Jr na IOS Informática, Organização e Sistemas Ltda</b> -
                            Atuação como desenvolvedor no <b>IBRAM</b> responsável pelo desenvolvimento de sites institucionais seguindo padrões governamentais.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.section_title_experiencia}>
                <h2 className={styles.section_title_experiencia}>Experience</h2>
            </div>

            <div className={styles.cardsContainer}>
                <div
                    ref={el => referenciasDosCards.current[0] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(0) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>⚛️</div>
                    <h3>Desenvolvimento React Moderno</h3>
                    <div className={styles.cardContent}>
                        <p>
                            Criação de aplicações modernas usando <b>React</b>, <b>TypeScript</b>, <b>hooks avançados</b> e gerenciamento de estado com <b>Context API</b>, <b>Recoil</b> e <b>Redux</b>, além de testes com <b>Jest</b> e <b>React Testing Library</b>. Entre os projetos de destaque:
                            <b>site de e-commerce</b> com CRUD completo, barra de navegação e autenticação de usuários;
                            <b>plataforma de vídeos</b> desenvolvida como projeto de estudo, implementando listagem e cadastro de vídeos; e projetos utilizando formulários avançados com <b>React Hook Form</b> e <b>Formik</b>, validados com <b>Zod</b> e <b>Yup</b>.
                            Também possuo experiência prática em consumir dados de <b>APIs REST</b> e realizar consultas com <b>GraphQL</b>.
                        </p>

                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[1] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(1) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>💼</div>
                    <h3>Freelancer - Vendas de Sites</h3>
                    <div className={styles.cardContent}>
                        <p>
                            Experiência em projetos freelancer desenvolvendo <b>sites institucionais</b>, desde o levantamento de requisitos até a entrega final, todos disponíveis no meu <b>GitHub</b> e construídos com <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b>.
                        </p>

                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[2] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(2) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>🎯</div>
                    <h3>Especialização WordPress</h3>
                    <div className={styles.cardContent}>
                        <p>
                            Atuação no desenvolvimento e manutenção de <b>temas</b> e{' '}
                            <b>plugins WordPress</b> para projetos institucionais do setor
                            público, com foco em performance, segurança e boas práticas de
                            desenvolvimento utilizando <b>PHP</b>.
                        </p>
                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[3] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(3) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>🗄️</div>
                    <h3>Experiência com Banco de Dados</h3>
                    <div className={styles.cardContent}>
                        <p>
                            Sólida experiência em modelagem e consultas <b>SQL</b> com <b>MySQL</b>, incluindo <b>backup e restauração de bases de dados</b>. Atuação tanto na formação acadêmica quanto no trabalho atual, utilizando também <b>MongoDB</b> em projetos reais e estudos avançados.
                        </p>
                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[4] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(4) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>🚀</div>
                    <h3>DevOps & Deploy</h3>
                    <div className={styles.cardContent}>
                        <p>
                            Atuação em <b>migração de portais WordPress</b> entre ambientes local e produção, além de
                            <b> migração de infraestrutura NFS</b> de Windows para Linux via terminal, incluindo 
                            <b> configuração de permissões Apache</b> e <b>gerenciamento de usuários Linux</b>.
                        </p>
                        <br />
                        <p>
                            Realização de <b>deploys via SSH e GitLab</b>, com ambientes orquestrados em
                            <b> Kubernetes (Rancher) </b>, atuando também em <b> ajustes e manutenção de pipelines CI/CD </b>
                            no GitLab, seguindo <b> boas práticas em ambientes de produção governamentais</b>.
                        </p>


                    </div>
                </div>

                <div
                    ref={el => referenciasDosCards.current[5] = el}
                    className={`${styles.card} ${cardsQueApareceram.includes(5) ? styles.visible : ''}`}
                >
                    <div className={styles.cardIcon}>👥</div>
                    <h3>Capacitação de Equipes</h3>
                    <div className={styles.cardContent}>
                        <p>
                            Treinamento de equipes para gestão de sites <b>WordPress</b>, garantindo autonomia e segurança na administração de conteúdos, além de documentação técnica detalhada.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.highlight}>
                <div className={styles.highlightContent}>
                    <h2>Sempre em Evolução</h2>
                    <p>
                        Movido por desafios e aprendizado contínuo, busco evoluir como profissional e contribuir com projetos que gerem impacto real através da tecnologia.
                        Atualmente faço cursos na <b>Alura</b> e meu foco está em <b>Node.js</b>, seguindo a trilha de estudos deles.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <a
                            href={curriculo}
                            download="Joao-Aguiar-DesenvolvedorWeb.pdf"
                            className={styles.downloadButton}
                        >
                            📄 Baixar Currículo Completo
                        </a>
                    </div>
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