

import React from 'react';


const data = ["C","0", "1", "+", "2", "3", "-", "4", "5", "/", "6", "7", "*", "8", "9",".","="];


const Butn = ({onClick}) => {
  return (
    <>
      {data.map((butnval) => (
        <button  
        key={butnval} 
        className= {`w-12 h-12 rounded-md border-2 text-2xl ${butnval==="C" ? 'text-red-600 font-bold': 'text-black' }`}
        onClick={()=>onClick(butnval)} >
        {butnval}
        </button>
      ))}
    </>
  );
};

export default Butn;


//w-12 h-12 rounded-md border-2 text-xl