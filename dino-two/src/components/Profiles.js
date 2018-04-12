import React from 'react'

import SkillsList from './SkillsList'

class Profiles extends React.Component {


  showSkills = (event) => {
    let profile = event.target.parentNode.parentNode
    let skillsList = profile.childNodes[1]
    // console.log(skillsList.className)
    {skillsList.className === 'skills-container hidden' ? skillsList.className = 'skills-container' : skillsList.className = 'skills-container hidden'}
    
  }


  render() {
    const dinos = this.props.dinos.map(dino => {
      return (
        <li key={dino.name} onClick={this.showSkills}>
          <div className='profile-card'>
            <header className='profile-header'>
              <img src={dino.image} alt='profile' />
              <h2>{dino.name}</h2>
            </header>
            <SkillsList skills={dino.skills} />
          </div>
        </li>
      )
    })

    return (
      <main>
        <section id='profiles-container'>
          <h2>Profiles</h2>
          <ul id='profiles'></ul>
            {dinos}
        </section>
      </main>
    )
  }
}

export default Profiles