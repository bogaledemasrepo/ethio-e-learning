import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
const AuthProvider = (probs) => {
  const [isLoged, setIsLoged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoged, setIsLoged }}>
      {probs.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
