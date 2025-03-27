import { useParams } from 'react-router-dom'
import gitHubIcon from './../img/icons/gitHub-black.svg'
import BtnGitHub from './BtnGithub';

import projects from '../helpers/helper';

const ProjectDom = () => {

    const {id} = useParams() // параметр, который мы передали в projects/:{parameter}
    const project = projects[id]

    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />
                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    <BtnGitHub link="https://github.com" git={gitHubIcon} />
                </div>
            </div>
        </main>
    );
}

export default ProjectDom;