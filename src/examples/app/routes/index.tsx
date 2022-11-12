import React from "react";
import {Navigate, RouteObject} from 'react-router-dom';
import Install from "@doc/install.examples"
import Button from '@doc/button.examples'
import Icon from "@doc/icon.examples"
import Dialog from "@doc/dialog.examples";
import CheckBox from "@doc/checkBox.examples";
import Radio from "@doc/radio.examples";
import Switch from "@doc/switch.examples"
import Notify from "@doc/notify.examples";
import Drawer from "@doc/drawer.examples";
import Carousel from "@doc/carousel.examples"
import Slider from "@doc/slider.examples";

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
        path: '/switch',
        element: <Switch/>
    },
    {
        path: '/notify',
        element: <Notify/>
    },
    {
        path: '/drawer',
        element: <Drawer/>
    },
    {
        path: '/carousel',
        element: <Carousel/>
    },
    {
        path: '/slider',
        element: <Slider/>
    },
    {
        path: '/',
        element: <Navigate to='/install'/>
    }
]

export default routes