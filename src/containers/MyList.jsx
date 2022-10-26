import React from "react";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box, Typography } from '@mui/material';

const MyList = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <h1 style={{ color: 'white', marginTop: 100 }}>My List</h1>
            <Box sx={{ pl: 10, color: 'white', textAlign: 'left' }}>
                <Typography gutterBottom variant="h6">
                    Data Akun Anda
                </Typography>
                <Typography gutterBottom variant="h6">
                    Nama : User
                </Typography>
                <Typography gutterBottom variant="h6">
                    Email : {user.email}
                </Typography>
                <Typography gutterBottom variant="h6">
                    User ID : {user.uid}
                </Typography>
            </Box>
        </>
    )
};

export default MyList;