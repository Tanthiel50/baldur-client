import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import LoginForm from "../LoginForm";
import CategoryPage from "./CategoryPage";


const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/categories/:categoryId" element={<CategoryPage />} />
    </Routes>
  );
};

export default RouterOutlet;