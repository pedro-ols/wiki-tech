import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <h3>Integrantes do Projeto</h3>
                <div className={styles.membersList}>
                    <span>Gabriela Feranda</span>
                    <span>Giovanni Gonçalves</span>
                    <span>Pedro Oliveira</span>
                    <span>Vinicius Valverde</span>
                    <span>Vitor Sampaio</span>
                </div>
                <p>&copy; 2025 Wiki Tech. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;