import React, {HTMLAttributes} from "react";
import classNames from "classnames";
import './importAllSvg'
import './icon.scss'

interface IconProps extends HTMLAttributes<HTMLElement> {
    name: string
    spin?: boolean
}

const Icon: React.FC<IconProps> = (props) => {
    const {name, className, spin, ...restProps} = props
    return (
        <span className={classNames('zan-icon', `zan-icon-${name}`, {'zan-icon-spin': spin}, className)} {...restProps}>
              <svg className={classNames('zan-icon-inner')}>
                <use xlinkHref={`#${name}`}/>
              </svg>
        </span>
    )
}

export default Icon