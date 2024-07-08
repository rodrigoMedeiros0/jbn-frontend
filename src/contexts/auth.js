import React, { createContext, useState, useEffect, useCallback } from "react";
//components
import BannerCentalDeVendas from "../componentes/BannerCentalDeVendas";
import Header from "../componentes/Header";
import Sidebar from "../componentes/Sidebar";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(false);
 
  const login = useCallback((email, token) => {
    setToken(token);
    setUser(email);

    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(email));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = JSON.parse(localStorage.getItem("token"));

    if (storedUser && storedToken) {
      setUser(storedUser) 
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, token }}
    >
      <header>
        {!user && <BannerCentalDeVendas />}
        {!user && <Header />}
        {user && <Sidebar />}
      </header>
      {children}
    </AuthContext.Provider>
  );
};
