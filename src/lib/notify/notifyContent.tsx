import React, {ReactNode} from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from 'react-transition-group'
import Icon from "@lib/icon/icon";
import {scopedClassMaker} from "@/utils/classes";

interface NotifyContentProps {
    text?: ReactNode
    selector: Element
    isIn?: boolean
    type: string
    close?: () => void
}

const sc = scopedClassMaker('zan-notify')

const NotifyContent: React.FC<NotifyContentProps> = (props) => {

    const {text, selector, isIn, type, close} = props

    const onExited = () => {
        close && close()
    }

    const IconDemo = ({name}:{name:string})=> <Icon name={name} className={sc('content-icon')}/>

    return ReactDOM.createPortal(
        <CSSTransition classNames='notify' timeout={800} appear unmountOnExit in={isIn} onExited={onExited}>
            <div className={sc('')}>
                <div className={`${sc('content',)} ${sc(`content-${type}`)}`}>
                    {
                        type === 'info' && <IconDemo name='info'/>
                    }
                    {
                        type === 'success' &&  <IconDemo name='gouxuankuanglig'/>
                    }
                    {
                        type === 'error' && <IconDemo name='guanbi'/>
                    }
                    {
                        type === 'warn' &&  <IconDemo name='warning_amber'/>
                    }


                    <div>{text}</div>
                </div>
            </div>
        </CSSTransition>
        , selector)
}

export default NotifyContent