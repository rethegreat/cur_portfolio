import React from 'react'
import Title from './components/Title'
import Work from './components/Work'
import Helmet from 'react-helmet';

function App() {
  return (
    <div>
        <Helmet>  
            <meta charSet="utf-8" />
            <title>Boaz Cheung</title>
        </Helmet>
      <Title />
      <Work />
    </div>
  );
}

export default App;
