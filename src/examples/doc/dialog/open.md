```tsx
import React from "react";
import { Dialog } from 'zan-react-ui';


function App(){
    const open = () => {
        Dialog.OpenDialog({
            title: '使用 openDialog 直接打开对话窗',
            content: <div>Hello World</div>,
            // footer: null,
            onConfirm: () => {
                console.log('confirm1')
            },
            onClose: () => {
                console.log('close1')
            }
        })
    }

    const open2 = async ()=>{
        const result = await Dialog.OpenDialog({
            title: '使用 openDialog 直接打开对话窗2',
            content: <div>Hello World</div>
        })
        console.log(result)
    }
    
    return  (
       <div>
           <Button type='primary' onClick={open}>打开</Button>
           <Button type='primary' onClick={open2}>打开2</Button>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```