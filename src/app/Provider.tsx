import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { ConfigProvider } from 'antd';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              bodyPadding: 16,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ReduxProvider>
  );
};

export default Provider;
