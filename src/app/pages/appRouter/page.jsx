import styles from "./appRouter.module.css";

export default function AppRouterPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>App Router Page</h1>
      <p className={styles.description}>
        App Router é a principal metodologia de estruturação de rotas do react.
        Ele posibilita a navegação e o roteamento.
      </p>

      <main className={styles.rootFiles}>
        <section className={styles.errorSection}>
          <h2 className={styles.title}>
            Arquivos error.js & global-error.js
          </h2>
          <p className={styles.errorDescription}></p>
        </section>
        <section className={styles.notFoundSection}>
          <h2 className={styles.title}>Arquivos de not-found</h2>
          <h6 className={styles.conceptDescription}>arquivos de not-found são tipos de arquivos nativos do React que servem para orientar a estrutura de rotas para o caso de haver uma rota não encontrada no projeto</h6>
          <p className={styles.functionDescription}>Basicamente, caso o usuário escreva em sua url algum nome que não seja igual ao de alguma página do projeto, o sistema o redireciona para uma rota orientada como not-found, que retorna erro 404(não encontrada). A estrutura front-end desse arquivo é personalizada justamente nesse arquivo not-found.jsx.</p>
          <p className={styles.functionDescription}>Caso não haja uma estrutura definida como not-found, o react redireciona o usuário para uma tela 404 padrão.</p>
        </section>
        <section className={styles.loadingSection}>
          <h2 className={styles.title}>função do loading.js</h2>
        </section>
        <section className={styles.layoutSection}>
          <h2 className={styles.title}>Função do arquivo layout.js</h2>
        </section>
        <section className={styles.pageSection}>
          <h2 className={styles.title}>Rotas com page.jsx</h2>
          <h6 className={styles.conceptDescription}>Em cada rota de uma aplicação React, deve haver uma page, que funciona como um index para a rota.</h6>
          <p className={styles.functionDescription}>O sistema entende que, ao entrar em uma rota, ele deve procurar, dentro da pasta do projeto que sinalize aquela rota, um arquivo de page. A estrutura definida nesse arquivo será exibida na tela do usuário.</p>
          <p className={styles.functionDescription}>Ele serve como um ponto de apoio para o sistema, orientando qual arquivo deve ser exibido.</p>
        </section>
        
      </main>
    </div>
  );
}
