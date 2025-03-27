import React from 'react'
import { NavLink, Route, BrowserRouter, Routes } from 'react-router-dom'
import styles from './App.module.css'
import routesConfig from '../../routes/routesConfig'

import { Header } from '../../components/Header/Header'
import People from '../PeoplePage/People'
import { Home } from '../Home/Home'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'

export const App = () => {
  return (
    <BrowserRouter>
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" exact="true" element={<Home/>} />
        <Route path='/people' exact="true" element={<People/>}/>
        <Route path='*' exact='false' element={<NotFoundPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

{/* 
<>
    <BrowserRouter>
      <Routes>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/people" exact>
        Peoplee
      </NavLink>

      <Route path="/" exact component={Home}></Route>
      <Route path="/people" exact component={People}></Route>

      <People />
      </Routes>
    <BrowserRouter/>
    </> */}

  //   {routesConfig.map((route, index) => {
  //     return (
  //         <NavLink 
  //             to={route.path}
  //             exact={route.exact}
  //             className='header__text'
  //             element={route.element}
  //             key={index}
  //         >
  //             {route.title} <br />
  //         </NavLink>
  //     )
  // })}