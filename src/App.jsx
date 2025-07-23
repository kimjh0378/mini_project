import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import HomePage from './page/HomePage';
import Protein from './page/protein';
import Routine from './page/Routine';
import Contest from './page/Contest';

function App() {

  return (
    <div>
      
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='food' element={<Protein />} />
      <Route path='rutin' element={<Routine />} />
      <Route path='contest' element={<Contest />}/>

    </Routes>
    
   

    </div>
  )
}

export default App;
