import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";


const ProtectedComponent = ({ children }) => {
    const navigate = useNavigate();
    const [user, isloading] = useAuthState(auth);
    useEffect(() => {
        // kalau belum login, paksa ke halaman login
        if (!user) {
            navigate("/login");
            return;
        }
    }, [user, navigate]);

    // kalau pengen ada loading
    if (isloading) {
        return (
            <></>
        )
        // return;
    } else {
        return children;
    }



};

export default ProtectedComponent;