import React from "react";
import Button from "@lib/button/button";

export default function(){

    return(
        <div>
            <Button>主按钮</Button>
            <Button type='primary'  className='my-button'>主按钮</Button>
            <Button type="text" > 文字按钮</Button>
            <Button type='danger'>主按钮</Button>
            <Button disabled>按钮</Button>
        </div>
    )
}