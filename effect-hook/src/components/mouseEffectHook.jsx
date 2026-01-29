import React, {useState, useEffect} from 'react'

function MouseEffectHook() {
    const [x, setX]=useState(0);
    const [y, setY]=useState(0);

    const updateMouseCoordinates= (e)=>{
        console.log("mousemove event...");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("set mousemove eventListener...");
        window.addEventListener("mousemove", updateMouseCoordinates);

        return ()=>{
            console.log("mouse functional component will unmount...");
            window.removeEventListener("mousemove", updateMouseCoordinates);
        }
    }, []);

  return (
    <div>
      X- {x}   ,   Y-{y}
    </div>
  )
}

export default MouseEffectHook
