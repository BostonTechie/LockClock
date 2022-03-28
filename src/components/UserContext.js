import { createContext, useState, useEffect } from "react";
import axios from 'axios'



const UserContext = createContext();

export const UserProvider = ({ children }) => {


    const [userEmail, setUserEmail] = useState([])
    const [userPass, setUserPass] = useState([])
  
    
    return (
    <UserContext.Provider
      value={{
      
   
          userEmail, setUserEmail,
          userPass, setUserPass,
      

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;