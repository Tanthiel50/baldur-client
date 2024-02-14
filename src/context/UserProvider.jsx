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
	//   setAxiosAuthToken(token);
	  setUser({ email, token }); // Vous pouvez stocker l'email dans l'état de l'utilisateur si nécessaire
	} catch (error) {
		console.error('Erreur de connexion', error.response ? error.response.data : error);
	}
  };

  // Fonction pour se déconnecter
  const logout = () => {
    localStorage.removeItem('token'); // Effacez le token de localStorage
    // setAxiosAuthToken(null); // Effacez le token de la configuration Axios
    setUser(null); // Effacez l'état de l'utilisateur
  };

  // Effet pour initialiser l'état de connexion à partir du stockage local
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
    //   setAxiosAuthToken(token);
      // Validez le token avec le serveur
      axios.get('http://127.0.0.1:8000/api/security/validate-token')
        .then(response => {
          // Si le token est toujours valide, vous pouvez mettre à jour l'état de l'utilisateur
          setUser({ token }); // Mettez à jour avec des informations supplémentaires si nécessaire
        })
        .catch(error => {
          // Si le token n'est pas valide
          console.error('Token invalide ou expiré', error);
          logout(); 
        });
    }
  }, []);


  const authentification = async () => {
    try {
      const response = await axios.get("/me");
      setUser(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur', error);
      logout(); 
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
