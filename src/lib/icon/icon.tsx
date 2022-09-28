import React, {HTMLAttributes} from "react";
import classNames from "classnames";
import './importAllSvg'
import './icon.scss'

interface IconProps extends HTMLAttributes<HTMLElement> {
    name: string
}

export default function Icon(props: IconProps) {
    const {name, className, ...restProps} = props
    return (
        <span className={classNames('zan-icon', `zan-icon-${name}`, className)} {...restProps}>
              <svg>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </span>
    )
}