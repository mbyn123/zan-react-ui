import React, {useState} from "react";
import Slider from "@lib/slider/slider";
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import step from './step.md'
import rang from './rang.md'
import api from './api.md'

export default function () {
    const [value, setValue] = useState<number>(10)
    const [value3, setValue3] = useState<number>(1.5)
    const [value2, setValue2] = useState<[number, number]>([10, 50])

    const onChange2 = (value: [number, number]) => {
        setValue2(value)
    }


    const marks = {
        0: '0°C',
        10: '10°C',
        20: '20°C',
        40: '40°C',
        50: '50°C',
        60: '60°C',
        70: '70°C',
        90: '90°C',
        100: '100°C'
    };


    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基础用法'>
                <Slider value={value} onChange={(value)=>setValue(value)}/>
            </Demo>
            <Demo md={step} title='设置最大值，最小值，间隔'>
                <Slider max={2} min={1} step={0.1} value={value3} onChange={(value)=>setValue3(value)}/>
            </Demo>
            <Demo md={rang} title='底部有标签值，选择范围，只能在标签值中选择'>
                <Slider range dots marks={marks}  value={value2} onChange={onChange2}/>
            </Demo>

            <MdBasic md={api}/>
        </div>
    )
}