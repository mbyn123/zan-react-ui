import React from "react";
import {sc} from './slider'
import classNames from "classnames";

interface pointProps {
    position: string
    value: number
    active: boolean
}



const Point: React.FC<pointProps> = (props) => {
    const {position, value, active} = props
    return (
        <div className={classNames(sc('tooltip'), {
            [sc('tooltip-active')]: active
        })} style={{left: position}}>
            <div className={sc('point')}/>
            <div className={sc('tooltip-content')}>{value}</div>
        </div>
    )
}

export default Point