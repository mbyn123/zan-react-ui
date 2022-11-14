import React, {memo} from "react";
import { getLeft } from "./comm";
import {sc} from './slider'

interface SliderMarksProps {
    marks: Record<number, React.ReactNode>
    min: number
    max: number
    potentialValues: number[]
}

const SliderMarks: React.FC<SliderMarksProps> = memo((props) => {
    const {marks, max, min, potentialValues} = props

    return (
        <>
            {
                potentialValues.map(item => (
                    <div key={item} className={sc('mark')} style={{left:`${getLeft(item,min,max)}%`}}>
                        {marks[item]}
                    </div>
                ))
            }
        </>
    )
})

export default SliderMarks