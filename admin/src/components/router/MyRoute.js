import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Master from '../layout/Master';
import Dashboard from '../modules/Dashboard';
import Test from '../modules/Test';

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/test',
                element: <Test />,
            },
        ],
    },
]);

export default MyRoute;
