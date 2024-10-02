import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 5) {
      setCount(prev => prev + 1);
    } 
    else if (count ===5) {
        alert("Limit is exceeded");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
    else if (count === 0) {
        alert("Limit is exceeded");
    }
  };

  return (
    <div className='tutorial mt-3'>
      <h1 className='mb-3'>Count: {count}</h1>
      <button onClick={decrement} className='btn btn-outline btn-ghost mr-5'>
        Decrement
      </button>
      <button onClick={increment} className='btn btn-outline btn-ghost mr-5'>
        Increment
      </button>
      {/* {message && (
        <div className='alert mt-3'>
          <input type="text" value={message} readOnly className='input input-bordered'/>
        </div>
      )} */}
    </div>
  );
}