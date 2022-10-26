import React from "react";

import { Box, TextField, Stack, Button, Typography, Grid } from '@mui/material/';
// import logoLogin from '../assets/ProfilePicture.png';

const LoginLayout = () => {
    return (
        <>
            {/* <Box sx={{ flexGrow: 0 }}>
                <img src={logoLogin} alt="logoLogin" style={{
                    position: 'absolute',
                    left: 0,
                    right: 28.89,
                    top: 0,
                    bottom: 0,
                    maxHeight: '100%',
                    width: 'auto'
                }} />
            </Box> */}
            <Grid container wrap="nowrap" sx={{ mb: 5 }}>
                <Box sx={{ top: 100, height: '200px', ml: 70, mt: 30, }}>
                    <Typography sx={{ color: 'white', mb: 2 }}>Silahkan Login Disini !</Typography>
                    <Stack
                        component="form"
                        sx={{
                            width: '50ch'
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField variant="filled" label="Email" id="email" sx={{ backgroundColor: 'white' }} />
                        <TextField variant="filled" label="Password" id="password" type="password" sx={{ backgroundColor: 'white' }} />
                        <Button variant="contained" size="large" sx={{ backgroundColor: 'red' }}>
                            Login
                        </Button>
                    </Stack>
                </Box>
            </Grid>
        </>
    )
};

export default LoginLayout;