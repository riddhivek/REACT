import { useState } from "react";
const Label = () => {
  const [count, setcount] = useState(0);
  const [label, setlabel] = useState();

  const storedata = (val) => {
    console.log(val.target.value);
    setcount(val.target.value);
    // setlabel(false);
  };

  return (
    <div className="mt-80 ml-[600px]">
      {label ? <h1 className="font-bold  mb-3 ">Data : {count}</h1> : null}
      <label className="bg-pink-500 hover:bg-pink-700 text-white mt-4 p-2 rounded-lg" onClick={() => setlabel(true)}>Store</label>
      <input type="text" onChange={storedata} placeholder="text" className="border border-black ml-3 p-3 focus:outline-none rounded-lg"></input>
    </div>
  );
};

export default Label;
