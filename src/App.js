import { Routes, Route } from 'react-router-dom'
import Home from "./views/Home";
import Post from './views/Post'

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<Post/>} />
      </Routes>
    </div>
   
  );
}

export default App;
