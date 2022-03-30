import React, { useState,useEffect } from 'react';
import { AppContext } from './global/Session';
import {Routes, Route, Link} from 'react-router-dom'


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import { LinkContainer } from "react-router-bootstrap"

import './styled/App.css'


// import views
import UsersShow from "./views/UsersShow";
import UserProfile from './views/UserProfile';
import PageNotFound from './views/PageNotFound';
import NewLogin from './components/Newlogin';
import Home from './views/Home';


function App() {

const [isAuthenticated, userHasAuthenticated] = useState(false);

return (
  <div className="App container py-3">
  <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
    <LinkContainer to="/">
      <Navbar.Brand className="font-weight-bold text-muted">
        FuseClock
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav activeKey={window.location.pathname}>
        <LinkContainer to="/signup">
          <Nav.Link>Signup</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


  <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/login' element={<NewLogin/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </AppContext.Provider>
  </div>
);
}

export default App;
