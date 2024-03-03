import React, { useState, useRef, useEffect } from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

function Home() {
    const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(false);
    const buttonRef = useRef(null); // Reference to the button
    const [confettiOrigin, setConfettiOrigin] = useState({ x: 0, y: 0 });

    const navigateToAbout = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setConfettiOrigin({ x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 });
        }
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false); // Optionally hide confetti after a short delay
            navigate('/about');
        }, 4000); // Adjust this duration to control how long the confetti shows
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh' }}>
            <Container component="main" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                {showConfetti &&
                    <Confetti
                        numberOfPieces={1000}
                        width={window.innerWidth}
                        height={window.innerHeight}
                        origin={{ x: 0.5, y: 0 }}
                    />
                }
                <img src="/images/home 2 Bong.png" alt="Home" style={{ maxWidth: '30%', height: 'auto', width: 'auto', padding: '30px', marginLeft:'45px' }} />
                <img src="/images/home Bong.png" alt="Home" style={{ maxWidth: '70%', height: 'auto', width: 'auto', marginLeft:'45px'  }} />
                <Typography variant="body" sx={{ marginTop: '40px', mb: 2, fontWeight: 'bold', fontSize: '15px', marginLeft:'45px'  }}>(click here to start)</Typography>
                <Button
                    ref={buttonRef}
                    sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        marginBottom: '60px',
                        textTransform: 'none',
                        fontWeight: 'bold', marginLeft:'45px' 
                    }}
                    variant="contained"
                    onClick={navigateToAbout}>
                    lessgetit
                </Button>
            </Container>

        </div>
    );
}

export default Home;
