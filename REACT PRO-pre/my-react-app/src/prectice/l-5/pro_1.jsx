
const Click1 = ({tea , coffee}) => {
    return(
         <button className='button' onClick={() => alert(tea)}>{coffee}</button>
    );
}

const ClickOn5 = () => {

 return (
   <div>
     <h1 className='text-6xl'>Reading props in event handlers</h1>
     <Click1 tea="yahh sure!">Play</Click1>
     <Click1 tea="no!">Upload</Click1>
   </div>
 )
}

export default ClickOn5