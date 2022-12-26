import React, {useMemo} from "react";
import {CSSTransition} from "react-transition-group";
import Icon from "@lib/icon/icon";
import classNames from "classnames";
import {scopedClassMaker} from "@/utils/classes";

interface DrawerComponent {
    visible: boolean
    mask?:boolean
    children?: React.ReactNode
    width?: number | string
    height?: number | string
    closeBtn?: boolean
    title?: React.ReactNode
    onExited: () => void
    onClose?:()=> void
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

const sc = scopedClassMaker('zan-drawer')

const placementObj = {
    right: {height: '100%', right: 0, top: 0},
    left: {height: '100%', left: 0, top: 0},
    top: {width: '100%', top: 0, left: 0},
    bottom: {width: '100%', bottom: 0, left: 0}
}

const DrawerContent: React.FC<DrawerContentProps> = (props) => {

    const {visible, children, placement, mask,title,closeBtn,onClose,onExited, ...rest} = props

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
            <div className={classNames( sc('content'),{
                [`${sc('content-transparent')}`]: !mask,

            }) } style={{...placementObj[placement], ...customWH}}>
                <div onClick={onClose} className={sc('close')}>
                    {true === closeBtn ? <Icon name="close" /> : closeBtn}
                </div>
                <div className={sc('header')}>
                    <span className={sc('header-title')}>{title}</span>
                </div>
                <div className={sc('body')}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    )
}

export default DrawerContent
