import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';


interface User {
  authenticated: boolean;
}

interface AuthContextType {
  user: User;
  login: (token: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    authenticated:false
  });

  useEffect(() => {
    // Check if there is a stored access token in your preferred storage (localStorage, cookies, etc.)
    const storedToken = Cookies.get('access_token');

    if (storedToken) {
      setUser({ authenticated: true });
    }
  }, []);

  const login = (token: string) => {
    // Set the user as authenticated and store the token
    setUser({ authenticated: true });
    Cookies.set('access_token', token, { expires: 1 / 24 }); // expires in 1 hour
  };

  const logout = () => {
    // Clear the user state and remove the token
    setUser({ authenticated: false });
    Cookies.remove('access_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );



};

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

