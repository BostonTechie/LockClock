import React, { useState,useEffect } from 'react';
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
import './styled/App.css'


// import views
import UsersShow from "./views/UsersShow";
import UserProfile from './views/UserProfile';
import Post from './views/Post';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preference';
import PageNotFound from './views/PageNotFound';
import Login from './components/Login';



function App() {
const { token, setToken } = useToken();

useEffect(() => {
  const token = sessionStorage.getItem('token');
  console.log('here is token from session', token)
})


  // if(!token) {
  //   return <Login setToken={setToken} />
  //  }


  return (
    <UserProvider>
    <div className="wrapper">
      <h1>Application</h1>
      <Routes>
          <Route path="/login" element={<Login setToken={setToken}/>}/>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/preferences" element={<Preferences/>}/>
          <Route path='/:userid' element={<UserProfile/>} />
          <Route path='user/:userid' element={<UserProfile/>} />
          <Route path='/show' element={<UsersShow/>} />
          <Route path='/post' element={<Post/>} /> 
          <Route path="*" element={<PageNotFound/>}/> 
                  
      </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
