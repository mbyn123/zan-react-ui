import React, {useState} from "react";
import Switch from "@lib/switch/switch";
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import unusable from './unusable.md'
import loading from './loading.md'
import api from './api.md'


export default function () {

    const [checked, setChecked] = useState(false)

    const [checked2, setChecked2] = useState(false)

    const onChange = (checked: boolean) => {
        setChecked(checked)
    }

    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基础用法'>
                <Switch size='small' checked={checked} onChange={onChange}/>&nbsp;&nbsp;
                <Switch checked={checked} onChange={onChange}/>&nbsp;&nbsp;
                <Switch size='large' checked={checked} onChange={onChange}/>
            </Demo>

            <Demo md={unusable} title='失效状态'>
                <Switch disabled size='large' checked={checked2} onChange={(checked)=>setChecked2(checked)}/>&nbsp;&nbsp;
                <Switch disabled checked={true}/>
            </Demo>

            <Demo md={loading} title='开关loading'>
                <Switch loading checked={false}/>&nbsp;&nbsp;
                <Switch loading checked={true}/>
            </Demo>
            <MdBasic md={api}/>

        </div>

    )
}