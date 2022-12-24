```tsx
import React, {useState} from "react";
import { Slider } from 'zent';


function App(){
    const [value, setValue] = useState<number>(10)
    return  (
       <div>
           <Slider value={value} onChange={(value)=>setValue(value)}/>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```