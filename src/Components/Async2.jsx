import React, { useState } from 'react';

const Async2 = () => {
    const [joke, setJoke] = useState('');
    const [count, setCount] = useState(0);

    async function getJoke() {
        try {
            const res = await fetch('https://api.chucknorris.io/jokes/random');
            if (!res.ok) {
                throw new Error('Failed to fetch joke');
            }
            const data = await res.json();
            setJoke(data.value); 
            setCount((c) => c + 1);  
        } catch (error) {
            console.error('Error fetching the joke:', error);
        }
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Chuck Norris Joke Generator</h1>
            <button style={styles.button} onClick={getJoke}>
                Get Joke {count > 0 && `(${count})`}
            </button>
            {joke && <div style={styles.jokeBox}><p>{joke}</p></div>}
            <Message count={count} />
        </div>
    );
};

function Message(props) {
    return (
        <p>You have read <strong>{props.count}</strong> joke{props.count !== 1 ? 's' : ''}</p>
    );
}

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
    jokeBox: {
        border: '2px solid #4CAF50',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '400px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
};

export default Async2;
