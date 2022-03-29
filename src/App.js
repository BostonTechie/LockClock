import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { UserProvider } from './components/UserContext';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './styled/App.css'


// import views
import UsersShow from "./views/UsersShow";
import UserProfile from './views/UserProfile';
import Post from './views/Post';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preference';
import PageNotFound from './views/PageNotFound';
import Login from './components/Login';

function setToken(userToken) {
}

function getToken() {
}

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <UserProvider>
    <div className="wrapper">
      <h1>Application</h1>
      <Routes>
          
          <Route path="/dashboard" element={<Dashboard/>}/>
           
          <Route path="/preferences" element={<Preferences/>}/>
        
      </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
