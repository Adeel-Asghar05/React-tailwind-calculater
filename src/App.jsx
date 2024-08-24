
import React, { useState } from 'react';
import Butn from './assets/Butn';


function App(butnval) {

  let  [calval , setnewval] =   useState("");

  let butnclicked=(butnval)=>{
    if(butnval==="C"){
      //set clear
      setnewval("")
  
    }else if(butnval==="="){
      //Evalte result
      let result = eval(calval);
      setnewval(result);

    }else{
      //add new
      let result=calval + butnval
      setnewval(result);
    } 
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-72 border-2 border-gray-400 justify-center items-center flex-col flex rounded-md m-6'>
          <input  className='mt-6 w-60 border-2 border-blue-400 h-10 flex item-center rounded-md text-3xl px-2' value={calval}
          readOnly  />
          <div className='border-2 border-gray-400 flex flex-wrap gap-3 m-6 justify-center rounded-md p-3'>

            <Butn onClick={butnclicked} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

