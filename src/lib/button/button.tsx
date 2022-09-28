import React, {AnchorHTMLAttributes, ButtonHTMLAttributes,MouseEvent} from "react";
import * as classNames from "classnames";
import './style.scss'

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
}

type ButtonProps = Partial<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & AnchorHTMLAttributes<HTMLAnchorElement> & BaseButtonProps>


export default function Button(props: ButtonProps) {
    const {children, className, type, size, htmlType, disabled, href, target, style,onClick,...restProps} = props

    const classes = classNames('zan-button', {
        [`zan-button-${type}`]: type,
        [`zan-button-${size}`]: size,
        [`zan-button-disabled${type === 'link'?'-link':''}`]:  disabled
    }, className)


    const buttonClick = (e:MouseEvent<HTMLButtonElement> )=>{
        onClick && onClick(e)
    }

    const linkClick = (e:MouseEvent<HTMLAnchorElement>)=>{
        if(disabled){
            return e.preventDefault()
        }
        onClick && onClick(e)
    }

    return type === 'link' ?
        <a className={classes} href={href} target={target} style={style}  onClick={linkClick}>{children}</a> :
        <button className={classes} type={htmlType} disabled={disabled} style={style} onClick={buttonClick} {...restProps}>{children}</button>
}

Button.defaultProps = {
    type: 'default',
    size: 'medium',
    htmlType: 'submit',
    disabled: false
}