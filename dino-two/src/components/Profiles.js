import React from 'react'

import SkillsList from './SkillsList'

const Profiles = (props) => {
  const dinos = props.dinos.map(dino => {
    return (
      <li key={dino.name}>
        <div className='profile-card'>
          <header className='profile-header'>
            <img src={dino.image} />
            <h2>{dino.name}</h2>
          </header>
          <SkillsList skills={dino.skills} />
        </div>
      </li>
    )
  })

  return (
    <main>
       <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles"></ul>
          {dinos}
      </section>
    </main>
  )
}

export default Profiles