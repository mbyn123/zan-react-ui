import React from "react";
import {createRoot} from 'react-dom/client'
import './style.scss'

const App = ()=>{
    return (
        <div className='wrapper'>
            <ul className='list'>
                <li className='item'>re1231</li>
            </ul>
        </div>
    )
}


const container=document.getElementById('root');
const root=createRoot(container as HTMLAnchorElement);
root.render(<App/>);
