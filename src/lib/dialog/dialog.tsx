import React, {ReactNode} from "react";
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client'
import classes, {scopedClassMaker} from "@/utils/classes";
import Icon from "@lib/icon/icon";
import Button from "@lib/button/button";
import './dialog.scss'


interface DialogProps {
    title?: ReactNode
    children?: ReactNode
    visible: boolean
    closeBtn?: boolean
    footer?: ReactNode
    mask?: boolean
    className?: string
    style?: React.CSSProperties
    onConfirm?: () => void
    onClose?: () => void
    maskClosable?: boolean
}

const sc = scopedClassMaker('zan-dialog')

const Dialog: React.FC<DialogProps> = (props) => {
    const {children, visible, maskClosable, closeBtn, title, footer, className, style, mask, onConfirm, onClose} = props

    const clickClose = () => {
        onClose && onClose()
    }

    const clickConfirm = () => {
        onConfirm && onConfirm()
    }


    const dom = visible ? (
        <div className={classes(sc(mask ? 'mask' : 'mask-none'), className)} style={style} onClick={() => maskClosable && clickClose()}>
            <div className={sc('container')} onClick={(e) => e.stopPropagation()}>
                <header className={sc('header')}>
                    <div className={sc('header-title')}>{title}</div>
                    {
                        closeBtn && (
                            <div className={sc('close')} onClick={clickClose}>
                                <Icon name='close'/>
                            </div>
                        )
                    }
                </header>
                <main className={sc('main')}>
                    {children}
                </main>
                <footer className={sc('footer')}>

                    {
                        footer ? footer : footer === null ? null : (
                            <div className={sc('footer-button-wrapper')}>
                                <Button onClick={clickClose}>关闭</Button>
                                <Button type='primary' onClick={clickConfirm}>确定</Button>
                            </div>
                        )
                    }
                </footer>
            </div>
        </div>
    ) : null

    return ReactDOM.createPortal(dom, document.body)
}

Dialog.defaultProps = {
    closeBtn: true,
    maskClosable: true,
    mask: true
}

export default Dialog

interface OpenDialogProps {
    title: ReactNode
    content: ReactNode
    footer?: ReactNode
    onConfirm?: () => void
    onClose?: () => void
}

const OpenDialog = (props: OpenDialogProps) => {
    const {title, content, footer, onClose, onConfirm} = props

    const rootDiv = document.createElement('div')
    const root = createRoot(rootDiv)
    return new Promise((resolve, reject) => {

        const closeDialog = () => {
            root.render(React.cloneElement(component, {visible: false}))
            root.unmount()
        }

        const onYes = () => {
            closeDialog()
            reject('confirm')
            onConfirm && onConfirm()
        }

        const onNo = () => {
            closeDialog()
            reject('close')
            onClose && onClose()
        }

        const component = (
            <Dialog visible={true} title={title} footer={footer} onClose={onNo} onConfirm={onYes}>{content}</Dialog>
        )

        root.render(component)
    }).catch(err => err)
}

export {OpenDialog}