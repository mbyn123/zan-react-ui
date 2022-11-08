import React from "react";
import ReactDOM from "react-dom";
import {scopedClassMaker} from "@/utils/classes";
import DrawerBackdrop from "./drawerBackdrop";
import DrawerContent from "./drawerContent";
import {useDrawerExiting} from "./useDrawerExiting";

interface DrawerComponentProps {
    visible: boolean
    title?: React.ReactNode
    mask?: boolean
    maskClosable?: boolean
    onClose?: () => void
    children?: React.ReactNode
    className?: string
    closeBtn?: boolean
}

interface DrawerCrosswise extends DrawerComponentProps {
    placement?: 'left' | 'right'
    width?: number | string
}

interface DrawerLengthways extends DrawerComponentProps {
    placement?: 'top' | 'bottom'
    height?: number | string
}

type DrawerProps = DrawerCrosswise | DrawerLengthways

export const sc = scopedClassMaker('zan-drawer')

const Drawer: React.FC<DrawerProps> = (props) => {

    const {visible, mask, maskClosable, children, placement, title, closeBtn, className, onClose, ...rest} = props

    const width = 'width' in rest ? rest.width : '40%'
    const height = 'height' in rest ? rest.height : '40%'

    const {exiting, onExited} = useDrawerExiting(visible);

    const dom = (visible || exiting) ? (
        <div className={className}>
            <DrawerBackdrop visible={visible} mask={mask} maskClosable={maskClosable} onClose={onClose}/>
            <DrawerContent
                visible={visible}
                placement={placement || 'right'}
                title={title}
                mask={mask}
                closeBtn={closeBtn}
                width={width}
                height={height}
                onClose={onClose}
                onExited={onExited}>
                {children}
            </DrawerContent>
        </div>
    ) : null


    return ReactDOM.createPortal(dom, document.body)
}

Drawer.defaultProps = {
    mask: true,
    maskClosable: true,
    closeBtn: true,
    title: '标题',
    onClose: () => {
    }
}

export default Drawer