import React, { useState } from 'react';
import './App.css';
import DragAndDrop from './Components/DragAndDrop';
import DropCSV from './Components/DropCSV';
import Form from './Components/Form'

function App() {

  const [start, setStart] = useState(true)
  const [scratch, setScratch] = useState(false)
  const [fromCSV, setFromCSV] = useState(false)
  const [img, setImg] = useState(false)


  const onScratch = () => {
    setScratch(true);
    setFromCSV(false);
    setStart(false);
  }

  const onCSV = () => {
    setFromCSV(true);
    setScratch(false);
    setStart(false);
  }

  const toStep3 = () => {
    setFromCSV(false);
    setScratch(false);
    setStart(false);
    setImg(true);
  }

  return (
    <div className="App" id="App">
      { start ? <div> 
        <button onClick={onScratch}> Add from Scratch </button>
        <button onClick={onCSV}> Upload as CSV </button>
        <br/>
        </div> : ""}
      

      { fromCSV ? <DropCSV toStep3={toStep3} /> : ""}
      <br/>


      {scratch ? <Form toStep3={toStep3} /> : ""}
     

      { img ? <DragAndDrop /> : "" }
      
    </div>
  );
}

export default App;
