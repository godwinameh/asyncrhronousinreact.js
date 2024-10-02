import React, { useEffect, useState } from 'react';

export default function CountDom() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    if (count === 5) {
      setMessage('You have reached your limit.');
    } else if (count === 0) {
      setMessage('You cannot go below 0.');
    } else {
      setMessage(''); 
    }
  }, [count]); 

  const increment = () => {
    if (count < 5) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className='tutorial mt-3' style={styles.container}>
      <h1 className='mb-3' style={styles.header}>Count: {count}</h1>
      <button 
        onClick={decrement} 
        className='btn btn-outline btn-ghost mr-5' 
        style={styles.button}
      >
        Decrement
      </button>
      <button 
        onClick={increment} 
        className='btn btn-outline btn-ghost mr-5' 
        style={styles.button}
      >
        Increment
      </button>

      {message && (
        <div className='alert mt-3' style={styles.messageBox}>
          <input 
            type="text" 
            value={message} 
            readOnly 
            className='input input-bordered' 
            style={styles.input}
          />
        </div>
      )}
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    width: '300px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#6200ea',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  buttonHover: {
    backgroundColor: '#3700b3',
  },
  messageBox: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff3cd',
    border: '1px solid #ffeeba',
    borderRadius: '5px',
  },
  input: {
    border: 'none',
    padding: '10px',
    width: '100%',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#856404',
    backgroundColor: 'transparent',
  },
};
