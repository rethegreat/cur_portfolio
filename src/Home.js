import React from 'react'
import Title from './components/Title/Title'
import Work from './components/Work'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function Home(props) {
  return (
    <div>
      <Title windowWidth={props.windowWidth}/>
      <Work windowWidth={props.windowWidth}/>
      <Projects windowWidth={props.windowWidth}/>
      <Contacts windowWidth={props.windowWidth}/>
    </div>
  );
}

export default Home;