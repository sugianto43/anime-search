import { Input, Layout } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content } = Layout;

const LayoutPage = () => {
  const pathname = useLocation().pathname;
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" className="text-3xl text-white!">
          Anime Search
        </Link>
        {pathname !== '/search' && (
          <Link
            style={{
              height: 32,
            }}
            to="/search"
          >
            <Input.Search
              className="cursor-pointer"
              placeholder="Search anime..."
              style={{ width: 300 }}
              readOnly
            />
          </Link>
        )}
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default LayoutPage;
