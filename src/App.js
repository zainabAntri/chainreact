import React from "react";
import { useState } from "react";

function App() {
  const [color,setColor]= useState("olive")
  return (
    <div className="w-full h-screen duratio-100"
    style={{backgroundColor:color}}>
     
  <div className="fixed flex flex-wrap justify-center
   inset-x-0 px-2 bottom-12 ">
<div className="flex flex-wrap justify-center
 gap-3 shadow-lg bg-white px-3 py-1 rounded-3xl">

<button className=" outline-none px-2 py-1 rounded-full text-white"
style={{backgroundColor:"red"}}
onClick={()=>setColor("red")}
>Red</button>
<button className=" outline-none px-2 py-1 rounded-full text-white"
style={{backgroundColor:"green"}}
onClick={()=>setColor("green")}
>Green</button>
<button className=" outline-none px-2 py-1 rounded-full text-white"
style={{backgroundColor:"blue"}}
onClick={()=>setColor("navy")}
>Navy</button>
<button className=" outline-none px-2 py-1 rounded-full text-white"
style={{backgroundColor:"orange"}}
onClick={()=>setColor("orange")}
>Orange</button>
<button className=" outline-none px-2 py-1 rounded-full text-white"
style={{backgroundColor:"purple"}}
onClick={()=>setColor("purple")}
>Purple</button>
<button className=" outline-none px-2 py-1 rounded-full text-white"
style={{backgroundColor:"grey"}}
onClick={()=>setColor("grey")}
>Gray</button>
</div>
  </div>
    </div>
  );
}

export default App;
