import React from "react";
import {createRoot} from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import 'styles/index.scss'
import App from "./app";

const container=document.getElementById('root');
const root=createRoot(container as HTMLAnchorElement);
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);
