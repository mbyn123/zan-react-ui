```tsx
import React, {useState} from "react";
import { Dialog } from 'zent';


function App(){
    const [visible, setVisible] = useState(false)

    const close = () => {
        setVisible(false)
    }
    
    return  (
       <div>
           <Button type='primary' onClick={() => setVisible(true)}>显示</Button>
           <Dialog title='提示' visible={visible} onClose={close} onConfirm={close}>
               <div>
                   对话窗内容区域对话窗内容区域对话窗内容区域对
                   话窗内容区域对话窗内容区域对话窗内容区域
                   话窗内容区域对话窗内容区域对话窗内容区域
                   话窗内容区域对话窗内容区域对话窗内容区域
                   话窗内容区域对话窗内容区域对话窗内容区域
                   话窗内容区域对话窗内容区域对话窗内容区域
               </div>
           </Dialog>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```