import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const name = "Muktadir Ahamed Shakib";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Next js</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="https://www.upwork.com/profile-portraits/c1VbSYWd7YdZwWk4Y5a1HYlh1XHscqoJ1ZlWow7crUePzcsUqs0mNTcM9KlFFxmztd"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <motion.h1
              animate={{ scale: 2 }}
              transition={{ duration: 0.5 }}
              className={utilStyles.heading2Xl}
            >
              {name}
            </motion.h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <motion.div
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.backToHome}
        >
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
