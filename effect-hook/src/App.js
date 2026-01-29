import './App.css';
import CounterEffectClass from './components/counterEffectClass';
import CounterEffectHook from './components/counterEffectHook';
import FetchData from './components/fetchData';
import MouseEffectContainer from './components/mouseEffectContainer';
import React, {useState} from 'react';

function App() {
      const [counterDisplay, setCounterDisplay]= useState(true);
  return (
    <div className="App">
      <h2>useEffect for mount,update&unmount</h2>
      <button onClick={()=>setCounterDisplay(!counterDisplay)}>toggleCounterDisplay</button>
      <br/>
      {
        // counterDisplay && <CounterEffectClass/>
        // counterDisplay && <CounterEffectHook/>
      }
      <br/><br/>

      <h2>useEffect for mount&unmount</h2>
      {/* <MouseEffectContainer></MouseEffectContainer> */}
      <br/><br/>

      <h2>fetch data using useEffect</h2>
      <FetchData></FetchData>
      <br/><br/>

    </div>
  );
}

export default App;
