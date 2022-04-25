import React from 'react'
import Title from './components/Title'
import Work from './components/Work'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function Home() {
  return (
    <div>
      <Title />
      <Work />
      <Projects />
      <Contacts />
    </div>
  );
}

export default Home;