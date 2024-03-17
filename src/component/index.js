import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    content: {
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.6',
    },
};

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Welcome to My Stylized React Screen</h1>
                <p style={styles.paragraph}>
                    This is a basic example of a React screen with inline styling.
                </p>
            </div>
        </div>
    );
};

ReactDOM.render(<Home />, document.getElementById('root'));
