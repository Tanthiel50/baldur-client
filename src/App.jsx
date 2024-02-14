import React from "react";
import "./App.scss";
import RouterOutlet from "../src/pages/components/RouterOutlet";
import { UserProvider } from "./context/UserProvider";
import Layout from "./pages/components/layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <UserProvider>
          <Layout>
          <RouterOutlet />
          </Layout>
      </UserProvider>
      <ToastContainer position="bottom-right" />
    </>
  );
}
export default App;
