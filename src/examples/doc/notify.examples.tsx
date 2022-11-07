import React from "react";
import Notify from "@lib/notify/notify";
import Button from "@lib/button/button";

export default function () {

    const success = ()=>{
        const id =  Notify.success('成功提示')
        console.log(id);
        // Notify.clear(id)
    }

    return (
        <div>
            <Button onClick={() => Notify.info('常规提示', 1000, () => console.log('12132'))}>常规提示</Button>
            <Button onClick={success}>成功提示</Button>
            <Button onClick={() => Notify.error('错误提示')}>错误提示</Button>
            <Button onClick={() => Notify.warn('')}>警告通知</Button>
            <Button onClick={() => Notify.clear()}>清除所有提示</Button>
        </div>
    )
}