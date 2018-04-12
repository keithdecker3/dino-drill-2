import React from 'react'

const SkillsList = (props) => {
  const skills = props.skills.map(skill => {
    return (
      <li key={skill}>{skill}</li>
    )
  })

  return (
    <section className='skills-container hidden' >
      <h4>Skills</h4> 
      <ul className='skills-list'>
        {skills} 
      </ul> 
    </section> 
  )
}

export default SkillsList