import { Spin } from "antd";

// eslint-disable-next-line react/prop-types
const Loading = ({ children, isLoading, deday = 200 }) => {
  return (
    <Spin spinning={isLoading} delay={deday}>
      {children}
    </Spin>
  );
};

export default Loading;