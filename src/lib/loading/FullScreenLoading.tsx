import React from "react";
import ReactDOM from "react-dom";
import {sc} from './blockLoading'
import classNames from "classnames";
import LoadingMask from "@lib/loading/loadingMask";

interface FullScreenLoadingProps {
    loading?: boolean
    icon?: React.ReactNode
    iconText?: string
    showBackground?: boolean
}

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