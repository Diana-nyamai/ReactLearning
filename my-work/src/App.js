import React from 'react';
import './App.css';
import ButtonON from './components/ButtonON';
//import Props from './components/Props';
import  { PropsInClass } from './components/PropsInClass';
import Timer from './components/Timer';
//import Increment1 from './components/Increment1';
//import Increment5 from './components/Increment5';
//import OnClickButton from './components/OnClickButton';

function App() {
  return (
    <div className="App">
      {/*<OnClickButton/>
         <Increment1/>
        <Increment5/>
         <Props name="diana" skill="react"/> 
         <PropsInClass name="phyllis" skill="python"/>
         */
      }
     <Timer/>
     <ButtonON/>
     
     </div>
  );
}

export default App;
