import { Typography, Container, IconButton } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Define a styled divider component
const StyledDivider = () => (
  <div style={{ width: '100%', borderBottom: '5px solid #ccc', margin: '20px 0' }} />
);

function About() {
    // Function to handle scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            <Container component="main" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                <img src="/images/about bong.png" alt="About" style={{ maxWidth: '30%', height: 'auto', width: 'auto', padding: '30px', marginLeft:'45px' }} />

                {/* Use the styled divider */} 
                <StyledDivider />
                <img src="/images/bongClaudAbout.png" alt="About Bong" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                <img src="/images/bongClaudABout2.png" alt="About Bong 2" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '20px', marginRight: '40px' }} />
                <img src="/images/bongClaudABout3.png" alt="About Bong 3" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '20px', marginRight: '40px ' }} />

                

                {/* Back to top button */}
                <IconButton onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#3f51b5', color: '#fff' }}>
                    <KeyboardArrowUpIcon />
                </IconButton>
                {/* Use the styled divider */}
                <StyledDivider />
                <Typography variant="body" sx={{ marginBottom: '20px', mb: 2, fontWeight: 'bold', fontSize: '15px', marginLeft:'45px'  }}>Click button to back to top!</Typography>
            </Container>
        </div>
    )
}

export default About;
