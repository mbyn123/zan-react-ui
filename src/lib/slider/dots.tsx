import React from "react";
import {getLeft} from "@lib/slider/comm";
import classNames from "classnames";
import {scopedClassMaker} from "@/utils/classes";

interface SliderDotsProps {
    min: number
    max: number
    activeLeft: number
    activeRight: number
    potentialValues: number[]
}
const sc = scopedClassMaker('zan-slider')

//
const SliderDots: React.FC<SliderDotsProps> = (props) => {
    const {potentialValues, min, max, activeLeft, activeRight} = props
    return (
        <>
            {
                potentialValues.map(item => (
                    <div key={item} className={classNames(sc('dots'), {
                        [sc('dots-active')]: item >= activeLeft && item <= activeRight
                    })} style={{left: `${getLeft(item, min, max)}%`}}/>
                ))
            }
        </>
    )
}

export default SliderDots