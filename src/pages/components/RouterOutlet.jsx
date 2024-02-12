import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import LoginForm from "../LoginForm";
import CategoryPage from "./CategoryPage";
import ArticleDetailPage from "../ArticleDetailPage";


const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/categories/:categoryId" element={<CategoryPage />} />
      <Route path="/articles/:articleId" element={<ArticleDetailPage />} />
    </Routes>
  );
};

export default RouterOutlet;