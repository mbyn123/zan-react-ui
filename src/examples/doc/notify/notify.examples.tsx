import React from "react";
import Notify from "@lib/notify/notify";
import Button from "@lib/button/button";
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import duration from './duration.md'
import callback from './callback.md'
import clearMd from './clear.md'
import api from './api.md'

export default function () {

    const clear = ()=>{
        // const id =  Notify.success('成功提示')
        // console.log(id);
        Notify.clear()
    }

    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基础用法'>
                <Button onClick={() => Notify.info('常规提示')}>常规提示</Button>
                <Button onClick={() => Notify.success('成功提示')}>成功提示</Button>
                <Button onClick={() => Notify.error('错误提示')}>错误提示</Button>
                <Button onClick={() => Notify.warn('警告通知')}>警告通知</Button>
            </Demo>
            <Demo md={duration} title='持续时间'>
                <Button onClick={() => Notify.info('常规提示',1000)}>持续时间1s</Button>
                <Button onClick={() => Notify.success('成功提示',2000)}>持续时间2s</Button>
                <Button onClick={() => Notify.error('错误提示',3000)}>持续时间3s</Button>
                <Button onClick={() => Notify.warn('警告通知',4000)}>持续时间4s</Button>
            </Demo>
            <Demo md={callback} title='自定义通知结束回调'>
                <Button onClick={() => Notify.info('常规提示',1000,()=>alert('回调执行'))}>自定义通知结束回调</Button>
            </Demo>
            <Demo md={clearMd} title='清除所有提示'>
                <Button onClick={clear}>清除所有提示</Button>
            </Demo>
            <MdBasic md={api}/>
        </div>
    )
}