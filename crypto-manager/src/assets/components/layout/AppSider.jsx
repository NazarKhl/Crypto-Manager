import { Layout } from "antd";
import { Card } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

export default function AppSider() {
  return (
    <>
      <Layout.Sider width="25%" style={siderStyle}>
        <Card></Card>
      </Layout.Sider>
    </>
  );
}
