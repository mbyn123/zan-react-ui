import React from "react";
import classNames from "classnames";
import './importAllSvg'
import './icon.scss'

interface IconProps {
    name: string
    className?: string
    style?: React.CSSProperties
}

export default function Icon(props: IconProps) {
    const {name, style, className} = props
    return (
        <svg className={classNames('zan-icon', className)} style={style}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
}