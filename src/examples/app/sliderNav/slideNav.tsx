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
                <li className='menu-item'>
                    <NavLink to='/icon'>Icon 图标</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to='/dialog'>Dialog 对话框</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to='/checkBox'>CheckBox 选择框</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to='/radio'>Radio 单选框</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to='/switch'>Switch 开关</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to='/notify'>Notify 轻提示</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SlideNav