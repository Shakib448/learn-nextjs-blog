import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout/layout";
import Head from "next/head";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg"
        width={150}
        height={150}
        alt="your image"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
