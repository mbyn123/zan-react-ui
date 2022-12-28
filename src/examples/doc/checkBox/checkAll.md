```tsx
import React, {useState} from "react";
import { CheckBox } from 'zan-react-ui';

const CheckboxGroup = CheckBox.CheckboxGroup

function App(){
    const changeGroup = (value:string[])=>{
        console.log(value)
        setGroup(value)
    }

    const changeAll = (e:ICheckboxEvent)=>{
        setGroup(e.target.checked?['1','2','3','4']:[])
    }

    const checkAll = !!(group.length && group.length === 4)

    const indeterminate = !!(group.length && group.length !== 4)

    return (
        <div>
            <CheckBox checked={checkAll} indeterminate={indeterminate} onChange={changeAll}>全选</CheckBox>
            <CheckboxGroup value={group} onChange={changeGroup}>
                <CheckBox key='1' value='1'>1</CheckBox>
                <CheckBox key='2' value='2'>2</CheckBox>
                <CheckBox key='3' value='3'>3</CheckBox>
                <CheckBox key='4' value='4'>4</CheckBox>
            </CheckboxGroup>
        </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```