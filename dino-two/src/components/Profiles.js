import React from 'react'

import SkillsList from './SkillsList'

class Profiles extends React.Component {


  showSkills = (event) => {
    let profile = event.target.parentNode.parentNode
    if (profile.className === 'profile-card') {
      let skillsList = profile.childNodes[1]
      {skillsList.className === 'skills-container hidden' ? skillsList.className = 'skills-container' : skillsList.className = 'skills-container hidden'}
    }
  }


  render() {
    const dinos = this.props.dinos.map(dino => {
      return (
        <li key={dino.name}>
          <div className='profile-card'>
            <header className='profile-header' onClick={this.showSkills}>
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
          <ul id='profiles'>{dinos}</ul>
        </section>
      </main>
    )
  }
}

export default Profiles