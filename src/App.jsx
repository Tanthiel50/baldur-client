import React from "react";
import "./App.scss";
import RouterOutlet from "../src/pages/components/RouterOutlet";
import { UserProvider, useUserContext } from "./context/UserProvider";

function App() {
  return (
    <>
        <UserProvider>
          <RouterOutlet />
      </UserProvider>
    </>
  );
}
export default App;
