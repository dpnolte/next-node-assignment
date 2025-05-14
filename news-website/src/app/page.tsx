import { ArticleList } from "@/components/article-list.client";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Homepage</h1>
        <ArticleList />
      </main>
    </div>
  );
}
