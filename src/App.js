import React from 'react'
import Home from './Home'
import Helmet from 'react-helmet'




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
            <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Boaz Cheung</title>
        </Helmet>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home windowWidth={windowWidth} />} />
          <Route path='/about' element={<AboutMe windowWidth={windowWidth} />} />
        </Routes>
      </Router> */}
      <Home windowWidth={windowWidth} />
    </div>
  );
}

export default App;
