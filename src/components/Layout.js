import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Aside from './Aside';


const Layout = ({ children }) => {
    const location = useLocation();

  return (
    <div>
        {(location.pathname !== "/" &&
        location.pathname !== "/login"&& 
        location.pathname !== "/signup"&& 
        location.pathname !== "/logout") ? 
        <Aside /> : null}


        {children}
    </div>
  )
}

export default Layout