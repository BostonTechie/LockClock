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
import useToken from './components/useToken';


// import views
import UsersShow from "./views/UsersShow";
import UserProfile from './views/UserProfile';
import Post from './views/Post';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preference';
import PageNotFound from './views/PageNotFound';
import Login from './components/Login';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
  console.log("here is user token", userToken)
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
  console.log("here is user token", userToken)
}

function App() {
  const { token, setToken } = useToken();
  
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
          <Route path='/:userid' element={<UserProfile/>} />
          <Route path='user/:userid' element={<UserProfile/>} />
          <Route path='/show' element={<UsersShow/>} />
          <Route path='/post' element={<Post/>} />
          {/* <Route path="*" element={<PageNotFound/>}/> */}
                  
      </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
