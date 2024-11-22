import styles from "@/styles/404.module.css";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <div className={styles.body}>
        <div
          className={`bg-gray-800 text-white p-4 rounded-lg shadow-lg ${styles.codeArea}`}
        >
          <span className={styles.comment}>// 404 page not found.</span>
          <span>
            <span className={styles.keyword}>if</span>(
            <span className={styles.operator}>!</span>
            <span className={styles.variable}>found</span>){" {"}
          </span>
          <span>
            <span className={styles.indent}>throw</span>(
            <span className={styles.string}>&quot;(╯°□°)╯︵ ┻━┻&quot;</span>);
          </span>
          <span>{"}"}</span>
          <span className={styles.comment}>
            //{" "}
            <Link href="/" className={styles.link}>
              Go home!
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Custom404;
