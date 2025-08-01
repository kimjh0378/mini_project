import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import HomePage from './page/HomePage';
import Protein from './page/protein';
import Routine from './page/Routine';
import Contest from './page/Contest';
import Logo from './page/logo';
import HammerStrength from './page/HammerStrength';
import LifeFitness from './page/LifeFitness';
import Panatta from './page/Panatta';
import Cybex from './page/Cybex';

function App() {

  return (
    <div className='body'>
      
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='food' element={<Protein />} />
      <Route path='contest' element={<Contest />}/>
      <Route path='logo' element={<Logo />}/>
      <Route path='hammer' element={<HammerStrength />}/>
      <Route path='life' element={<LifeFitness />}/>
      <Route path='panatta' element={<Panatta />}/>
      <Route path='cydex' element={<Cybex />}/>
    </Routes>
    
   

    </div>
  )
}

export default App;
