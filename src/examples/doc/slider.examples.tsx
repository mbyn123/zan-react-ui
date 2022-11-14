import React, {useState} from "react";
import Slider from "@lib/slider/slider";

export default function () {

    const [value, setValue] = useState<[number, number]>([10, 50])

    const onChange = (value: [number, number]) => {
        setValue(value)
    }


    const marks = {
        0: '0°C',
        10: '10°C',
        20: '20°C',
        40: '40°C',
        50: '50°C',
        100: '100°C'
    };


    return (
        <div>
            <Slider range dots marks={marks} step={0.1} value={value} onChange={onChange}/>
        </div>
    )
}