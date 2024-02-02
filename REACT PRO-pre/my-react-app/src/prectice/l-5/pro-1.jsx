const ClickOn = () => {
      
    function click(){
      alert("You take tea?");
        console.log("Yahh Sure");
    }

    const handleClick = () => {
      alert("You take coffee?");
         console.log("No");

    }


 return (
   <div>
     <h1 className="text-6xl">React onClick Events</h1>

     <button className="px-12 h-16 w-48 bg-purple-600 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={click}>Click</button>

     <button className="px-12 h-16 w-48 bg-purple-600 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={handleClick}>ClickMe</button>

   </div>
 )
}

export default ClickOn