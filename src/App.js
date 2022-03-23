import { Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage';
import Home from './views/Home';
import './App.css';
import { FuncGlobalContext } from './components/GlobalContext'

function App() {
  return (
    <FuncGlobalContext>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />

          <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
    </FuncGlobalContext >
  );
}

export default App;
