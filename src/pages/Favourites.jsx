import { Typography, Container, IconButton } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Define a styled divider component
const StyledDivider = () => (
  <div style={{ width: '100%', borderBottom: '5px solid #ccc', margin: '20px 0' }} />
);

function Favourites() {
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
                <img src="/images/favs bong.png" alt="Favs" style={{ maxWidth: '30%', height: 'auto', width: 'auto', padding: '30px', marginLeft: '50px' }} />
                {/* Use the styled divider */} 
                <StyledDivider />
                <img src="/images/bongKTV.png" alt="Favs KTV" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '10px', marginRight: '80px' }} />
                <img src="/images/bongKTV2.png" alt="Favs KTV 2" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                <img src="/images/bongKTV3.png" alt="Favs KTV 3" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                <img src="/images/bongKTV4.png" alt="Favs KTV 4" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                <img src="/images/bongKTV5.png" alt="Favs KTV 5" style={{ maxWidth: '100%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                <img src="/images/bongKTV6.png" alt="Favs KTV 6" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                <img src="/images/bongFAVColour.png" alt="Favs Colour" style={{ maxWidth: '110%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                <Typography variant="body" sx={{ marginBottom: '20px', mb: 2, fontWeight: 'bold', fontSize: '45px', marginLeft:'45px', padding: '250px'  }}>Also, Lastly...</Typography>
                <img src="/images/bongKTV7.png" alt="Favs KTV 7" style={{ maxWidth: '120%', height: 'auto', width: 'auto', padding: '10px', marginRight: '40px' }} />
                

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

export default Favourites;
