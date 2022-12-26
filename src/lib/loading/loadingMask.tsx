import React from "react";
import classNames from "classnames";
import Icon from "@lib/icon/icon";
import {scopedClassMaker} from "@/utils/classes";

interface LoadingMaskProps {
    icon?: React.ReactNode
    iconText?: string
}

const sc = scopedClassMaker('zan-loading')


const LoadingMask: React.FC<LoadingMaskProps> = (props) => {
    const {icon, iconText} = props
    return (
        <div className={classNames(sc('mask'))}>
            <div className={classNames(sc('icon-and-text'))}>
                {
                    icon ? icon : <Icon name='loading' spin className={sc('icon')}/>
                }
                {
                    iconText && <div className={sc('icon-text')}>{iconText}</div>
                }

            </div>
        </div>
    )
}

export default LoadingMask