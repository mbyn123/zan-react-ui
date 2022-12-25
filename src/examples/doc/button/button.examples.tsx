import React from "react";
import {Button} from "@lib/index";
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import type from './type.md'
import size from './size.md'
import status from './status.md'
import api from './api.md'

export default function () {

    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基础用法'>
                <Button>按钮</Button>
            </Demo>
            <Demo md={type} title='按钮类型'>
                <Button type='primary' className='my-button'>主按钮</Button>
                <Button>次按钮</Button>
                <Button type="text"> 文字按钮</Button>
                <Button type='link'>链接按钮</Button>
                <Button type='danger'>危险按钮</Button>
                <Button outline type='primary'>主按钮</Button>
                <Button outline type='danger'>危险按钮</Button>
            </Demo>
            <Demo md={size} title='按钮大小'>
                <Button size='large' type='primary' icon='setting'>大号按钮</Button>
                <Button type='primary'>正常按钮</Button>
                <Button size='small' type='primary' icon='setting'>小号按钮</Button>
                <Button size='large' icon="folder"/>
                <Button icon="folder"/>
                <Button size='small' icon="folder"/>
            </Demo>
            <Demo md={status} title='按钮状态'>
                <Button type="primary" loading onClick={() => alert('2222')}>按钮</Button>
                <Button disabled onClick={() => alert('1111')}>禁用按钮</Button>
            </Demo>
            <MdBasic md={api}/>
        </div>
    )
}

