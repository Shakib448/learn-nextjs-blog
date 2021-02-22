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
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    const apiRouteData = data;
    return {
      props: {
        apiRouteData,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
