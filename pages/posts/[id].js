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

Post.getInitialProps = async (context) => {
  try {
    const { id } = context.query;
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return {
      apiRouteData: data,
    };
  } catch (error) {
    console.log(error);
  }
};
