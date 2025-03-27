import Project from '../components/project/Project'

import projects from '../helpers/helper';


const Projects = () => {


    return ( 
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    
                    { projects.map((proj, index) => {
                        return (
                            <Project 
                                key={index} 
                                project={proj} 
                                index={index}
                            /> // такая практика с key - плохая, в будущем лучше сразу делать для каждого в массиве в объектах id, а потом для key присваивать id
                        )
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects
