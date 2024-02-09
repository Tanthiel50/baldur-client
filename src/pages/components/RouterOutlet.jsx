import { Route, Routes } from "react-router-dom";
import Home from "../Home";

const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouterOutlet;