import React from "react";
import {CSSTransition} from 'react-transition-group'
import {scopedClassMaker} from "@/utils/classes";

interface DrawerBackdropProps {
    visible: boolean
    mask?: boolean
    maskClosable?: boolean
    onClose?: () => void
}

const sc = scopedClassMaker('zan-drawer')

// 遮罩层
const DrawerBackdrop: React.FC<DrawerBackdropProps> = (props) => {
    const {visible, mask, maskClosable, onClose} = props
    const onClickMask = () => {
        if (mask && maskClosable) {
            onClose && onClose()
        }
    }

    return (
        <CSSTransition appear unmountOnExit mountOnEnter in={visible && mask} timeout={300} classNames={sc('transition-backdrop')}>
            <div className={sc('backdrop')} onClick={onClickMask}/>
        </CSSTransition>
    )
}

export default DrawerBackdrop