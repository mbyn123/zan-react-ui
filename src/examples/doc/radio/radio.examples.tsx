import React, {useState} from "react";
import Radio, {IRadioEvent} from "@lib/radio/radio";
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import unusable from './unusable.md'
import api from './api.md'

const RadioGroup = Radio.RadioGroup

export default function () {

    const [radioValue, setRadioValue] = useState(1)
    const [radioValue2, setRadioValue2] = useState(1)

    const radioChange = (e: IRadioEvent<number>) => {
        setRadioValue(e.target.value)
    }

    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基础用法'>
                <RadioGroup value={radioValue} onChange={radioChange} >
                    <Radio value={1} disabled>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
            </Demo>
            <Demo md={unusable} title='禁用'>
                <RadioGroup value={radioValue2} disabled onChange={(e)=>setRadioValue2(e.target.value)} >
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
            </Demo>
            <MdBasic md={api}/>

        </div>
    )
}