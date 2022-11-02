import React from "react";
import Notify,{info} from "@lib/notify/notify";
import Button from "@lib/button/button";

export default function (){
    return (
        <div>
            <Button onClick={()=> Notify.info('常规提示')}>常规提示</Button>
            <Button onClick={()=> Notify.success('成功提示')}>成功提示</Button>
            <Button onClick={()=> Notify.error('错误提示')}>错误提示</Button>
            <Button onClick={()=> Notify.warn('警告通知')}>警告通知</Button>
        </div>
    )
}