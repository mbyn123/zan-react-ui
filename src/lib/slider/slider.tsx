import React, {useRef, useState} from "react"
import {scopedClassMaker} from "@/utils/classes";
import {getDecimal, getPosition, getPotentialValues, getValue, isLeftValue, normalizeToPotentialValue, withinRange} from "@lib/slider/comm";
import './slider.scss'
import Point from "./point";
import Marks from './marks'
import Dots from "./dots";
import classNames from "classnames";


interface sliderCommonProps {
    min?: number
    max?: number
    step?: number
    dots?: boolean
    marks?: Record<number, React.ReactNode>
    claasName?: string
}

interface sliderSingleProps extends sliderCommonProps {
    range?: false
    value: number
    onChange?: (value: number) => void
}

interface sliderRangeProps extends sliderCommonProps {
    range: true
    value: [number, number]
    onChange: (value: [number, number]) => void
}

type childrenProps = {
    value: number
    position: string
}

type computedProps = | {
    range: true
    leftProps: childrenProps
    rightProps: childrenProps
    trackStyle: React.CSSProperties
} | {
    range: false
    position: string
    value: number
    trackStyle: React.CSSProperties
}

type sliderProps = (sliderSingleProps | sliderRangeProps)

const sc = scopedClassMaker('zan-slider')

const Slider: React.FC<sliderProps> = (props) => {
    const {min = 0, max = 100, step = 1, marks, dots, claasName} = props

    const decimal = getDecimal(step)
    const potentialValues = getPotentialValues(marks)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isMouseDown = useRef(false)
    const isLeft = useRef<null | boolean>(null)
    const limit = useRef<readonly [number, number] | null>(null)
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

        let nextValue = getValueFromEvent(e)
        if (props.range) {
            const {value} = props;
            let left: boolean;
            if (value[0] === value[1]) {
                left = e.movementX <= 0;
            } else {
                left = isLeftValue(nextValue, value);
            }
            if (!active) {
                setActive(left ? 'point-left' : 'point-right')
            }
            if (!limit.current) {
                isLeft.current = left;
                if (left) {
                    limit.current = [min, value[1]];
                } else {
                    limit.current = [value[0], max];
                }
            }
            nextValue = withinRange(nextValue, limit.current[0], limit.current[1]);
        } else {
            nextValue = withinRange(nextValue, min, max)
            if (!active) {
                setActive(() => 'point-single')
            }
        }
        onChangeCallBack(nextValue)

    }

    const mouseUp = () => {
        isMouseDown.current = false
        limit.current = null
        isLeft.current = null
        setActive(() => null)
    }

    const onChangeCallBack = (rawValue: number) => {
        let nextValue = Number(rawValue.toFixed(decimal))
        if (dots) {
            nextValue = normalizeToPotentialValue(potentialValues, nextValue)
        }
        if (props.range) {
            const {onChange, value} = props;
            if (!onChange) {
                return;
            }
            const _isLeft = isLeft.current !== null ? isLeft.current : isLeftValue(rawValue, value);
            if (_isLeft) {
                onChange([nextValue, value[1]]);
            } else {
                onChange([value[0], nextValue]);
            }
        } else {
            props.onChange && props.onChange(nextValue)
        }

    }

    const getComputedProps = (): computedProps => {
        if (props.range === true) {
            const {value} = props
            const leftPosition = getPosition(value[0], min, max)
            return {
                range: true,
                leftProps: {
                    value: value[0],
                    position: leftPosition
                },
                rightProps: {
                    value: value[1],
                    position: getPosition(value[1], min, max)
                },
                trackStyle: {
                    left: leftPosition,
                    width: `${(value[1] - value[0]) / (max - min) * 100}%`,
                }
            }
        }

        const position = getPosition(props.value, min, max)
        return {
            range: false,
            position,
            value: props.value,
            trackStyle: {
                left: 0,
                width: position
            }
        }

    }

    const computed = getComputedProps()

    return (
        <div className={classNames(sc(''),claasName)} onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseUp}>
            <div className={sc('main')} ref={containerRef} onMouseDown={mouseDown}>
                <div className={sc('track')} style={computed.trackStyle}/>
                {
                    computed.range ? (
                        <>
                            <Point value={computed.leftProps.value} position={computed.leftProps.position} active={active === 'point-left'}/>
                            <Point value={computed.rightProps.value} position={computed.rightProps.position} active={active === 'point-right'}/>
                        </>
                    ) : <Point value={computed.value} position={computed.position} active={active === 'point-single'}/>

                }
                {
                    marks ? (
                        <>
                            <Marks min={min} max={max} marks={marks} potentialValues={potentialValues}/>
                            {dots ? <Dots activeLeft={0} activeRight={props.range ? props.value[1] : props.value} min={min} max={max} potentialValues={potentialValues}/> : null}
                        </>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Slider