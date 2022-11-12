import React from "react";
import {sc} from './slider'

interface pointProps {
    position: string
    value: number
}

const Point: React.FC<pointProps> = (props) => {
    const {position, value} = props
    return (
        <div className={sc('tooltip')} style={{left: position}}>
            <div className={sc('point')}/>
            <div className={sc('tooltip-content')}>{value}</div>
        </div>
    )
}

export default Point