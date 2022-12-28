```tsx
import React, {useState} from "react";
import { Radio } from 'zan-react-ui';
import {IRadioEvent} from "zan-react-ui/lib/radio/radio";

const RadioGroup = Radio.RadioGroup

function App(){
    const [radioValue, setRadioValue] = useState(1)

    const radioChange = (e: IRadioEvent<number>) => {
        setRadioValue(e.target.value)
    }

    return  (
        <RadioGroup value={radioValue} onChange={radioChange} disabled>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </RadioGroup>
    )
}

ReactDOM.render(
    <App/>
    , mountNode
);
```