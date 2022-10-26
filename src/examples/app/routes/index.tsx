import React from "react";
import {Navigate, RouteObject} from 'react-router-dom';
import Install from "@doc/install.examples"
import Button from '@doc/button.examples'
import Icon from "@doc/icon.examples"
import Dialog from "@doc/dialog.examples";
import CheckBox from "@doc/checkBox.examples";
import Radio from "@doc/radio.examples";

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
        path: '/dialog',
        element: <Dialog/>
    },
    {
        path: '/checkBox',
        element: <CheckBox/>
    },
    {
        path: '/radio',
        element: <Radio/>
    },
    {
        path: '/',
        element: <Navigate to='/install'/>
    }
]

export default routes