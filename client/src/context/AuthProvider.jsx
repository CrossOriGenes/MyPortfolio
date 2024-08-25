import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedJwt = localStorage.getItem("token");
    if (storedJwt === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    setToken(storedJwt);
    // console.log("token", token);
  }, []);

//   useEffect(() => {
//     isTokenVerified().then((data) => {
//       console.log(data);
//       if (!data) {
//         logout();
//       }
//     });
//   }, []);

  function login(token) {
    console.log("inside login");
    if (token) {
      setIsAuthenticated(true);
      setToken(token);
    }
    localStorage.setItem("token", token);
  }

  function logout() {
    console.log("inside logout");
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("token");
  }

//   async function isTokenVerified() {
//     try {
//       const token = localStorage.getItem("token");
//       // console.log(token)
//       const response = await fetch("http://localhost:8000/user/validateUser", {
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const result = await response.json();
//       console.log(result.msg);

//       return result.verified;
//     } catch (error) {
//       console.log(error);
//     }
//   }

  const authValue = {
    isAuthenticated,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
