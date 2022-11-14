import React, {useState} from "react";
import BlockLoading from "@lib/loading/blockLoading";
import './styles/loading.examples.scss'
import FullScreenLoading from "@lib/loading/FullScreenLoading";
import Button from "@/lib/button/button";
import Switch from "@lib/switch/switch";

export default function () {
    const [fullLoading, setFullLoading] = useState(false)
    const [blockLoading, setBlockLoading] = useState(false)
    return (
        <div>
            <Switch checked={blockLoading} onChange={(v)=> setBlockLoading(v)}/>
            <BlockLoading loading={blockLoading}>
                <div className='zan-loading-examples-demo'>hello word</div>
            </BlockLoading>

            <FullScreenLoading loading={fullLoading} iconText='上传中' showBackground/>
            <Button onClick={() => setFullLoading(true)}>全局开启</Button>
            <Button  onClick={() => setFullLoading(false)} style={{zIndex: 9999}}>关闭</Button>
        </div>
    )
}