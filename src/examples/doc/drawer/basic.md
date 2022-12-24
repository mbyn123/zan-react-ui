```tsx
import React, {useState} from "react";
import { Drawer } from 'zent';


function App(){
    const [checked, setChecked] = useState(false)

    const onChange = (checked: boolean) => {
        setChecked(checked)
    }
    
    return  (
       <div>
        <Button type='primary' onClick={() => setVisible(true)}>开启</Button>
            <Drawer visible={visible} onClose={onClose} >
                content
            </Drawer>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```