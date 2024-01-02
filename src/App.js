
import './App.css';
import {useMemo, useState} from 'react';
import Useref from './Useref';

function App() {

const [count,setcount]=useState(0);
const [item,setitem]=useState(0);


const memohook = useMemo (() => {
  console.log("CNT ="+(count*10));
  return count*count;
},[count])
  return (
   <>
   <h1>use_memo heading</h1>
   <h2>Counter:{count}</h2>
   <h2>item:{item}</h2>
   <h2>useMemo:{memohook}</h2>
   <button onClick={()=>setcount(count+1)}>count update</button>
   <button onClick={()=>setitem(item+1)}>item update</button>
   <br></br>
<br></br>
==useref==========<br></br>
   <Useref></Useref>
   </>

   
  );
}

export default App;
