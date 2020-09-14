import React from 'react';
import logo from './logo.png';
import './App.css';
import {FaCheckCircle,AiOutlineFileProtect} from "react-icons/fa"
import {FaAngellist} from "react-icons/fa"
function App() {
  return (
    <div className="App">
     <img src={logo} alt="wev"  align='left'/>
    <div className="co">
      <h1> What is Coronavirus?</h1><br/>
    larem ipsum dolor sit amet,consextextur adipscing elit.Ex<br/>
      officia quas, modi sit eligendi numquam!<br/><br/>
     
      <FaCheckCircle size='20px' color='blue' /> lorem ipsum dolar sit amet<br/>
     <FaCheckCircle size='20px' color='blue'/>consectetur adipisicing elit<br/>
      <FaCheckCircle size='20px' color='blue'/>unde doloremqe<br/><br/><br/>
            <button>LEARN MORE</button><br/>
      <div className="last">
      
       <FaAngellist size='50px' color='blue'/><b>Protection</b>&emsp;&emsp;&emsp;&emsp; &emsp;&emsp; 
       <FaAngellist size='50px' color='blue'/><b>Prevention</b>&emsp;&emsp;&emsp;&emsp; &emsp;&emsp; 
       <FaAngellist size='50px' color='blue'/><b>Treatments</b>&emsp;&emsp;&emsp;&emsp; &emsp;&emsp; 
        <FaAngellist size='50px' color='blue'/><b>Symptoms</b> <br/>
       &emsp;&emsp; loremipsum dolor sit &emsp;&emsp;&emsp;&emsp;&emsp;loremipsum dolor sit&emsp;&emsp;&emsp;&emsp;&emsp; loremipsum dolor sit&emsp;&emsp;&emsp;&emsp;&emsp;loremipsum dolor sit 
    </div>
    </div>
    </div>
    
  );
}

export default App;
