import React, {useRef, useState} from "react"
import {scopedClassMaker} from "@/utils/classes";
import {getDecimal, getPosition, getPotentialValues, getValue, normalizeToPotentialValue, withinRange} from "@lib/slider/comm";
import './slider.scss'
import Point from "./point";
import Marks from './marks'
import Dots from "./dots";

export const sc = scopedClassMaker('zan-slider')

interface sliderCommonProps {
    min?: number
    max?: number
    step?: number
    dots?: boolean
    marks?: Record<number, React.ReactNode>
}

interface sliderSingleProps extends sliderCommonProps {
    value: number
    onChange?: (value: number) => void
}

type sliderProps = sliderSingleProps

const Slider: React.FC<sliderProps> = (props) => {
    const {min = 0, max = 100, value, step = 1, marks, dots, onChange} = props

    const decimal = getDecimal(step)
    const potentialValues = getPotentialValues(marks)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isMouseDown = useRef(false)
    const [active, setActive] = useState<string | null>(null)

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
        setActive(() => 'point-single')
        onChangeCallBack(nextValue)
    }

    const mouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!isMouseDown.current) return
        const position = getValueFromEvent(e)
        const nextValue = withinRange(position, min, max)
        setActive(() => 'point-single')
        onChangeCallBack(nextValue)
    }

    const mouseUp = () => {
        isMouseDown.current = false
        setActive(() => null)
    }

    const onChangeCallBack = (value: number) => {
        let nextValue = Number(value.toFixed(decimal))
        if (dots) {
            nextValue = normalizeToPotentialValue(potentialValues, nextValue)
        }
        console.log(nextValue);
        onChange && onChange(nextValue)
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
                <Point value={value} position={computed.props.position} active={active === 'point-single'}/>
                {
                    marks ? (
                        <>
                            <Marks min={min} max={max} marks={marks} potentialValues={potentialValues}/>
                            {dots ? <Dots activeLeft={0} activeRight={value} min={min} max={max} potentialValues={potentialValues}/> : null}
                        </>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Slider