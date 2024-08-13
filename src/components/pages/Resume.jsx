export default function Resume() {
  // list of my dev skills as an array
  const skills = [
    "JavaScript",
    "Python",
    "Django",
    "pandas",
    "HTML",
    "CSS",
    "React",
    "Node",
    "Express",
    "MySQL",
    "MongoDB",
    "Mongoose",
    "Sequelize",
    "ApolloGraphQL",
    "AWSec2, S3",
    "REST API",
  ];
  // list of my experiences as an array
  const experiences = [
    {
      title: "FreeLance Web Developer",
      description:
        "Assisted a small dev team to create the scaffolding for a new project. I was responsible for writing the API routes using python and Django. I made a very rudamentary front end only to test UI/UX. I also wrote the tests for the API routes. I finished the mvp within 2 days. I managed to supply the devs with a functional API that they went on to use for their larger projects. This scaffolding was used to import, download and upload csv files that contain python excecutables to the browser."
    },
    {
      title: "Freelance Software Developer",
      description: "Hired to create a webpage for a podcast homepage. Using a MERN stack I created a functional webpage with a responsive UI so users can interact with their favorite podcast."
    }
  ];
  // list of my education as an array
  const education = [
    {
      degree: "Full Stack Web Development",
      school: "University of California Berkeley Extension",
      year: "Graduated September 2023",
    },
    {
      degree: "High School Diploma",
      school: "Heritage High School",
      year: "Graduated June 2018",
    },
  ];
  // return the JSX for the Resume page
  return (
    <section id="resume">
      <h2 className="header">Resume</h2>
      {/** Skills */}
      <div className="resume">
        <div className="skills">
          <h3 className="title">Skills</h3>
          <ul className="skillList">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/** Experience */}
        <div className="experience">
          <h3>Experience</h3>
          {experiences.map((experience) => (
            <div key={experience.title}>
              <h4>{experience.title}</h4>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
        {/** Education */}
        <div className="education">
          <h3>Education</h3>
          {education.map((education) => (
            <div key={education.school}>
              <h4>{education.degree}</h4>
              <p>{education.school}</p>
              <p>{education.year}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='resume-download'>
        <a href='./public/pdf/samResume.md' download>Download Resume</a>
        </div>
    </section>
  );
}
