//DEPENDENCIES
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

//ROUTES
import AppRoutes from "./routes"

//ASSETS
import './index.css';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);
