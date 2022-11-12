import React, {useRef} from "react"
import Point from "@lib/slider/point";
import {scopedClassMaker} from "@/utils/classes";
import './slider.scss'

export const sc = scopedClassMaker('zan-slider')

const getPosition = (value: number, min: number, max: number) => {
    const num = ((value - min) * 100) / (max - min)
    return `${num}%`
}

const getValue = (ratio: number, min: number, max: number) => {
    return min + (max - min) * ratio
}

const withinRange = (value: number, min: number, max: number) => {
    if (value < min) return min
    if (value > max) return max
    return value
}

const getDecimal = (step: number | string) => {
    const fixed = String(step).split('.')[1];
    return fixed ? fixed.length : 0;
};

interface sliderCommonProps {
    min?: number
    max?: number
    step?: number
}

interface sliderSingleProps extends sliderCommonProps {
    value: number
    onChange?: (value: number) => void
}

type sliderProps = sliderSingleProps

const Slider: React.FC<sliderProps> = (props) => {
    const {min = 0, max = 100, value, step = 1, onChange} = props

    const decimal = getDecimal(step)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isMouseDown = useRef(false)

    // 计算鼠标点击位置
    const getValueFromEvent = (e: React.MouseEvent) => {
        const el = containerRef.current
        if (!el) return 0
        const ratio = (e.clientX - el?.getBoundingClientRect().left) / el?.clientWidth
        return getValue(ratio, min, max)
    }

    const mouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
        isMouseDown.current = true
        const position = getValueFromEvent(e)
        const nextValue = withinRange(position, min, max)
        onChangeCallBack(nextValue)
    }

    const mouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!isMouseDown.current) return
        const position = getValueFromEvent(e)
        const nextValue = withinRange(position, min, max)
        onChangeCallBack(nextValue)
    }

    const onChangeCallBack = (value:number)=>{
        const nextValue = Number(value.toFixed(decimal))
        onChange && onChange(nextValue)
    }

    const mouseUp = () => {
        isMouseDown.current = false
    }

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
        <div className={sc('')} onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseUp}>
            <div className={sc('main')} ref={containerRef} onMouseDown={mouseDown}>
                <div className={sc('track')} style={computed.trackStyle}/>
                <Point value={value} position={computed.props.position}/>
            </div>
        </div>
    )
}

export default Slider