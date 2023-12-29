import { useRef } from "react";

const Useref =()=>{

    const getname=useRef(null)
    const btnhandle=()=>{

        getname.current.value="500";
        getname.current.style.color="red";
    }
    return(
        <>

        <input type="text" name="" ref={getname} />
        <button onClick={btnhandle}>click</button>

        </>
    )
}
export default Useref;