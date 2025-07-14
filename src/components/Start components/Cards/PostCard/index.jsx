import { useState, useEffect, useRef } from 'react';
import './Post.scss';

const ComponenteCard = ({ post, isHovered }) => {
    const [showDetails, setShowDetails] = useState(false);
    const detailsRef = useRef(null);
    const ignoreClickRef = useRef(false); 

    const truncateText = (text, maxLength) => {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const openDetails = () => {
        setShowDetails(true);
        document.body.style.overflow = 'hidden';
        ignoreClickRef.current = true; 
    };

    const closeDetails = () => {
        setShowDetails(false);
        document.body.style.overflow = '';
    };

    const handleOutsideClick = (e) => {
        if (ignoreClickRef.current) {
            ignoreClickRef.current = false;
            return;
        }

        if (detailsRef.current && !detailsRef.current.contains(e.target)) {
            closeDetails();
        }
    };

    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            closeDetails();
        }
    };

    useEffect(() => {
        if (showDetails) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleEscKey);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [showDetails]);

    const handleImageError = (e) => {
        e.target.src = '/IMG/placeholder-project.png';
    };

    return (
        <div className={`projeto-card ${isHovered ? 'hovered' : ''}`}>
            <div className="card-image-container">
                <img
                    className="card-image"
                    src={`/IMG/posts/${post.id}/capa.png`}
                    alt={post.titulo}
                    loading="lazy"
                    onError={handleImageError}
                />
            </div>

            <div className="card-content">
                <h3 className="card-title">{post.titulo}</h3>

                <p className="card-description">
                    {post.descricao ?
                        truncateText(post.descricao, 80) :
                        truncateText(post.texto || "Projeto desenvolvido com foco em experiência do usuário e design moderno.", 80)}
                </p>

                <div className="card-actions">
                    {post.URL && (
                        <a
                            href={post.URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-btn view-btn"
                        >
                            Ver Site
                        </a>
                    )}

                    <button
                        className="card-btn details-btn"
                        type="button"
                        onClick={openDetails}
                    >
                        Detalhes
                    </button>
                </div>
            </div>

            {showDetails && (
                <div className="details-overlay">
                    <div className="details-container" ref={detailsRef}>
                        <div className="details-header">
                            <h2 className="details-title">{post.titulo}</h2>
                            <button
                                className="details-close"
                                onClick={closeDetails}
                                aria-label="Fechar"
                            >
                                ×
                            </button>
                        </div>

                        <div className="details-content custom-scrollbar">
                            <div className="details-info">
                                <h3 className="details-subtitle">Descrição do Projeto</h3>
                                <p className="details-text">{post.texto || "Detalhes do projeto não disponíveis."}</p>

                                <div className="details-tecnologias">
                                    <h3 className="details-subtitle">Tecnologias</h3>
                                    <div className="details-tags">
                                        {post.tags && post.tags.length > 0 ? (
                                            post.tags.map((tag, index) => (
                                                <span key={index} className={`details-tag tag-${tag.toLowerCase()}`}>{tag}</span>
                                            ))
                                        ) : (
                                            <>
                                                <span className="details-tag tag-html">HTML</span>
                                                <span className="details-tag tag-css">CSS</span>
                                                <span className="details-tag tag-javascript">JavaScript</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {post.repositorio && (
                                    <div className="details-repositorio">
                                        <h3 className="details-subtitle">Repositório</h3>
                                        <a
                                            href={post.repositorio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="details-repo-link"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>
                                            Ver no GitHub
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComponenteCard;
