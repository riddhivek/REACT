
import React from "react";

const Count = ({text , count}) => {

     console.log(`Rendering ${text}`);
  return (
    <div>
          <div className="button">
               {text} - {count}
          </div>
    </div>
  )
}


export default React.memo(Count)