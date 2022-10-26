import React, {useState} from "react";
import Radio, {IRadioEvent, RadioGroup} from "@lib/radio/radio";

export default function () {

    const [radioValue, setRadioValue] = useState(1)

    const radioChange = (e: IRadioEvent<number>) => {
        setRadioValue(e.target.value)
    }

    return (
        <div>
            <RadioGroup value={radioValue} onChange={radioChange}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </RadioGroup>
        </div>
    )
}