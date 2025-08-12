import styles from './framework.module.css';

export default function FrameworkPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Framework e Meta-framework</h1>
        <p className={styles.subtitle}>Estruturas de desenvolvimento que aceleram a criação de aplicações modernas</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>1. Definição, Tipos e Exemplos</h2>
          
          <h3>Framework</h3>
          <p>
            Estrutura de desenvolvimento que fornece bibliotecas, padrões e ferramentas para agilizar 
            a criação de aplicações, evitando que o desenvolvedor construa tudo do zero.
          </p>
          
          <h4>Tipos:</h4>
          <ul className={styles.featureList}>
            <li><strong className={styles.highlight}>Front-end:</strong> React, Angular, Vue.js</li>
            <li><strong className={styles.highlight}>Back-end:</strong> Express.js, Django, Laravel</li>
            <li><strong className={styles.highlight}>Full-stack:</strong> Meteor, Next.js</li>
          </ul>

          <h3>Meta-framework</h3>
          <p>
            Construído sobre um framework já existente, adicionando mais funcionalidades, automações e 
            estrutura pré-definida para facilitar o desenvolvimento.
          </p>

                  <section className={styles.section}>
          <h2>Exemplos Populares</h2>
          <div className={styles.examples}>
            <div className={styles.exampleCategory}>
              <h3>Frameworks Front-end</h3>
              <div className={styles.exampleGrid}>
                <div className={styles.exampleItem}>
                  <h4>React</h4>
                  <p>Biblioteca JavaScript para construção de interfaces</p>
                </div>
                <div className={styles.exampleItem}>
                  <h4>Angular</h4>
                  <p>Framework TypeScript completo para SPAs</p>
                </div>
                <div className={styles.exampleItem}>
                  <h4>Vue.js</h4>
                  <p>Framework progressivo para interfaces reativas</p>
                </div>
              </div>
            </div>

            <div className={styles.exampleCategory}>
              <h3>Meta-frameworks</h3>
              <div className={styles.exampleGrid}>
                <div className={styles.exampleItem}>
                  <h4>Next.js</h4>
                  <p>Meta-framework React com SSR e geração estática</p>
                </div>
                <div className={styles.exampleItem}>
                  <h4>Nuxt.js</h4>
                  <p>Meta-framework Vue.js para aplicações universais</p>
                </div>
                <div className={styles.exampleItem}>
                  <h4>NestJS</h4>
                  <p>Framework Node.js escalável para APIs enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>

        <section className={styles.section}>
          <h2>2. Prós e Contras</h2>
          
          <div className={styles.prosConsContainer}>
            <div className={styles.prosSection}>
              <h3>Prós</h3>
              <ul className={styles.featureList}>
                <li>Acelera o desenvolvimento</li>
                <li>Reduz erros comuns com padrões prontos</li>
                <li>Grande suporte da comunidade</li>
                <li>Facilita manutenção e escalabilidade</li>
              </ul>
            </div>

            <div className={styles.consSection}>
              <h3>Contras</h3>
              <ul className={styles.featureList}>
                <li>Pode ter curva de aprendizado inicial</li>
                <li>Menos flexibilidade em comparação ao desenvolvimento puro</li>
                <li>Dependência da tecnologia escolhida</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. Funcionalidades Principais</h2>
          <ul className={styles.featureList}>
            <li><strong className={styles.highlight}>Estrutura organizada</strong> para projetos</li>
            <li><strong className={styles.highlight}>Gerenciamento de rotas</strong> e requisições</li>
            <li><strong className={styles.highlight}>Integração com bancos de dados</strong> e APIs</li>
            <li><strong className={styles.highlight}>Ferramentas para testes,</strong> autenticação e segurança</li>
            <li><strong className={styles.highlight}>Suporte a componentes</strong> reutilizáveis</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Uso no Mercado e Oportunidades</h2>
          <div className={styles.marketInfo}>
            <li><strong className={styles.highlight}>Uso no mercado</strong></li>
            <p>
              Amplamente usados em empresas de tecnologia, startups e sistemas corporativos.
            </p>
            <p>
              Valorizados no mercado por agilizar entregas.
            </p>
            <li><strong className={styles.highlight}>Oportunidades de carreira</strong></li>
            <p>
              Profissionais com domínio em frameworks/meta-frameworks têm mais oportunidades em 
              desenvolvimento web, mobile e aplicações empresariais.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. Qual Será Utilizado em Sala de Aula</h2>
          <div className={styles.classroomInfo}>
            <p>
              Em sala será utilizado o <strong className={styles.highlight}>React</strong>, um framework front-end baseado em componentes, 
              muito usado no mercado para criar interfaces interativas e aplicações web dinâmicas.
            </p>
          </div>
        </section>


      </main>
    </div>
  );
}
