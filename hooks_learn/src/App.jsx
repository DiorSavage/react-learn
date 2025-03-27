import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import styles from './App.module.scss'

import { Home } from './components/Home/Home';
import { UseState } from './components/Hooks/UseState/UseState';
import { UseEffect } from './components/Hooks/UseEffect/UseEffect';
import { UseRef } from './components/Hooks/UseRef/UseRef'
import { UseLC } from './components/Hooks/UseLS/UseLC';
import { UseLocation } from './components/Hooks/UseLocation/UseLocation';
import { UseContext } from './components/Hooks/UseContext/UseContext';
import { UseReducer } from './components/Hooks/UseReducer/UseReducer';
import { UseCB } from './components/Hooks/UseCB/UseCB';
import { UseMemo } from './components/Hooks/UseMemo/UseMemo';
import { UseQP } from './components/Hooks/UseQP/UseQP'
import { UseMatch } from './components/Hooks/UseMatch/UseMatch'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/state' element={<UseState></UseState>} />
        <Route path='/effect' element={<UseEffect></UseEffect>} />
        <Route path='/ref' element={<UseRef></UseRef>} />
        <Route path='/localstorage' element={<UseLC></UseLC>} />
        <Route path='/location' element={<UseLocation></UseLocation>} />
        <Route path='/context' element={<UseContext></UseContext>} />
        <Route path='/reducer' element={<UseReducer></UseReducer>} />
        <Route path='/memo' element={<UseMemo></UseMemo>} />
        <Route path='/callback' element={<UseCB></UseCB>} />
        <Route path='/queryparams' element={<UseQP></UseQP>} />
        <Route path='/match' element={<UseMatch></UseMatch>} />
      </Routes>
      <NavLink className={styles.home_button} to='/'>To Home</NavLink>
    </Router>
  );
}

export default App;
