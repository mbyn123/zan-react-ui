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
            <Switch disabled size='large' checked={checked} onChange={onChange}/>
            <Switch disabled checked={true}/>
        </div>
    )
}

ReactDOM.render(
    <App/>
    , mountNode
);
```