import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState('')

//   const handleLogin = (loginToken,name) => {
//     //  api request to reqres.in for the token
   
//     // console.log(data)
//     // axios.post("https://reqres.in/api/login",data)
//     // .then(({data}) => {
//     //   setToken(data.token);
//     // })
//     // .catch((error) => {
//     //   console.log(error);
//     // })

//     setToken(loginToken)
//     setUserName(name)
//   };


  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
    
  };

  const value = {setUserName, setToken, handleLogout, token, userName };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };