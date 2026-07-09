import { Link } from 'react-router-dom';
import wordpressLogo from '../../../../assets/WordPress-logotype-alternative.png';
import './Post.scss';

const ComponenteCard = ({ post, isHovered }) => {
    const imageSrc = post.imagem === 'wordpressLogo'
        ? wordpressLogo
        : post.imagem || `/IMG/posts/${post.id}/capa.png`;
    const technologies = post.tecnologias || post.tags || [];
    const projectLink = post.link || post.URL;
    const origin = post.origem || '';

    const handleImageError = (e) => {
        e.currentTarget.src = '/IMG/posts/3/capa.png';
    };

    return (
        <article className={`projeto-card ${isHovered ? 'hovered' : ''}`}>
            <div className="card-image-container">
                <img
                    alt={post.titulo}
                    className="card-image"
                    loading="lazy"
                    onError={handleImageError}
                    src={imageSrc}
                />
                {origin && <span className="origin-tag">{origin}</span>}
            </div>

            <div className="card-content">
                <h3 className="card-title">{post.titulo}</h3>

                <p className="card-description">{post.descricao}</p>

                <div className="tech-list">
                    {technologies.slice(0, 5).map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="card-actions">
                    {projectLink && (
                        <a
                            className="card-btn view-btn"
                            href={projectLink}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Ver projeto
                        </a>
                    )}

                    <Link className="card-btn details-btn" to={`/portfolio/${post.id}`}>
                        Detalhes
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ComponenteCard;
