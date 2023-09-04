export default function Resume() {
  // list of my dev skills as an array
  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node",
    "Express",
    "MySQL",
    "MongoDB",
    "Mongoose",
    "Sequelize",
    "GraphQL",
    "Apollo",
    "REST API",
  ];
  // list of my experiences as an array
  const experiences = [
    {
      title: "None",
      description:
        " I am looking forward to my first ever job in the tech industry.",
    },
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
        <a href='./public/pdf/Sam-resume.pdf' download>Download Resume</a>
        </div>
    </section>
  );
}
