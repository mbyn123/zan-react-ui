import React from "react";
import {sc} from './slider'

interface pointProps {
    position: string
}

const Point: React.FC<pointProps> = (props) => {
    const {position} = props
    return (
        <div className={sc('tooltip')} style={{left: position}}>
            <div className={sc('point')}/>
        </div>
    )
}

export default Point