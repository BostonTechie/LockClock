//import configs
import React, { useState, useEffect } from "react";
import { AppContext } from "./global/Session";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

// import views & styles
import UsersShow from "./views/UsersShow";
import UserProfile from "./views/UserProfile";
import PageNotFound from "./views/PageNotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./views/Home";
import Aside from "./components/Aside";
import Logout from "./components/Logout";
import Timesheet from "./views/Timesheet";
import "./styled/css/App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [apiData, setApiData] = useState()

  return (
    <div>
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
            <LinkContainer to="/logout">
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated,apiData,setApiData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timesheet" element={<Aside />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/show" element={<UsersShow />} />
          <Route path="/profile/:userid" element={<UserProfile />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
