import React, { useState } from 'react';
import styles from './Cards.module.scss';
import posts from '../../../json/post.json';
import ProjetoCard from './PostCard';

const Cards = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredPosts = activeFilter === 'all'
        ? posts
        : posts.filter(post => post.categoria === activeFilter);

    return (
        <section className={styles['repertorio-section']} id="projetos">
            <div className={styles['repertorio-overlay']}></div>
            <div className={styles['repertorio-container']}>
                <div className={styles['section-header']}>
                    <h2 className={styles['section-title']}>Repertórios</h2>
                    <p className={styles['section-description']}>Clique sobre os cards para ver detalhes</p>
                </div>

                <div className={styles['projects-grid']}>
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className={styles['project-item']}
                            onMouseEnter={() => setHoveredProject(post.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <ProjetoCard
                                post={post}
                                isHovered={hoveredProject === post.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
