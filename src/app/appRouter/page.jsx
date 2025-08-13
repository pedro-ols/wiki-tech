import styles from "./appRouter.module.css";
import Image from "next/image";
import Loading from "@/components/loading";

export default function AppRouterPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>App Router Page</h1>
      <p className={styles.description}>
        App Router é a principal metodologia de estruturação de rotas do react.
        Ele posibilita a navegação e o roteamento.
      </p>

      <main className={styles.rootFiles}>
        <section className={styles.section}>
          <h2 className={styles.title}>Arquivos error.js & global-error.js</h2>
          <h6 className={styles.conceptDescription}>
            Os arquivos error.js e global-error.js têm uma função muito
            importante quanto ao tratamento de erros e cumprimento das normas
            UI/UX, sua função é basicamente retornar mensagens de erro da forma
            mais amigável possível para um possível usuário.
          </h6>
          <p className={styles.functionDescription}>
            O error.js tem uma proposta mais fechada, ele é posicionado junto à
            pasta de uma rota, e ao sinal de qualquer erro naquela rota, ele
            retorna uma estrutura HTML/CSS, contruída pelo desenvolvedor, que
            explicita o corrente erro.
          </p>
          <p className={styles.functionDescription}>
            Caso o error.js não consiga capturar um erro, ou caso este erro se
            encontre fora de sua rota, entra em ação o global-error.js. Ele
            captura erros em escopo global, erros esses que geralmente vem do
            layout. Ele funciona como um componente pai para tratamento de
            erros.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>Arquivos de not-found</h2>
          <h6 className={styles.conceptDescription}>
            arquivos de not-found são tipos de arquivos nativos do React que
            servem para orientar a estrutura de rotas para o caso de haver uma
            rota não encontrada no projeto
          </h6>
          <p className={styles.functionDescription}>
            Basicamente, caso o usuário escreva em sua url algum nome que não
            seja igual ao de alguma página do projeto, o sistema o redireciona
            para uma rota orientada como not-found, que retorna erro 404(não
            encontrada). A estrutura front-end desse arquivo é personalizada
            justamente nesse arquivo not-found.jsx.
          </p>
          <p className={styles.functionDescription}>
            Caso não haja uma estrutura definida como not-found, o react
            redireciona o usuário para uma tela 404 padrão.
          </p>
          <div className={styles.mediaContainer}>
            <Image
              src={"/images/404-example.png"}
              alt="Exemplo de tela not found"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>loading.js</h2>
          <h6 className={styles.conceptDescription}>
            Os componentes de loading servem para oferecer ao usuário uma imagem
            (geralmente animada) para representar o carregamento de elementos,
            sem que o usuário tenha a imporessão de que houve uma falha ou
            travamento grave no sistema.
          </h6>
          <p className={styles.functionDescription}>
            Ele recebe uma função de verificação de estado, definida incialmente
            com valor "false" e o componente é ativado. Quando o sistema recebe
            a informação carregada, o estado vira "true" e o componente é
            desativado
          </p>

          <h6 className={styles.conceptDescription}>
            Exemplo de componente de loading(apenas estático, não funcional)
          </h6>
          <div className={styles.mediaContainer}>
            <Loading />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>Função do arquivo layout.js</h2>
          <h6 className={styles.conceptDescription}>
            O arquivo layout.js é como um componente pai que engloba toda a
            estrutura de layout de uma rota.
          </h6>
          <p className={styles.functionDescription}>
            Ele padroniza todas as páginas de uma aplicação, aplicando
            estruturas componentizadas de maneira universal. Como um template
            persistente que conecta todas as estruturas padrões da aplicação
          </p>
          <p className={styles.functionDescription}></p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>Rotas com page.jsx</h2>
          <h6 className={styles.conceptDescription}>
            Em cada rota de uma aplicação React, deve haver uma page, que
            funciona como um index para a rota.
          </h6>
          <p className={styles.functionDescription}>
            O sistema entende que, ao entrar em uma rota, ele deve procurar,
            dentro da pasta do projeto que sinalize aquela rota, um arquivo de
            page. A estrutura definida nesse arquivo será exibida na tela do
            usuário.
          </p>
          <p className={styles.functionDescription}>
            Ele serve como um ponto de apoio para o sistema, orientando qual
            arquivo deve ser exibido.
          </p>
        </section>
      </main>
    </div>
  );
}
