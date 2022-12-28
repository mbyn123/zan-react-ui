```tsx
import React, {useState} from "react";
import { CheckBox } from 'zan-react-ui';
import {ICheckboxEvent} from "zan-react-ui/lib/checkBox/checkBox";

function App(){
    const [checked,setChecked] = useState(false)

    const onChange = (e:ICheckboxEvent)=>{
        setChecked(e.target.checked)
    }
    
    return  <CheckBox checked={checked}  onChange={onChange}>CheckBox</CheckBox>
}

ReactDOM.render(
    <App/>
	, mountNode
);
```