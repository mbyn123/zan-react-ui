import React, {Children, cloneElement, forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import classNames from "classnames";
import {scopedClassMaker} from "@/utils/classes";
import './carousel.scss'
import Icon from "../icon/icon";

const setStyle = (target: any, styles: any) => {
    Object.keys(styles).forEach(attr => {
        target.style[attr] = styles[attr]
    })
}

function usePrevious<T>(value: T) {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}


interface CarouselProps {
    children: React.ReactNode
    className?: string
    autoPlay?: boolean
    transitionDuration?: number // 切换动画持续时间
    autoplayInterval?: number // 自动切换间隔时间
    onChange?: (current: number, prev: number | null) => void
    dots?: boolean | 'line' | 'round'
    arrow?: boolean | 'hover'
    arrowsDisabled?: {
        left?: boolean
        right?: boolean
    }
    renderPrevArrow?: (onPrev: () => void, disabled?: boolean) => React.ReactNode
    renderNextArrow?: (onNext: () => void, disabled?: boolean) => React.ReactNode
}

export interface CarouselRefType {
    next: () => void
    prev: () => void
    swipeTo: (value: number) => void
}

const sc = scopedClassMaker('zan-carousel')

const Carousel = forwardRef<CarouselRefType, CarouselProps>((props, ref) => {
    const {
        children, className,
        autoPlay, autoplayInterval, transitionDuration,
        arrow, arrowsDisabled, dots,
        onChange, renderPrevArrow, renderNextArrow
    } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevIndex = usePrevious<number>(currentIndex)

    const swiperRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const autoPlayTimer = useRef<NodeJS.Timer>()
    const swiperWidth = useRef(0)
    const isSwiping = useRef(false) // 动画是否播放完成

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


        if (childrenCount > 1) {
            autoPlay && startAutoPlay()
            translate(currentIndex, true)
        }
    }

    const startAutoPlay = () => {
        autoPlayTimer.current = setTimeout(next, autoplayInterval)
    }

    const clearAutoPlay = () => {
        clearTimeout(autoPlayTimer.current)
        autoPlayTimer.current = undefined
    }

    const next = () => {
        if (Children.count(children) === 1) return
        swipeTo(currentIndex + 1)
    }

    const prev = () => {
        swipeTo(currentIndex - 1)
    }

    const swipeTo = (index: number) => {
        if (currentIndex === index || isSwiping.current) return
        isSwiping.current = true
        setCurrentIndex(() => index)
    }

    useImperativeHandle(ref, () => ({
        next,
        prev,
        swipeTo
    }));

    const getPrevIndex = (index: number | undefined) => {
        const length = (children as any).length
        if (index === undefined) {
            return null
        }
        if (index > length - 1) {
            return length - 1
        }
        if (index < 0) {
            return 0
        }
        return index
    }

    const translate = (index: number, isSilent?: boolean) => {
        const {length} = children as any
        const initIndex = -1
        const translateDistance = swiperWidth.current * (initIndex - index)
        const realDuration = isSilent ? 0 : transitionDuration
        if (autoPlay) {
            clearTimeout(autoPlayTimer.current)
            autoPlayTimer.current = setTimeout(next, autoplayInterval)
        }
        setStyle(containerRef.current, {
            transform: `translateX(${translateDistance}px)`,
            'transition-duration': `${realDuration}ms`,
        })
        if (index > length - 1 || index < 0) {
            return resetPosition(index)
        }
        setTimeout(() => {
            isSwiping.current = false
        }, realDuration)
        onChange && onChange(currentIndex, getPrevIndex(prevIndex))
    }

    const resetPosition = (index: number) => {
        const {length} = props.children as any
        setTimeout(() => {
            setCurrentIndex(() => index < 0 ? length - 1 : 0)
        }, transitionDuration)

    }

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

    const isDotsActive = (currentIndex: number, index: number, length: number) => {
        return (index === currentIndex || (index === length - 1 && currentIndex < 0) || (currentIndex > length - 1 && index === 0))
    }

    useEffect(() => {

        const isSilent = prevIndex !== undefined ? (prevIndex > (props.children as any).length - 1 || prevIndex < 0) : false
        if (prevIndex !== currentIndex) {
            translate(currentIndex, isSilent)
        }
    }, [currentIndex])

    useEffect(() => {
        init()
        return clearAutoPlay
    }, [])

    const childrenCount = Children.count(children);

    const classString = classNames(sc(''), className, {
        [sc('hover-show-arrow')]: arrow === 'hover'
    })

    const dotsType = dots === 'round' ? 'round' : 'line';

    return (
        <div ref={swiperRef} className={classString}>
            {
                arrow && childrenCount > 1 && renderPrevArrow && renderPrevArrow(prev, arrowsDisabled?.left)
            }
            {
                arrow && childrenCount > 1 && renderNextArrow && renderNextArrow(next, arrowsDisabled?.right)
            }
            <div ref={containerRef} className={sc('container')}>

                {
                    Children.map(getChildren(children), (child: any, index) => {
                        return cloneElement(child, {key: index, style: {float: 'left', height: '100%'}})
                    })
                }
            </div>
            <ul className={classNames(sc('dots'), sc(`dots-${dotsType}`))}>
                {
                    Children.map(children, (item, index) => {
                        return <li key={index} className={classNames(sc('dots-item'), {
                            [sc('dots-item-active')]: isDotsActive(currentIndex, index, (children as any).length),
                        })} onClick={() => swipeTo(index)}/>
                    })
                }
            </ul>
        </div>
    )
})

const defaultPrevArrow: CarouselProps['renderPrevArrow'] = (onPerv, disabled) => {
    return (
        <div className={classNames(sc('arrow'), sc('arrow-left'), {
            [sc('arrow-disabled')]: disabled
        })} onClick={disabled ? undefined : onPerv}>
            <Icon name='left' className={sc('arrow-icon')}/>
        </div>
    )
}

const defaultNextArrow: CarouselProps['renderNextArrow'] = (onNext, disabled) => {
    return (
        <div className={classNames(sc('arrow'), sc('arrow-right'), {
            [sc('arrow-disabled')]: disabled
        })} onClick={disabled ? undefined : onNext}>
            <Icon name='right' className={sc('arrow-icon')}/>
        </div>
    )
}

Carousel.defaultProps = {
    transitionDuration: 300,
    autoPlay: true,
    autoplayInterval: 3000,
    dots: 'line',
    arrow: 'hover',
    arrowsDisabled: {
        left: false,
        right: false
    },
    renderPrevArrow: defaultPrevArrow,
    renderNextArrow: defaultNextArrow

}

export default Carousel


