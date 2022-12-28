```tsx
import React, {useState} from "react";
import { Slider } from 'zan-react-ui';

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


function App(){
    const [value, setValue] = useState<[number, number]>([10, 50])

    const onChange = (value: [number, number]) => {
        setValue(value)
    }
    
    return  (
       <div>
           <Slider range dots marks={marks} value={value} onChange={onChange}/>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```