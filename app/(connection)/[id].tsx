import { Layout, PrivateRoute } from '../../components';
import { ConnectionDetailView } from '../../packages';

const ConnectionDetail = () => {
  return (
    <Layout overflowY={false}>
      <PrivateRoute>
        <ConnectionDetailView />
      </PrivateRoute>
    </Layout>
  );
};

export default ConnectionDetail;
