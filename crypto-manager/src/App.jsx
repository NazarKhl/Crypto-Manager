import { Layout } from "antd";
import AppHeader from "./assets/components/layout/AppHeader";
import AppSider from "./assets/components/layout/AppSider";
import AppContent from "./assets/components/layout/AppContent";
export default function App() {
  return (
    <>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    </>
  );
}
