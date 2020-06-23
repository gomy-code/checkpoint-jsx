import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <>
    <center>
    <div style ={{ border: 'solid 1px black', 
    maxWidth: '100vw' }}>   
 
    <h1 className = "title red"> Votre nom ici </h1>   

        <br></br>   

          <img src = {'TV-UHD-UM70-4K-Resolution-Desktop.jpg'}/> <br></br> 

             <img src ={'TV-UHD-UM74-A-02-4K-Resolution-Mobile_v2 copy-1215a5.jpg'}/>   

  </div>   

  <video width = "320" height = "240" contrôles>   

      <source src = {'./Video courte mais drle.mp4'} type = "video / mp4"/> 

  </video>
  </center>
</>
  );
}

export default App;
