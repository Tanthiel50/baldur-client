import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import LoginForm from "../LoginForm";
import CategoryPage from "./CategoryPage";
import ArticleDetailPage from "../ArticleDetailPage";
import Admin from "../Admin";
import AddInterestPoint from "../admin/interestPoints/AddInterestPoints";
import InterestArticlesPage from "../admin/interestPoints/InterestArticlePage";



const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:categoryId" element={<CategoryPage />} />
      <Route path="/articles/:articleId" element={<ArticleDetailPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/admin/create-interest-point" element={<AddInterestPoint />} />
      <Route path="/admin/interest-articles" element={<InterestArticlesPage />} />
    </Routes>
  );
};

export default RouterOutlet;