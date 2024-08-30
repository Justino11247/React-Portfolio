function Resume() {
  //front end skills
  const frontEnd = ["HTML", "CSS", "JavaScript", "Web APIs", "OOP", "React",];

  // back end skills
  const backEnd = ["Express", "SQL", "ORM", "MVC", "NoSQL", "PWA"];

  return(
    <div>
      <h1>Resume</h1>

        <div>
          <h2>Front-End Skills</h2>
          <ul> {/* Pull Front end skills into a list */}
            {frontEnd.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Back-End Skills</h2>
          <ul>{/* Pull back end skills into a list */}
            {backEnd.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Resume Section Here */}
        <div> 
          
        </div>
    </div>
  )
}

export default Resume;