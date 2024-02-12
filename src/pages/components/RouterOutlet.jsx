import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import LoginForm from "../LoginForm";
import Dormir from "../Dormir";
import Boutiques from "../Boutiques";


const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dormir" element={<Dormir />} />
      <Route path="/boutiques" element={<Boutiques />} />
    </Routes>
  );
};

export default RouterOutlet;