import Layout from "../../components/Layout/layout";
import axios from "axios";
import { motion } from "framer-motion";

export default function Post({ apiRouteData }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={variants}>
        {apiRouteData.id}
        <br />
        {apiRouteData.title}
        <br />
        {apiRouteData.body}
        <br />
        <div dangerouslySetInnerHTML={{ __html: apiRouteData.contentHtml }} />
      </motion.div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));
  console.log(paths);

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return {
      props: { apiRouteData: data },
    };
  } catch (error) {
    console.log(error);
  }
};
