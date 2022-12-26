import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import LoadingMask from "@lib/loading/loadingMask";
import {scopedClassMaker} from "@/utils/classes";

interface FullScreenLoadingProps {
    loading?: boolean
    icon?: React.ReactNode
    iconText?: string
    showBackground?: boolean
}

const sc = scopedClassMaker('zan-loading')


const FullScreenLoading: React.FC<FullScreenLoadingProps> = (props) => {
    const {loading, icon, iconText, showBackground} = props
    const dom = loading ? (
        <div className={classNames(sc('fullscreen'), {
            [sc('show-background')]: showBackground
        })}>
            <LoadingMask icon={icon} iconText={iconText}/>
        </div>
    ) : null

    return ReactDOM.createPortal(dom, document.body)
}

export default FullScreenLoading