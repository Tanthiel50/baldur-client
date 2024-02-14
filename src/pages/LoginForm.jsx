import React, { useState, useContext } from 'react';
import { useUserContext } from '../context/UserProvider';
import './LoginForm.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useUserContext(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials.email, credentials.password);
    } catch (error) {
      console.error('Erreur de connexion', error);

    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={event => setCredentials({ ...credentials, email: event.target.value })}
          required
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={event => setCredentials({ ...credentials, password: event.target.value })}
          required
        />
        <button type="submit" className="login-button">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
