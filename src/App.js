import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/UserContext';

// import views
import UsersShow from "./views/UsersProfile";
import UserProfile from './views/UsersShow copy';
import Post from './views/Post';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<UsersShow/>} />
          <Route path='/:userid' element={<UserProfile/>} />
          <Route path='/' element={<UsersShow/>} />
          <Route path='/post' element={<Post/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
