import React from 'react';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Messages() {
    const messagesData = [
        { name: 'Anne', src: '/images/bongAnne.png' },
        { name: 'Jasfer', src: '/images/bongJas.png' },
        { name: 'Justin', src: '/images/bongjustin.png' },

        { name: 'Theviya', src: '/images/bongTheviya.png' },
        { name: 'YY', src: '/images/bongYY.png' },
        { name: 'verlyn', src: '/images/bongVerlyn.png' },

        { name: 'huixin', src: '/images/bongHuixin.png' },
        { name: 'charlotte', src: '/images/bongCharlotte.png' },
        { name: 'XiangQi', src: '/images/bongXQ.png' },
        
    ];

    const StyledDivider = () => (
        <div style={{ width: '100%', borderBottom: '5px solid #ccc', margin: '20px 0' }} />
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <Container
                component="main"
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <img src="/images/msg bong.png" alt="Msg" style={{ maxWidth: '30%', height: 'auto', width: 'auto', padding: '10px' }} />
                <StyledDivider />

                <Grid container spacing={2}>
                    {messagesData.map((message) => (
                        <Grid key={message.name} item xs={12} sm={6} md={4}>
                            <img src={message.src} alt={message.name} style={{ width: '100%', height: 'auto', padding: '10px' }} />
                        </Grid>
                    ))}
                </Grid>
                <IconButton onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#3f51b5', color: '#fff' }}>
                    <KeyboardArrowUpIcon />
                </IconButton>
            </Container>
        </div>
    );
}

export default Messages;
