import React from 'react';
import Map from '../Map';
import SideBlock from '../SideBlock'
import Header from '../Header'
import Footer from '../Footer'

import './style.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mapContent">
        <SideBlock />
        <Map/>
      </div>   
      {/* <Footer/>     */}
    </div>
  );
}

export default App;
