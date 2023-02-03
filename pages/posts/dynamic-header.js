import Head from 'next/head';
import Link from 'next/link';
import { DynamicHeader } from '../../components/DynamicHeader';
// import { StaticHeader } from '../../components/StaticHeader';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>Dynamic Header</title>;
      </Head>
      <h1>Dynamic Header</h1>
      <DynamicHeader />
      {/* <StaticHeader /> */}
      <p>Welcome to Dynamic Header post!</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
    </>
)
}