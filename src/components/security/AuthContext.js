import { createContext, useContext, useState } from "react";

//creating a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//share the created context with other compnents
export default function AuthProvider({ children }) {
  //put some state in context

  const [isAuthenticated, setAuthenticated] = useState(false);

  function login(username, password) {
    if (username === "in28minutes" && password === "dummy") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
