import React from "react";
import Button from "@lib/button/button";

export default function () {

    return (
        <div>
            <div>

                <Button type='primary'  className='my-button'>主按钮</Button>
                <Button >次按钮</Button>
                <Button type="text"> 文字按钮</Button>
                <Button type='link'>链接按钮</Button>
                <Button type='danger'>危险按钮</Button>
            </div>
            <div>
                <Button outline type='primary'>主按钮</Button>
                <Button outline type='danger'>危险按钮</Button>
            </div>
            <div>
                <Button size='large' type='primary' icon='setting'>大号按钮</Button>
                <Button type='primary'>正常按钮</Button>
                <Button size='small' type='primary' icon='setting'>小号按钮</Button>
            </div>
            <div>
                <Button icon="folder" type='text'/>
                <Button type="primary" loading onClick={() => alert('2222')}>按钮</Button>
                <Button disabled onClick={() => alert('1111')}>禁用按钮</Button>
            </div>
        </div>
    )
}

