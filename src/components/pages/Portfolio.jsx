export default function Portfolio() {
    const projects = [
        {
            title: 'Weather forecast app',
            description: 'This is a weather forecast app using front-end technologies',
            link: 'https://figuri.github.io/4-cast-app/',
            repoLink: 'https://github.com/figuri/4-cast-app',
        },
        {
            title: 'Password Generator',
            description: 'This is a password generator using front-end technologies',
            link: 'https://figuri.github.io/YoushallnotPass/',
            repoLink: 'https://github.com/figuri/YoushallnotPass',
        },
        {
            title: 'Work Day Scheduler',
            description: 'This is a work day scheduler using front-end technologies',
            link: 'https://figuri.github.io/PLANIT/',
            repoLink: 'https://github.com/figuri/PLANIT',
        },
        {
            title: 'Tech Blog',
            descripttion: 'this is a tech blog that utilizes both front-end and back-end technologies',
            link: '',
            repoLink: 'https://github.com/figuri/HogBloggin',
        },
        {
            title: 'E-Commerce Back End',
            description: 'this is the backend for a employee registry for an ecommmerce company',
            link: 'This is a backend application there is no site to visit but if you visit the github repo and read the readme you can see how to use it !',
            repoLink: 'https://github.com/figuri/Bemploy',
        }
    ]
    return (
      <section id='portfolio'>
        <h2>Portfolio</h2>
        <div className='projects'>
            {projects.map((project, index) => (
                <div className='project' key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='links'>
                        <a href='{project.link}'>Visit Site</a>
                        <a href='{project.repoLink}'>Visit Repo</a>
                    </div>
                </div>
            ))}
        </div>
      </section>
    )
};