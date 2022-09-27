import React from "react";
import Button from "@lib/button/button";

export default function(){

    return(
        <div>
            <div>
                <Button>主按钮</Button>
                <Button type='primary'  className='my-button'>主按钮</Button>
                <Button type="text" > 文字按钮</Button>
                <Button type='link'  href='https://www.baidu.com' target='_blank'>链接按钮</Button>
                <Button type='danger'>主按钮</Button>
                <Button disabled>按钮</Button>
            </div>
            <div>
                <Button size='large' >大号按钮</Button>
                <Button >正常按钮</Button>
                <Button size='small'>小号按钮</Button>
            </div>
        </div>
    )
}