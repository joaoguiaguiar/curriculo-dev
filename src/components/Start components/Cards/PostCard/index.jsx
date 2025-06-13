import React, { useState, useEffect, useRef } from 'react';
import './Post.scss';

const ProjetoCard = ({ post, isHovered }) => {
    const [showDetails, setShowDetails] = useState(false);
    const detailsRef = useRef(null);

    const truncateText = (text, maxLength) => {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const openDetails = () => {
        setShowDetails(true);
        document.body.style.overflow = 'hidden';
    };

    const closeDetails = () => {
        setShowDetails(false);
        document.body.style.overflow = '';
    };

    const handleOutsideClick = (e) => {
        if (detailsRef.current && !detailsRef.current.contains(e.target)) {
            closeDetails();
        }
    };

    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            closeDetails();
        }
    };

    // Adicionar/remover event listeners quando o modal abre/fecha
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

    // Função para tratar erros de imagem
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                            </svg>
                            Ver Site
                        </a>
                    )}

                    <button
                        className="card-btn details-btn"
                        type="button"
                        onClick={openDetails}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg>
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjetoCard;