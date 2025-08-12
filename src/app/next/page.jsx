import React from 'react';
import styles from './next.module.css';

const NextJSPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div style={{backgroundColor: 'purple', padding: '25px 50px', borderRadius: '15px', display: 'inline-block', marginBottom: '20px'}}>
          <h1 style={{color: 'white', margin: '0', fontSize: '3.5rem', fontWeight: '700'}}>Next.js 15</h1>
        </div>
        <p className={styles.subtitle}>The React Framework for Production</p>
        <div className={styles.versionBadge}>
          Giovanni Gomes Gonçalves
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.strengthsTitle}`}>Pontos Fortes</h2>
        <div className={`${styles.grid} ${styles.gridAutoFit}`}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{color: 'purple'}}>Performance</h3>
            <p>Renderização no servidor (<strong style={{color: 'purple'}}>SSR</strong>) e geração estática (<strong style={{color: 'purple'}}>SSG</strong>) automáticas. Otimização de imagens e divisão de código inteligente.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{color: 'purple'}}>Roteamento Fácil</h3>
            <p>Sistema baseado em pastas. <strong style={{color: 'purple'}}>Crie uma pasta = nova rota</strong>. Loading e erros automáticos.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{color: 'purple'}}>Dev Experience</h3>
            <p><strong style={{color: 'purple'}}>Hot reload rápido</strong>, TypeScript integrado, debug fácil e ferramentas prontas.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{color: 'purple'}}>Full-Stack</h3>
            <p><strong style={{color: 'purple'}}>APIs integradas</strong>, deploy fácil e funciona com qualquer banco de dados.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.noveltiesTitle}`}>Novidades do Next.js 15</h2>
        <div className={`${styles.highlightBox} ${styles.noveltiesBox}`}>
          <div className={styles.noveltiesGrid}>
            <div className={styles.noveltySection}>
              <h3 style={{color: 'purple'}}>React 19</h3>
              <ul>
                <li><strong style={{color: 'purple'}}>Suporte ao React 19</strong></li>
                <li>Server Components melhorados</li>
                <li>Performance otimizada</li>
              </ul>
              
              <h3 style={{color: 'purple'}}>Turbopack</h3>
              <ul>
                <li><strong style={{color: 'purple'}}>70% mais rápido</strong></li>
                <li>Hot reload instantâneo</li>
                <li>Cache inteligente</li>
              </ul>
            </div>
            <div className={styles.noveltySection}>
              <h3 style={{color: 'purple'}}>Cache Melhorado</h3>
              <ul>
                <li>Cache por componente</li>
                <li>Invalidação automática</li>
                <li>Partial Prerendering</li>
              </ul>
              
              <h3 style={{color: 'purple'}}>DevTools</h3>
              <ul>
                <li>React DevTools integrado</li>
                <li>Profiler de performance</li>
                <li>Bundle analyzer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.curiositiesTitle}`}>Curiosidades</h2>
        <div className={`${styles.grid} ${styles.gridAutoFit}`}>
          <div className={`${styles.curiosityCard} ${styles.curiosityPink}`}>
            <h3 className={styles.curiosityTitle} style={{color: 'purple'}}>Números</h3>
            <p>• <strong style={{color: 'purple'}}>5+ milhões downloads/semana</strong><br/>
               • <strong style={{color: 'purple'}}>1+ milhão de devs</strong><br/>
               • 120k+ estrelas GitHub</p>
          </div>
          <div className={`${styles.curiosityCard} ${styles.curiosityBlue}`}>
            <h3 className={styles.curiosityTitle} style={{color: 'purple'}}>Criador</h3>
            <p><strong style={{color: 'purple'}}>Guillermo Rauch</strong>, fundador da Vercel. Empresa avaliada em <strong style={{color: 'purple'}}>$2.5+ bilhões</strong>.</p>
          </div>
          <div className={`${styles.curiosityCard} ${styles.curiosityGreen}`}>
            <h3 className={styles.curiosityTitle} style={{color: 'purple'}}>Zero Config</h3>
            <p>Um dos primeiros frameworks <strong style={{color: 'purple'}}>"funciona na primeira instalação"</strong> sem configuração complexa.</p>
          </div>
          <div className={`${styles.curiosityCard} ${styles.curiosityYellow}`}>
            <h3 className={styles.curiosityTitle} style={{color: 'purple'}}>Edge Computing</h3>
            <p>Pioneiro em Edge Functions - código roda em <strong style={{color: 'purple'}}>250+ locais no mundo</strong>.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.companiesTitle}`}>Empresas que Usam</h2>
        <div className={`${styles.highlightBox} ${styles.companiesBox}`}>
          <div className={styles.gridCompanies}>
            <div className={styles.companyCategory}>
              <h3 className={styles.companyTitle} style={{color: 'purple'}}>Fintech</h3>
              <p><strong style={{color: 'purple'}}>PayPal</strong>, Coinbase, Revolut</p>
            </div>
            <div className={styles.companyCategory}>
              <h3 className={styles.companyTitle} style={{color: 'purple'}}>Mídia</h3>
              <p><strong style={{color: 'purple'}}>Netflix</strong>, Spotify, TikTok</p>
            </div>
            <div className={styles.companyCategory}>
              <h3 className={styles.companyTitle} style={{color: 'purple'}}>E-commerce</h3>
              <p><strong style={{color: 'purple'}}>Shopify</strong>, Target, H&M</p>
            </div>
            <div className={styles.companyCategory}>
              <h3 className={styles.companyTitle} style={{color: 'purple'}}>Tech</h3>
              <p><strong style={{color: 'purple'}}>Microsoft</strong>, IBM, Samsung</p>
            </div>
            <div className={styles.companyCategory}>
              <h3 className={styles.companyTitle} style={{color: 'purple'}}>Mobilidade</h3>
              <p><strong style={{color: 'purple'}}>Uber</strong>, Tesla, BMW</p>
            </div>
            <div className={styles.companyCategory}>
              <h3 className={styles.companyTitle} style={{color: 'purple'}}>Social</h3>
              <p><strong style={{color: 'purple'}}>WhatsApp</strong>, Discord</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.opportunitiesTitle}`}>Oportunidades</h2>
        <div className={styles.opportunitiesGrid}>
          <div>
            <h3 style={{color: 'purple', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600'}}>Onde Usar</h3>
            <div className={styles.areaBox}>
              <ul>
                <li><strong style={{color: 'purple'}}>E-commerce:</strong> Lojas online</li>
                <li><strong style={{color: 'purple'}}>SaaS:</strong> Sistemas web</li>
                <li><strong style={{color: 'purple'}}>Dashboards:</strong> Painéis admin</li>
                <li><strong style={{color: 'purple'}}>Blogs:</strong> Sites de conteúdo</li>
                <li><strong style={{color: 'purple'}}>Landing Pages:</strong> Sites institucionais</li>
                <li><strong style={{color: 'purple'}}>Apps:</strong> Sistemas empresariais</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 style={{color: 'purple', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600'}}>Mercado</h3>
            <div className={styles.marketBox}>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{color: 'purple'}}>Salários Brasil:</strong>
                <ul style={{ marginTop: '5px' }}>
                  <li><strong style={{color: 'purple'}}>Júnior:</strong> R$ 4k - 7k</li>
                  <li><strong style={{color: 'purple'}}>Pleno:</strong> R$ 8k - 15k</li>
                  <li><strong style={{color: 'purple'}}>Sênior:</strong> R$ 15k - 25k+</li>
                </ul>
              </div>
              <div>
                <strong style={{color: 'purple'}}>Crescimento:</strong>
                <ul style={{ marginTop: '5px' }}>
                  <li><strong style={{color: 'purple'}}>40% ao ano</strong></li>
                  <li><strong style={{color: 'purple'}}>500k+ vagas globais</strong></li>
                  <li>Alta demanda remote</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.specializationBox}>
          <h3 className={styles.specializationTitle} style={{color: 'purple'}}>Como Aprender</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <strong style={{color: 'purple'}}>Base:</strong>
              <p><strong style={{color: 'purple'}}>React</strong>, JavaScript, HTML/CSS</p>
            </div>
            <div className={styles.skillCategory}>
              <strong style={{color: 'purple'}}>Next.js:</strong>
              <p>Roteamento, <strong style={{color: 'purple'}}>API Routes</strong>, SSR</p>
            </div>
            <div className={styles.skillCategory}>
              <strong style={{color: 'purple'}}>Ferramentas:</strong>
              <p><strong style={{color: 'purple'}}>Vercel</strong>, Git, VS Code</p>
            </div>
            <div className={styles.skillCategory}>
              <strong style={{color: 'purple'}}>Extras:</strong>
              <p><strong style={{color: 'purple'}}>TypeScript</strong>, Testes, Deploy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextJSPage;
