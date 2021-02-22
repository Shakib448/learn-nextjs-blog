import Layout from "../../components/Layout/layout";
import axios from "axios";
import remark from "remark";
import html from "remark-html";

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

export const getServerSideProps = async ({ query }) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    return {
      props: {
        apiRouteData: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
