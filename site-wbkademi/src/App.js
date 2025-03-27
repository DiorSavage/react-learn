import './styles/main.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'

import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts'
import ProjectDom from './pages/ProjectDom';

import ScrollToTop from 'react-scroll-to-top' // прокрутка вверх при перемещении на другую страницу


const App = () => {
    return (
    <div className="App">
        <Router>
            <ScrollToTop smooth={true} />
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/projectDom/:id' element={<ProjectDom />} />
                <Route path='/' element={<Home />} />
            </Routes>
            {/* <Home /> */}
            {/* {<Projects />} */}
            {/* {<Contacts />} */}
            {/* <ProjectDom /> */}
            <Footer />
        </Router>
    </div>
    );
}

export default App;

// navbar, footer есть везде, это одинаковый код для всех компонентов

// /projectDom/:id - для идентифицирования одинаковых страниц с одинаковым контентом