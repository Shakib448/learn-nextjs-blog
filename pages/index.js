import Layout from "../components/Layout/layout";
import utilStyles from "../styles/utils.module.scss";
import axios from "axios";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {data
            .map(({ id, body, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {id}
                <br />
                {title}
                <br />
                <Link href={`/posts/${id}`}>{body}</Link>
              </li>
            ))
            .slice(0, 4)}
        </ul>
      </section>
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return {
    data,
  };
};
