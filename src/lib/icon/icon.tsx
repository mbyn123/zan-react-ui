import React, {SVGAttributes} from "react";
import classNames from "classnames";
import './importAllSvg'
import './icon.scss'

interface IconProps extends SVGAttributes<SVGElement> {
    name: string
}

export default function Icon(props: IconProps) {
    const {name, className, ...restProps} = props
    return (
        <svg className={classNames('zan-icon',`zan-icon-${name}`, className)} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
}