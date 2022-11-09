import React, {Children, cloneElement, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {scopedClassMaker} from "@/utils/classes";
import './carousel.scss'

const setStyle = (target: any, styles: any) => {
    Object.keys(styles).forEach(attr => {
        target.style[attr] = styles[attr]
    })
}

interface CarouselProps {
    children: React.ReactNode
    className: string
    transitionDuration?: number
}

const Carousel: React.FC<CarouselProps> = (props) => {
    const {children, className} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const swiperRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const timer = useRef<NodeJS.Timer>()

    const swiperWidth = useRef(0)

    const init = () => {
        swiperWidth.current = swiperRef.current?.getBoundingClientRect().width || 0
        const innerElements = containerRef.current?.children
        const childrenCount = Children.count(children)
        if (!innerElements) return
        setStyle(containerRef.current, {width: `${swiperWidth.current * innerElements?.length}px`})

        for (let i = 0; i < innerElements.length; i++) {
            const item = innerElements[i]
            setStyle(item, {width: `${100 / innerElements.length}%`})
        }

        translate(currentIndex)
        timer.current = setInterval(() => {
            setCurrentIndex((v) => v + 1)
        }, 1000)
    }

    const translate = (index: number) => {
        const {length} = props.children as any
        const initIndex = -1
        const translateDistance = swiperWidth.current * (initIndex - index)
        console.log(swiperWidth.current, index, 'currentIndex', translateDistance)


        setStyle(containerRef.current, {
            transform: `translateX(${translateDistance}px)`,
            'transition-duration': `${0}ms`,
        })
        if (index > length - 1 || index < 0) {
            return resetPosition(index)
        }

    }

    const resetPosition = (index: number) => {
        clearInterval(timer.current)
        const {length} = props.children as any
        setCurrentIndex(() => index < 0 ? length - 1 : 0)
    }

    useEffect(() => {
        translate(currentIndex)
    }, [currentIndex])


    const getChildren = (children?: React.ReactNode) => {
        const length = Children.count(children)

        if (length <= 1) {
            return children
        }
        // 额外增加两个元素
        const cloneChildren = new Array(length + 2)
        Children.forEach(children, (item, index) => {
            cloneChildren[index + 1] = item
            // 数组末尾添加排行第一的元素
            if (index === 0) {
                cloneChildren[length + 1] = item
            }
            // 数组开始添加最后一个元素
            if (index === length - 1) {
                cloneChildren[0] = item
            }
        })

        return cloneChildren
    }

    useEffect(() => {
        init()
    }, [])


    const sc = scopedClassMaker('zan-carousel')
    const classString = classNames(sc(''), className)


    return (
        <div ref={swiperRef} className={classString}>
            <div ref={containerRef} className={sc('container')}>
                {
                    Children.map(getChildren(children), (child: any, index) => {
                        return cloneElement(child, {key: index, style: {float: 'left', height: '100%'}})
                    })
                }
            </div>
        </div>
    )
}

export default Carousel


