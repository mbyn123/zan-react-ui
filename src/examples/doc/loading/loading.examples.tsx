import React, {useState} from "react";
import BlockLoading from "@lib/loading/blockLoading";
import FullScreenLoading from "@lib/loading/FullScreenLoading";
import Button from "@lib/button/button";
import Switch from "@lib/switch/switch";
import './loading.examples.scss'
import MdBasic from "@/components/demo/mdBasic";
import Demo from "@/components/demo/demo";
import handbook from './handbook.md'
import basic from './basic.md'
import fullScreen from './fullScreen.md'
import api from './api.md'

export default function () {
    const [fullLoading, setFullLoading] = useState(false)
    const [blockLoading, setBlockLoading] = useState(false)
    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基础用法'>
                <Switch checked={blockLoading} onChange={(v)=> setBlockLoading(v)}/>
                <BlockLoading loading={blockLoading}>
                    <div className='zan-loading-examples-demo'>hello word</div>
                </BlockLoading>
            </Demo>
            <Demo md={fullScreen} title='基础用法'>
                <FullScreenLoading loading={fullLoading} iconText='上传中' showBackground/>
                <Button onClick={() => setFullLoading(true)}>全局开启</Button>
                <Button  onClick={() => setFullLoading(false)} style={{zIndex: 9999}}>关闭</Button>
            </Demo>
            <MdBasic md={api}/>
        </div>
    )
}