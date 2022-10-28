import React from "react";
import classNames from "classnames";
import {scopedClassMaker} from "@/utils/classes";
import './switch.scss'

interface switchProps {
    checked?: boolean
    onChange?: (value: boolean) => void
    size?: 'small' | 'large' | 'default'
    disabled?: boolean
    loading?: boolean
    className?: string
    style?: React.CSSProperties
}

const Switch: React.FC<switchProps> = (props) => {
    const {checked, size, disabled, loading, className, style, onChange} = props
    const sc = scopedClassMaker('zan-switch')
    const classString = classNames(sc(''), {
        [sc(size ? size : '')]: size !== 'default',
        [sc('checked')]: checked,
        [sc('disabled')]: disabled,
        [sc('loading')]: loading
    }, className)

    const toggle = () => {
        if (disabled || loading) return
        onChange && onChange(!checked)
    }

    return (
        <div className={classString} onClick={toggle} style={style}/>
    )
}

Switch.defaultProps = {
    checked: false,
    size: 'default',
    disabled: false,
    loading: false
}

export default Switch