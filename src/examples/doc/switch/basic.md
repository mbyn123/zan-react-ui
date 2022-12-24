```tsx
import React, {useState} from "react";
import { Switch } from 'zent';


function App(){
    const [checked, setChecked] = useState(false)

    const onChange = (checked: boolean) => {
        setChecked(checked)
    }
    
    return  (
       <div>
           <Switch size='small' checked={checked} onChange={onChange}/>
           <Switch checked={checked} onChange={onChange}/>
           <Switch size='large' checked={checked} onChange={onChange}/>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```