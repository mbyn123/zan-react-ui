import React, {ReactNode} from "react";
import {createRoot} from "react-dom/client";
import NotifyContent from "@lib/notify/notifyContent";


const createNotifyContainerNode = () => {
    let notifyContainerNode = document.querySelector<HTMLElement>('.zan-notify-container')
    if (!notifyContainerNode) {
        const div = document.createElement('div')
        div.className = 'zan-notify-container'
        notifyContainerNode = document.body.appendChild(div)
    }
    return notifyContainerNode
}

const show = (text: ReactNode, duration?: number, type?: string, callback?: () => void) => {

    const container = document.createElement('div')
    const root = createRoot(container)
    const notifyContainerNode = createNotifyContainerNode()

    const props = {
        text,
        isIn: true,
        type: type || 'info',
        selector: notifyContainerNode
    }

    root.render(<NotifyContent {...props} />)

    setTimeout(() => {
        root.render(<NotifyContent {...props} isIn={false}/>)
    }, duration || 2000)

}

export const info = (text: ReactNode, duration?: number, callback?: () => void) => {
    return show(text, duration, 'info', callback)
}

export const success = (text: ReactNode, duration?: number, callback?: () => void) => {
    return show(text, duration, 'success', callback)
}

export const error = (text: ReactNode, duration?: number, callback?: () => void) => {
    return show(text, duration, 'error', callback)
}

export const warn = (text: ReactNode, duration?: number, callback?: () => void) => {
    return show(text, duration, 'warn', callback)
}


const Notify = {
    info,
    success,
    error,
    warn
}

export default Notify