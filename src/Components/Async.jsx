import React, { useState } from 'react';

const Async = () => {
    const [advice, setAdvice] = useState('');
    const [count, setCount] = useState(0);

    async function getAdvice() {
        try {
            const res = await fetch('https://api.adviceslip.com/advice');
            const data = await res.json();
            setAdvice(data.slip.advice);
            setCount((c) => c + 1);
        } catch (error) {
            console.error('Error fetching the advice:', error);
        }
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Advice Generator</h1>
            <button style={styles.button} onClick={getAdvice}>
                Get Advice {count > 0 && `(${count})`}
            </button>
            {advice && <div style={styles.adviceBox}><p>{advice}</p></div>}
        </div>
    );
};

const Message = (props) => {
    return (
        <p>You have read <strong>{props.count}</strong> pieces of advice</p>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
    },
    adviceBox: {
        border: '2px solid #4CAF50',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '400px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
};

export default Async;
