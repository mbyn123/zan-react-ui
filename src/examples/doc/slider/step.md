```tsx
import React, {useState} from "react";
import { Slider } from 'zent';


function App(){
    const [value, setValue] = useState<number>(1.5)
    return  (
       <div>
           <Slider max={2} min={1} step={0.1} value={value} onChange={(value)=>setValue(value)}/>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```