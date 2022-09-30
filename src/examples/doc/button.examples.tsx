import React from "react";
import Button from "@lib/button/button";

export default function () {

    return (
        <div>
            <div>
                <Button>主按钮</Button>
                <Button type='primary' className='my-button'>主按钮</Button>
                <Button type="text"> 文字按钮</Button>
                <Button type='link'>链接按钮</Button>
                <Button type='danger'>主按钮</Button>
                <Button disabled onClick={() => alert('1111')}>按钮</Button>
            </div>
            <div>
                <Button size='large' type='primary' icon='setting'>大号按钮</Button>
                <Button type='primary'>正常按钮</Button>
                <Button size='small' type='primary' icon='setting'>小号按钮</Button>
            </div>
            <div>
                <Button type="primary" disabled loading onClick={() => alert('2222')}>按钮</Button>
            </div>
        </div>
    )
}

