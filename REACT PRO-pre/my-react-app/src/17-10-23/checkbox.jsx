import { useState } from "react";

export default function Checkbox() {
  const [Checked, setChecked] = useState();
  const checkHandler = () => {
    setChecked(!Checked);
  };

  return (
    <div className="mt-60 ml-[600px]">
      <input className="h-5 w-5 " type="checkbox" id="checkbox" checked={Checked} onClick={checkHandler}/>
      <p className="text-2xl font-semibold mt-3">
        {Checked ? " You are Clicked !" : "You Don't Clicked !"}
      </p>
    </div>
  );
};


