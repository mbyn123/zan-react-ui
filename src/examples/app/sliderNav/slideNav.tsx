import React from "react";
import {NavLink} from 'react-router-dom'
import './sliderNav.scss'

const SlideNav = () => {
    return (
        <div className='slider-nav-wrapper'>
            <div className="title">使用</div>
            <ul className='menu-list'>
                <li className='menu-item'>
                    <NavLink to='/install'>快速上手</NavLink>
                </li>
            </ul>
            <div className="title">组件</div>
            <ul className='menu-list'>
                <li className='menu-item'>
                    <NavLink to='/button'>Button 按钮</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SlideNav