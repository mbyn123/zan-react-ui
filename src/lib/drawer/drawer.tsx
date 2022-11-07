import React from "react";
import ReactDOM from "react-dom";
import {scopedClassMaker} from "@/utils/classes";
import DrawerBackdrop from "./drawerBackdrop";
import DrawerContent from "./drawerContent";
import {useDrawerExiting} from "./useDrawerExiting";

interface DrawerComponentProps {
    visible: boolean
    mask?: boolean
    maskClosable?: boolean
    onClose?: () => void
    children?: React.ReactNode
    className: string
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

    const {visible, mask, maskClosable, children, placement, className, onClose, ...rest} = props

    const width = 'width' in rest ? rest.width : '45%'
    const height = 'height' in rest ? rest.height : '45%'

    const {exiting, onExited} = useDrawerExiting(visible);

    const dom = (visible || exiting) ? (
        <div className={className}>
            <DrawerBackdrop visible={visible} mask={mask} maskClosable={maskClosable} onClose={onClose}/>
            <DrawerContent visible={visible} placement={placement || 'right'} width={width} height={height} onExited={onExited}>
                {children}
            </DrawerContent>
        </div>
    ) : null


    return ReactDOM.createPortal(dom, document.body)
}

Drawer.defaultProps = {
    mask: true,
    maskClosable: true,
    onClose: () => {
    }
}

export default Drawer