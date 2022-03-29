import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/UserContext';

// import views
import UsersShow from "./views/UsersShow";
import UserProfile from './views/UserProfile';
import Post from './views/Post';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          
          <Route path='user/:userid' element={<UserProfile/>} />
          <Route path='/' element={<UsersShow/>} />
          <Route path='/post' element={<Post/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
