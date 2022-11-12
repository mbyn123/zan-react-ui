import React, {useState} from "react";
import Slider from "@lib/slider/slider";

export default function (){

    const [value,setValue] = useState(1.3)

    const onChange = (value:number)=>{
        setValue(value)
    }

    return (
        <div>
            <Slider  max={2} min={1} step={0.1} value={value} onChange={onChange}/>
        </div>
    )
}