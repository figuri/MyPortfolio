export default function Portfolio() {
    const projects = [
        {
            title: '4-Cast',
            description: 'This is a weather forecast app using front-end technologies',
            link: 'https://figuri.github.io/4-cast-app/',
            repoLink: 'https://github.com/figuri/4-cast-app',
            image: './public/project-images/4-cast-app.png'
        },
        {
            title: 'You-Shall-Not-Pass',
            description: 'This is a password generator using front-end technologies',
            link: 'https://figuri.github.io/YoushallnotPass/',
            repoLink: 'https://github.com/figuri/YoushallnotPass',
            image: './public/project-images/password-generator.png'
        },
        {
            title: 'Planit',
            description: 'This is a work day scheduler using front-end technologies',
            link: 'https://figuri.github.io/PLANIT/',
            repoLink: 'https://github.com/figuri/PLANIT',
        },
        {
            title: 'Hog Bloggin',
            description: 'This is a front-back end blog app.',
            link: '',
            repoLink: 'https://github.com/figuri/HogBloggin',
        },
        {
            title: 'Bemploy',
            description: 'this is the backend for a employee registry for an ecommmerce company',
            link: 'This is a backend application there is no site to visit but if you visit the github repo and read the readme you can see how to use it !',
            repoLink: 'https://github.com/figuri/Bemploy',
        }
    ]
    return (
      <section id='portfolio'>
        <h2 className="header">Portfolio</h2>
        <div className='projects'>
            {projects.map((project, index) => (
                <div className='project' key={index}>
                    <h3 className="project-name">{project.title}</h3>
                    <p className='project-description'>{project.description}</p>
                     <img className='project-image' src={project.image}/>
                    <div className='links'>
                        <a className="projectLink" href={project.link}>Visit Site</a>
                        <a className="projectLink" href={project.repoLink}>Visit Repo</a>
                    </div>
                </div>
            ))}
        </div>
      </section>
    )
};