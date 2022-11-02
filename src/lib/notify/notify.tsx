import React, {ReactNode} from "react";
import {createRoot, Root} from "react-dom/client";
import NotifyContent from "@lib/notify/notifyContent";

let index = 0

const containerList: { [key: number]: { root: Root, container: HTMLDivElement, timeoutId: NodeJS.Timeout, callback?: () => void } } = {}

const createContainerId = () => {
    return ++index
}

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
        selector: notifyContainerNode,
        close: callback
    }

    root.render(<NotifyContent {...props} />)

    const containerId = createContainerId()

    const timeoutId = setTimeout(() => {
        root.render(<NotifyContent {...props} isIn={false}/>)
    }, duration || 2000)

    containerList[containerId] = {container, timeoutId, root, callback}
    return containerId
}

// 清除单个提示
const clearNotify = (id: number) => {
    const notifyItem = containerList[id]
    if (!notifyItem) return
    const {timeoutId, callback, root} = notifyItem
    clearTimeout(timeoutId)
    root.unmount()
    delete containerList[id]
    callback && callback()
}

// 清除所有提示
const clearAllNotify = () => {
    Object.keys(containerList).forEach(id => {
        clearNotify(Number(id))
    })
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

export const clear = (id?: number) => {
    if (id) {
        clearNotify(id)
    } else {
        clearAllNotify()
    }
}


const Notify = {
    info,
    success,
    error,
    warn,
    clear
}

export default Notify