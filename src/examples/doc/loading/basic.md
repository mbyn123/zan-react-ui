```tsx
import React, {useState} from "react";
import { BlockLoading } from 'zent';


function App(){
    const [blockLoading, setBlockLoading] = useState(false)
    
    return  (
       <div>
           <Switch checked={blockLoading} onChange={(v)=> setBlockLoading(v)}/>
           <BlockLoading loading={blockLoading}>
               <div className='zan-loading-examples-demo'>hello word</div>
           </BlockLoading>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```