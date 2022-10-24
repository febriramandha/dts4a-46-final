import React from "react";
// import { Link } from "react-router-dom";
import { AppBar, Container, Button, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {

    return (
        <>
            {/* Footer */}
            <AppBar position="static" sx={{ top: 'auto', bottom: 0, right: 0, mt: 10, mb: 5, backgroundColor: '#141414' }} >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, mt: 5, ml: 15 }}>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom>Audio and Subtitles</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom>Media Center</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom>Security</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom>Contact us</Typography>
                            <Button sx={{ mt: 2, mb: 2, borderColor: 'white', border: 1 }}>Service Code</Button>
                            <Typography textAlign="left" sx={{ mb: 2 }}>&copy; 2022 Movies, All Right Reserved</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Audio Description</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Investor Relations</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Legal Provisions</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Help center</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Jobs</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Cookie Preferences</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Gift Cards</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Terms of Use</Typography>
                            <Typography textAlign="left" variant="subtitle1" gutterBottom sx={{ display: { xs: 'none', md: 'flex' } }}>Corporate Information</Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* Akhir Footer */}
        </>
    )
}

export default Footer;