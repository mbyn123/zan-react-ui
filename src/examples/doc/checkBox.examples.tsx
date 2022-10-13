import React, {useState} from "react";
import CheckBox, {ICheckboxEvent} from "@lib/checkBox/checkBox";

const CheckboxGroup = CheckBox.CheckboxGroup

export default function (){

    const [checked,setChecked] = useState(false)

    const [group,setGroup] = useState<string[] | []>([])

    const onChange = (e:ICheckboxEvent)=>{
        setChecked(e.target.checked)
    }

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

            <CheckBox checked={checked}  onChange={onChange}>CheckBox</CheckBox>
            <br/>
            <CheckBox indeterminate>A</CheckBox>
            <br/>
            <CheckBox disabled/><br/>
            <CheckBox disabled checked={true}>B</CheckBox><br/>
            <CheckBox disabled indeterminate /> <br/>
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