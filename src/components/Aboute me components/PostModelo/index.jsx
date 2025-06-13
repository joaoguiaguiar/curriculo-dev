import { useState, useEffect } from 'react';
import styles from './Post.module.scss';

const PostModelo = ({ fotoCapa, titulo }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className={`${styles.postModeloContainer} ${isVisible ? styles.visible : ''}`}>
            <div 
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            >
                <div className={styles.overlay}></div>
            </div>
            
            <div className={styles.container__titulo}>
                <h2 className={styles.titulo}>
                    {titulo}
                </h2>
            </div>
        </section>
    );
};

export default PostModelo;