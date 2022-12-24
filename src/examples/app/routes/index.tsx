import React from "react";
import {Navigate, RouteObject} from 'react-router-dom';
import Install from "@doc/install.examples"
import Button from '@doc/button/button.examples'
import Icon from "@doc/icon/icon.examples"
import Dialog from "@doc/dialog/dialog.examples";
import CheckBox from "@doc/checkBox/checkBox.examples";
import Radio from "@doc/radio/radio.examples";
import Switch from "@doc/switch/switch.examples"
import Notify from "@doc/notify/notify.examples";
import Drawer from "@doc/drawer/drawer.examples";
import Carousel from "@doc/carousel/carousel.examples"
import Slider from "@doc/slider/slider.examples";
import Loading from "@doc/loading/loading.examples"

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
        path: '/loading',
        element: <Loading/>
    },
    {
        path: '/',
        element: <Navigate to='/install'/>
    }
]

export default routes