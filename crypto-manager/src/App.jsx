import AppLayout from "./assets/components/layout/AppLayout";
import { CryptoContextProvider } from "../src/assets/context/crypto-context";

export default function App() {
  return (
    <>
      <CryptoContextProvider>
        <AppLayout />
      </CryptoContextProvider>
    </>
  );
}
