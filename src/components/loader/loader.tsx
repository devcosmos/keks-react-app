import Layout from '../layout/layout';

function Loader(): JSX.Element {
  return (
    <Layout>
      <section className="error-page">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="loader"></div>
        </div>
      </section>
    </Layout>
  );
}

export default Loader;
