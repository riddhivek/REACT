import React from "react";

const Title = () => {
    console.log('Rendering Title');
     return(
        <>
            <div className="">
                <h1 className="text-2xl font-semibold">Use CallBack Hook</h1>
                <h1 className="text-2xl font-semibold">Tea Price</h1>
            </div>
        </>
     )
}

export default React.memo(Title)