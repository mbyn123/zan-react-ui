import React, {useMemo} from "react";
import {CSSTransition} from "react-transition-group";
import {sc} from "@lib/drawer/drawer";

interface DrawerComponent {
    visible: boolean
    children?: React.ReactNode
    width?: number | string
    height?: number | string
    onExited: () => void
}

interface DrawerContentCrosswise extends DrawerComponent {
    placement: 'left' | 'right'
    width?: number | string
}

interface DrawerContentLengthways extends DrawerComponent {
    placement: 'top' | 'bottom'
    height?: number | string
}

type DrawerContentProps = DrawerContentCrosswise | DrawerContentLengthways

const placementObj = {
    right: {height: '100%', right: 0, top: 0},
    left: {height: '100%', left: 0, top: 0},
    top: {width: '100%', top: 0, left: 0},
    bottom: {width: '100%', bottom: 0, left: 0}
}

const DrawerContent: React.FC<DrawerContentProps> = (props) => {

    const {visible, children, placement, onExited, ...rest} = props

    const width = 'width' in rest && rest.width
    const height = 'height' in rest && rest.height

    const customWH = useMemo(() => {
        const isNum = (val: number | string) => typeof val !== 'number' ? val : val + 'px'
        if (['left', 'right'].includes(placement) && width) {
            return {width: isNum(width)}
        }
        if (['top', 'bottom'].includes(placement) && height) {
            return {height: isNum(height)}
        }
    }, [placement, height, width])

    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            in={visible}
            timeout={300}
            onExited={onExited}
            classNames={sc(`transition-${placement}`)}>
            <div className={sc('content')} style={{...placementObj[placement], ...customWH}}>
                <div className={sc('body')}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    )
}

export default DrawerContent
