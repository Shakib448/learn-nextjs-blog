import Layout from "../components/Layout/layout";
import utilStyles from "../styles/utils.module.scss";
import axios from "axios";

export default function Home({ data }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {data
            .map(({ id, body, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {body}
              </li>
            ))
            .slice(0, 4)}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return {
    props: {
      data,
    },
  };
}
