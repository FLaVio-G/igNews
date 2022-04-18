import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title> Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2012</time>
            <strong>Criando um novo modelo para desenvolvimento web</strong>
            <p>Após um breve estudo sobre um assunto foi...</p>
          </a>

          <a href="#">
            <time>12 de março de 2012</time>
            <strong>Criando um novo modelo para desenvolvimento web</strong>
            <p>Após um breve estudo sobre um assunto foi...</p>
          </a>

          <a href="#">
            <time>12 de março de 2012</time>
            <strong>Criando um novo modelo para desenvolvimento web</strong>
            <p>Após um breve estudo sobre um assunto foi...</p>
          </a>
        </div>
      </main>
    </>
  );
}
