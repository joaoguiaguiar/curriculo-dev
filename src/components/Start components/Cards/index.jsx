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
    { label: 'DevOps e Infraestrutura', value: 'devops' },
];

const ProjectGrid = ({ className, items, hoveredProject, setHoveredProject }) => (
    <div className={className}>
        {items.map((post) => (
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
);

const Cards = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);
    const portfolioPosts = posts.filter((post) => post.categoria !== 'devops');
    const devOpsPosts = posts.filter((post) => post.categoria === 'devops');

    const filteredPosts = activeFilter === 'all'
        ? portfolioPosts
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

                <ProjectGrid
                    className={styles['projects-grid']}
                    hoveredProject={hoveredProject}
                    items={filteredPosts}
                    setHoveredProject={setHoveredProject}
                />

                {activeFilter === 'all' && (
                    <section className={styles['devops-section']}>
                        <div className={styles['devops-header']}>
                            <span className={styles['section-eyebrow']}>Automação e operação</span>
                            <h2 className={styles['devops-title']}>DevOps e Infraestrutura</h2>
                            <p className={styles['section-description']}>
                                Projetos de integração contínua, containers, implantação e sustentação de ambientes.
                            </p>
                        </div>

                        <ProjectGrid
                            className={styles['devops-grid']}
                            hoveredProject={hoveredProject}
                            items={devOpsPosts}
                            setHoveredProject={setHoveredProject}
                        />
                    </section>
                )}
            </div>
        </section>
    );
};

export default Cards;
