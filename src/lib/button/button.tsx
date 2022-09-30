import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent} from "react";
import Icon from "@lib/icon/icon"
import classNames from "classnames";
import './button.scss'

type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'text'
type ButtonSize = 'small' | 'medium' | 'large'

interface BaseButtonProps {
    type?: ButtonType
    size?: ButtonSize
    href?: string,
    target?: string
    disabled?: boolean
    htmlType?: 'submit' | 'reset' | 'button' | undefined
    style?: React.CSSProperties
    icon?: string
    loading?: boolean
    spin?: boolean
    outline?: Boolean
}

type ButtonProps = Partial<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & AnchorHTMLAttributes<HTMLAnchorElement> & BaseButtonProps>


export default function Button(props: ButtonProps) {
    const {children, className, type, size, htmlType, disabled, outline, href, target, style, onClick, icon, spin, loading, ...restProps} = props

    const buttonDisabled = loading || disabled

    const classes = classNames('zan-button', {
        [`zan-button-${type}`]: type,
        [`zan-button-${size}`]: size,
        [`zan-button-outline-${type}`]: outline,
        [`zan-button-disabled${type === 'link' ? '-link' : ''}`]: buttonDisabled,
        [`zan-button-loading-${type}`]: loading
    }, className)


    const buttonClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(e)
    }

    const linkClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (buttonDisabled) {
            return e.preventDefault()
        }
        onClick && onClick(e)
    }

    const iconWrapper = loading ? (<Icon name='loading' spin/>) : (icon && <Icon name={icon} spin={spin}/>)

    const inner = <>{iconWrapper}{children}</>

    return type === 'link' ?
        <a className={classes} href={href} target={target} style={style} onClick={linkClick}>{inner}</a> :
        <button className={classes} type={htmlType} disabled={buttonDisabled} style={style} onClick={buttonClick} {...restProps}>
            {inner}
        </button>
}

Button.defaultProps = {
    type: 'default',
    size: 'medium',
    htmlType: 'submit',
    disabled: false,
    loading: false,
    spin: false,
    outline: false
}