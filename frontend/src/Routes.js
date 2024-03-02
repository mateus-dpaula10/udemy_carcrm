import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
                Hello World
            </div>
        )
    },
    {

    }
]) 

export default router;