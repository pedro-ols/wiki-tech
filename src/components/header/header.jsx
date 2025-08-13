import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <h1>WikiTech</h1>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Início</Link>
                    <Link href="/framework" className={styles.navLink}>Frameworks</Link>
                    <Link href="/bibliotecas" className={styles.navLink}>Bibliotecas de Estilos</Link>
                    <Link href="/next" className={styles.navLink}>Next.js 15</Link>
                    <Link href="/appRouter" className={styles.navLink}>App Router</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;