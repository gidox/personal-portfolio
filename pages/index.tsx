import Layout from '../components/Layout';

const IndexPage = (): JSX.Element => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">NextJs</span>
          <span className="block text-indigo-600">gidox boilerplate.</span>
        </h2>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
