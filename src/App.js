import React from 'react'
import Home from './Home'
import AboutMe from './About_me_page/aboutMe'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  const [windowWidth, setWindowWidth] = React.useState(0)

  React.useEffect(() => { 

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => 
      window.removeEventListener('resize',updateDimensions);
   }, [])
  
  const updateDimensions = () => {
    const width = window.innerWidth
     setWindowWidth(width)
  }

  return (
    <div>
        <Helmet>  
            <meta charSet="utf-8" />
            <title>Boaz Cheung</title>
        </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<Home windowWidth={windowWidth} />} />
          <Route path='/about' element={<AboutMe windowWidth={windowWidth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
