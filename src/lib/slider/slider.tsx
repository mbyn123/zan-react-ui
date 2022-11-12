import React from "react"
import Point from "@lib/slider/point";
import {scopedClassMaker} from "@/utils/classes";
import './slider.scss'

export const sc = scopedClassMaker('zan-slider')

const getPosition = (value: number, min: number, max: number) => {
    const num = ((value - min) * 100) / (max - min)
    return `${num}%`
}

interface sliderCommonProps {
    min?: number
    max?: number
}

interface sliderSingleProps extends sliderCommonProps {
    value: number
    onChange?: (value: number) => void
}

type sliderProps = sliderSingleProps

const Slider: React.FC<sliderProps> = (props) => {
    const {min = 0, max = 100, value} = props
    const getComputedProps = () => {

        const position = getPosition(value, min, max)
        return {
            props: {
                position
            },
            trackStyle: {
                left: 0,
                width: position
            }
        }
    }
    const computed = getComputedProps()

    return (
        <div className={sc('')}>
            <div className={sc('main')}>
                <div className={sc('track')} style={computed.trackStyle}/>
                <Point position={computed.props.position}/>
            </div>
        </div>
    )
}

export default Slider