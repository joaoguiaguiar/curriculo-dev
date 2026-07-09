import { useState } from 'react';
import styles from './Cards.module.scss';
import posts from '../../../json/post.json';
import ComponenteCard from './PostCard';

const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'IBRAM / IOS / G4F', value: 'ibram-ios' },
    { label: 'IBICT', value: 'ibict' },
    { label: 'Freelance', value: 'freelance' },
    { label: 'Projetos próprios', value: 'proprio' },
    { label: 'Open Source', value: 'opensource' },
];

const Cards = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredPosts = activeFilter === 'all'
        ? posts
        : posts.filter((post) => post.categoria === activeFilter);

    return (
        <section className={styles['portfolio-section']} id="projetos">
            <div className={styles['portfolio-container']}>
                <div className={styles['section-header']}>
                    <span className={styles['section-eyebrow']}>Projetos selecionados</span>
                    <h2 className={styles['section-title']}>Portfólio</h2>
                    <p className={styles['section-description']}>
                        Projetos, portais e soluções que desenvolvi ou contribuí ao longo da minha atuação profissional.
                    </p>
                </div>

                <div className={styles['filter-tabs']} aria-label="Filtros de projetos">
                    {filters.map((filter) => (
                        <button
                            className={`${styles['filter-btn']} ${activeFilter === filter.value ? styles.active : ''}`}
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            type="button"
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className={styles['projects-grid']}>
                    {filteredPosts.map((post) => (
                        <div
                            className={styles['project-item']}
                            key={post.id}
                            onMouseEnter={() => setHoveredProject(post.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <ComponenteCard
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
