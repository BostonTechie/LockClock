import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/UserContext';

// import views
import Home from "./views/Home";
import Post from './views/Post';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/post' element={<Post/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
