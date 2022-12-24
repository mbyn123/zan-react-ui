import React, {useState} from "react";
import Drawer from "@lib/drawer/drawer";
import Button from "@lib/button/button";
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import api from './api.md'

export default function () {

    const [visible, setVisible] = useState(false)

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基本用法'>
                <Button type='primary' onClick={() => setVisible(true)}>开启</Button>
                <Drawer visible={visible} onClose={onClose} >content</Drawer>
            </Demo>

            <MdBasic md={api}/>
        </div>
    )
}