```tsx
import React, {useState} from "react";
import { FullScreenLoading } from 'zan-react-ui';

function App(){
    const [fullLoading, setFullLoading] = useState(false)
    
    return  (
       <div>
           <FullScreenLoading loading={fullLoading} iconText='上传中' showBackground/>
           <Button onClick={() => setFullLoading(true)}>全局开启</Button>
           <Button  onClick={() => setFullLoading(false)} style={{zIndex: 9999}}>关闭</Button>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```