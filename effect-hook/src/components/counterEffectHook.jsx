import React, {useState, useEffect} from 'react'

function CounterEffectHook() {
    let [count, setCount]=useState(0);
    let [name, setName]=useState("semon");

    useEffect(()=>{
        console.log("updating counter");
        document.title=`clicked ${count} times`;
    }, [count]);

    useEffect(()=>{
        const interval= setInterval(()=>{
          setCount(prevCount=>prevCount+1);
        },1000);

        return ()=>{
          clearInterval(interval);
        }
    }, []); //called after each time the component render

  return (
    <>
      <input name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
    </>
  )
}

export default CounterEffectHook
