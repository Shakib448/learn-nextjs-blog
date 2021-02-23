import Layout from "../../components/Layout/layout";
import axios from "axios";

export default function Post({ apiRouteData }) {
  return (
    <Layout>
      {apiRouteData.id}
      <br />
      {apiRouteData.title}
      <br />
      {apiRouteData.body}
      <br />
      <div dangerouslySetInnerHTML={{ __html: apiRouteData.contentHtml }} />
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
