import { NavLink } from 'react-router-dom'
import './style.css'


const Project = (props) => {
    return ( 
        <NavLink to={`/projectDom/${props.index}`}>
        <li className="project">
            <img src={props.project.img} alt="Project img" className="project__img"/>
            <h3 className="project__title">{props.project.title}</h3>
        </li> 
        </NavLink>
    );
}

export default Project