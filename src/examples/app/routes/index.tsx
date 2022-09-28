import React from "react";
import {Navigate, RouteObject} from 'react-router-dom';
import Install from "@doc/install.examples"
import Button from '@doc/button.examples'
import Icon from "@doc/icon.examples"

const routes: RouteObject[] = [
    {
        path: '/install',
        element: <Install/>
    },
    {
        path: '/button',
        element: <Button/>
    },
    {
        path: '/icon',
        element: <Icon/>
    },
    {
        path: '/',
        element: <Navigate to='/install'/>
    }
]

export default routes