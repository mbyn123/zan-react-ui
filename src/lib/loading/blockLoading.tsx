import React from "react";
import LoadingMask from "@lib/loading/loadingMask";
import {scopedClassMaker} from "@/utils/classes";
import classNames from "classnames";
import './loading.scss'

interface BlockLoadingProps {
    children?: React.ReactNode
    loading?: boolean
    icon?: React.ReactNode
    iconText?: string
}

export const sc = scopedClassMaker('zan-loading')

const BlockLoading: React.FC<BlockLoadingProps> = (props) => {
    const {children, loading, icon, iconText} = props
    return (
        <div className={classNames(sc('block'))}>
            {children}
            {
                loading && <LoadingMask icon={icon} iconText={iconText}/>
            }
        </div>
    )
}

export default BlockLoading