import { useState } from "react";

function UploadFile(){
    const preset_key="";
    const cloud_name="";
    const [image , setImage]=useState();

    function handleFile(event){
        
    }
    return(
        <div className="d-flex justify-content bg-dark vh-100">
            <div className="w-25 bg-white mt-5 p-5">
                <input type="file" name="image" onChange={handleFile} />
                <br />
            </div>
        </div>
    )
}

export default UploadFile