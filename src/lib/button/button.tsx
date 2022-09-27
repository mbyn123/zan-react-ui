import React, {ButtonHTMLAttributes} from "react";
import * as classNames from "classnames";
import './style.scss'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'text'

interface BaseButtonProps {
    type?: ButtonType,
    disabled?: boolean,
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
}

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & BaseButtonProps


export default function Button(props: ButtonProps) {
    const {children, className, type, disabled} = props

    const classes = classNames('zan-button', {
        [`zan-button-${type}`]: type,
        'zan-button-disabled': disabled
    }, className)

    return (
        <button className={classes}>{children}</button>
    )
}

Button.defaultProps = {
    type: 'default',
    disabled: false
}