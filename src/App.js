import React from 'react'; 
import './App.css';
import logo from './logo.svg';  
import ApiComponent from './ApiComponent';
 
 
 

function App() { 

  const myStyle = {
    framework: "white",
    backgroundframework: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  return (
    <>
    <div className="App">
{/*       <header className="App-header">
      <h1 style={myStyle}>Wecome to my site, a developer's workshop!</h1> 
        <img src={logo} className="App-logo" alt="logo" />  
      </header> */}
      
        <main>  
          <ApiComponent />
        </main>
         
    </div>
    </>
  );
}

export default App;
