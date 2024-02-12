import React from "react";
import "./App.scss";
import RouterOutlet from "../src/pages/components/RouterOutlet";
import { UserProvider, useUserContext } from "./context/UserProvider";
import Layout from "./pages/components/layout/Layout";

function App() {
  return (
    <>
        <UserProvider>
          <Layout>
          <RouterOutlet />
          </Layout>
      </UserProvider>
    </>
  );
}
export default App;
