import React, {useState} from "react";
import './style.scss'
import {scopedClassMaker} from "@/utils/classes";
import MdCode from "./mdCode";

type PropsType = {
    children: React.ReactNode
    md: string
    title: string
}

const sc = scopedClassMaker('zan-demo')

const Demo: React.FC<PropsType> = (props) => {
    const {children, md,title} = props

    const [visible,setVisible] = useState(false)

    return (
        <div className={sc('')}>
            <div className={sc('preview')}>{children}</div>
            <div className={sc('bottom')} >
                <div className={sc('title')} onClick={()=>setVisible(!visible)}>{title}</div>
                {
                    visible && (
                        <div className={sc('code')}>
                            <MdCode md={md}/>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Demo