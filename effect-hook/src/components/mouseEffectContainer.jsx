import React, {useState, useEffect} from 'react'
import MouseEffectClass from './mouseEffectClass';
import MouseEffectHook from './mouseEffectHook';

function MouseEffectContainer() {
    const [display, setDisplay]=useState(true);

  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>toggleMouseDisplay</button>
      {
        display && <MouseEffectClass/>
        // display && <MouseEffectHook/>
      }
    </div>
  )
}

export default MouseEffectContainer

