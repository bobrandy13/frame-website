import * as React from 'react';

function Paintings() {
  const handleFilter = () => {
    
  }

  return ( 
    <>
      <div className='w-90 h-20 rounded bg-slate-400 h m-2'>
        <div className='flex justify-center items-center align-middle'>
          <ul className='relative top-6'>
            <li className="float-left mx-3">
              <button onClick={(e)=>console.log(e.target.value)} value="abstract">Abstract</button>
            </li>
            <li className="float-left mx-3">
              <button onClick={(e)=>console.log(e.target.value)} value="Scenery">Scenery</button>
            </li>
            <li className="float-left mx-3">
              <button onClick={(e)=>console.log(e.target.value)} value="Nature">Nature</button>
            </li>
            <li className="float-left mx-3">
              <button onClick={(e)=>console.log(e.target.value)} value="Fruits">Fruits</button>
            </li>
          </ul>
        </div>
      </div>
    
    </>
   );
}

export default Paintings;