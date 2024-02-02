import { useState } from "react"

const Data = () =>{
    const [index,setIndex]= useState(0);

    function Previous(){
        setIndex(index - 1)
        console.log(index);

    }
    function Next(){
        setIndex(index + 1)
        console.log(index);
    }
    

    return(
        <div>
            <div className="h-96 w-96 bg-rose-500 m-auto text-center p-10">
                <button className="h-10 w-16 bg-white text-black" onClick={Previous}>Prev</button>
                <button className="h-10 w-16 bg-white ms-10 text-black" onClick={Next}>Next</button>
                {/* <button className="h-10 w-52 bg-white mt-20"></button> */}
            </div>
        </div>
    )
}

export default Data