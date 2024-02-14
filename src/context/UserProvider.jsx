// UserProvider.jsx
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setAxiosAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  // Fonction pour se connecter et obtenir le token
  const login = async (email, password) => {
    try {
      const response = await axios.post('/security/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAxiosAuthToken(token);
      authentification();
      setUser({ email, token }); // Pour récupérer les données utilisateur et définir l'état
    } catch (error) {
      console.error('Erreur de connexion', error.response ? error.response.data : error);
    }
  };

  // logout function
  const logout = () => {
	console.log('Déconnexion');
    localStorage.removeItem('token'); // Effacez le token de localStorage
    setAxiosAuthToken(null); // Effacez le token de la configuration Axios
    setUser(null); // Effacez l'état de l'utilisateur
  };


  // Effet pour initialiser l'état de connexion à partir du stockage local
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAxiosAuthToken(token);
      authentification(); // Appellez cette fonction pour initialiser l'état de l'utilisateur
    }
  }, []);


  const authentification = async () => {
    try {
      const response = await axios.get("/me");
      setUser(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur', error);
    //   logout(); 
    }
  };

//   console.log({ user, login, logout, authentification });
  return (
    <UserContext.Provider value={{ user, setUser, login, logout, authentification }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
