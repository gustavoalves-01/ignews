import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { getPrismicClient } from "../../services/prismic";


import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>17 de agosto de 2021</time>
            <strong>Creating a Monorepo with Lenna</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolores aperiam aliquid molestias maxime natus dignissimos. Repellendus laborum cum labore dolores, nihil maxime! Cumque suscipit modi aut libero fuga ad.</p>
          </a>
          <a href="">
            <time>17 de agosto de 2021</time>
            <strong>Creating a Monorepo with Lenna</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolores aperiam aliquid molestias maxime natus dignissimos. Repellendus laborum cum labore dolores, nihil maxime! Cumque suscipit modi aut libero fuga ad.</p>
          </a>
          <a href="">
            <time>17 de agosto de 2021</time>
            <strong>Creating a Monorepo with Lenna</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolores aperiam aliquid molestias maxime natus dignissimos. Repellendus laborum cum labore dolores, nihil maxime! Cumque suscipit modi aut libero fuga ad.</p>
          </a>
          <a href="">
            <time>17 de agosto de 2021</time>
            <strong>Creating a Monorepo with Lenna</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolores aperiam aliquid molestias maxime natus dignissimos. Repellendus laborum cum labore dolores, nihil maxime! Cumque suscipit modi aut libero fuga ad.</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post')], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2));
  return {
    props: {}
  }
}