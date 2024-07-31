import { Layout, Select, Space, Button, Modal, Drawer } from "antd";
import { useEffect, useState } from "react";
import { useCrypto } from "../../context/crypto-context";
import AddAssetForm from "./AddAssetForm";
import CryptoInfoModal from "./CryptoInfoModal";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const keyPress = (event) => {
      if (event.key === "/") {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener("keypress", keyPress);
    return () => document.removeEventListener("keypress", keyPress);
  }, []);

  const handleSelect = (value) => {
    setCoin(crypto.find((c) => c.id === value));
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const { crypto } = useCrypto();

  return (
    <>
      <Layout.Header style={headerStyle}>
        <Select
          onSelect={handleSelect}
          onClick={() => setSelect((prev) => !prev)}
          open={select}
          mode="multiple"
          style={{
            width: 250,
          }}
          value="Pres / to open"
          options={crypto.map((coin) => ({
            label: coin.name,
            value: coin.id,
            icon: coin.icon,
          }))}
          optionRender={(option) => (
            <Space>
              <img
                style={{ width: 20 }}
                src={option.data.icon}
                alt={option.data.label}
              />
              {option.data.label}
            </Space>
          )}
        />
        <Button onClick={() => setOpen(true)} type="primary">
          Add Asset
        </Button>

        <Modal open={modal} onCancel={handleCancel} footer={null}>
          <CryptoInfoModal coin={coin} />
        </Modal>

        <Drawer
          width={600}
          title="Basic Drawer"
          onClose={() => setOpen(false)}
          open={open}
        >
          <AddAssetForm/>
        </Drawer>
      </Layout.Header>
    </>
  );
}
