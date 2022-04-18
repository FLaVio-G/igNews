import { GetStaticProps } from "next";
import Head from "next/head";

import { getPrismicClient } from "../../services/prismic";

import Prismic from "@prismicio/client";

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at("document.type", "publication")
  ], {
    fetch:  ['publication.title', 'publication.content'],
    pageSize: 100,

  })
  console.log(response)

  return {
    props: {},
  };
};
