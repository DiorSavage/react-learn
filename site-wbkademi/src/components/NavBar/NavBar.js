import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode'
import {NavLink} from 'react-router-dom'
import './style.css'

const NavBar = () => {

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to={'/'}>
                        <strong className='logo'>Freelancer</strong> portfolio
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to={'/'} className={(isActive) => {
                                return isActive ? activeLink : normalLink
                            }}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to={'/projects'} className={(isActive) => {
                                return isActive ? activeLink : normalLink
                            }}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to={'/contacts'} className={(isActive) => {
                                return isActive ? activeLink : normalLink
                            }} > 
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar