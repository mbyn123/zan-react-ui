import React, {memo} from "react";
import { getLeft } from "./comm";
import {scopedClassMaker} from "@/utils/classes";

interface SliderMarksProps {
    marks: Record<number, React.ReactNode>
    min: number
    max: number
    potentialValues: number[]
}
const sc = scopedClassMaker('zan-slider')

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