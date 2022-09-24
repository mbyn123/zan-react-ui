import React from "react";
import {useRoutes} from 'react-router-dom'
import './index.scss'
import SlideNav from "./sliderNav/slideNav";
import routes from "./routes";

export default function App() {
    const element = useRoutes(routes)
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <div className="inner">
                    <div className="left">
                        <a href="#" className="logo">
                            <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png"
                                 alt="logo"/>
                            <span>Zan Design</span>
                        </a>
                    </div>
                    <div className="right">
                        <a href="#">
                            <img src="https://img.yzcdn.cn/zanui/react/GitHub-Mark-120px-plus.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="nav">
                    <SlideNav/>
                </div>
                <div className="content">
                    {element}
                </div>
            </div>
        </div>


    )
}

