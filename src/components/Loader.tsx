import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
