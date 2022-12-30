import { useState } from 'react';
import './App.css';
import Form from "./components/Form.js";
import TimeWall from "./components/Time/TimeWall"

function App() {
  const time = new Date();
  const youtTimeZone = (-time.getTimezoneOffset()) / 60;
  const mainZone = {
      name: "Your Locate",
      timeZone: "GMT+"+youtTimeZone
  }

  const [timeZones, setTimeZone] = useState([mainZone]);

  const addtimeZone = zone => {
    let obj = timeZones.find(z => z.name === zone.name);
    if(!obj)
      setTimeZone([...timeZones, zone]);
  }
  const deltimeZone = zone => {
    setTimeZone(timeZones.filter(z => z.name !== zone));
  }
  return (
    <div className="App">
      <Form func={addtimeZone}/>
      <TimeWall zones={timeZones} currentZone={youtTimeZone} func={deltimeZone}/>
    </div>
  );
}

export default App;
