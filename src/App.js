import React from 'react'
import Home from './Home'
import AboutMe from './About_me_page/aboutMe'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <Helmet>  
            <meta charSet="utf-8" />
            <title>Boaz Cheung</title>
        </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
