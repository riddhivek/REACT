import { useEffect, useState } from "react"

const Use_Effect=()=> {
    const [string , setCount] = useState(0);

    useEffect(()=>{
        document.title=`hello i am riddhi ${string}`;
        console.log(string);
    });

    return (
        <div>
            <button onClick={()=> setCount((prevCount)=>prevCount+1)}>
            Click {string} times{" "}
            </button>
        </div>
    )
}

export default Use_Effect
