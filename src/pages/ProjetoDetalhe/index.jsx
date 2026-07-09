import { Link, useParams } from 'react-router-dom';
import wordpressLogo from '../../assets/WordPress-logotype-alternative.png';
import posts from '../../json/post.json';
import styles from './ProjetoDetalhe.module.scss';

const ProjetoDetalhe = () => {
    const { id } = useParams();
    const project = posts.find((post) => String(post.id) === id);

    if (!project) {
        return (
            <main className={styles.projectDetail}>
                <section className={styles.notFound}>
                    <span>Projeto</span>
                    <h1>Projeto não encontrado</h1>
                    <Link to="/portfolio">Voltar para o portfólio</Link>
                </section>
            </main>
        );
    }

    const imageSrc = project.imagem === 'wordpressLogo'
        ? wordpressLogo
        : project.imagem || `/IMG/posts/${project.id}/capa.png`;
    const technologies = project.tecnologias || project.tags || [];
    const projectLink = project.link || project.URL;
    const githubLink = project.github || project.repositorio;
    const extraLinks = project.links || [];
    const origin = project.origem || 'Projeto';

    const handleImageError = (e) => {
        e.currentTarget.src = '/IMG/posts/3/capa.png';
    };

    return (
        <main className={styles.projectDetail}>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <Link className={styles.backLink} to="/portfolio">
                        Voltar ao portfólio
                    </Link>

                    <span className={styles.origin}>{origin}</span>
                    <h1>{project.titulo}</h1>
                    <p>{project.descricao}</p>

                    <div className={styles.actions}>
                        {projectLink && (
                            <a href={projectLink} rel="noopener noreferrer" target="_blank">
                                Ver projeto
                            </a>
                        )}

                        {githubLink && (
                            <a
                                className={styles.secondary}
                                href={githubLink}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>

                <div className={styles.heroImage}>
                    <img alt={project.titulo} onError={handleImageError} src={imageSrc} />
                </div>
            </section>

            <section className={styles.contentGrid}>
                <article className={styles.description}>
                    <span>Sobre o projeto</span>
                    <p>{project.texto || project.descricao}</p>
                </article>

                {technologies.length > 0 && (
                    <aside className={styles.techCard}>
                        <span>Tecnologias</span>
                        <div>
                            {technologies.map((technology) => (
                                <small key={technology}>{technology}</small>
                            ))}
                        </div>

                        {extraLinks.length > 0 && (
                            <nav className={styles.extraLinks} aria-label="Links adicionais do projeto">
                                <span>Links</span>
                                {extraLinks.map((link) => (
                                    <a
                                        href={link.href}
                                        key={link.href}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        )}
                    </aside>
                )}
            </section>
        </main>
    );
};

export default ProjetoDetalhe;
