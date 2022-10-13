import React, {useState} from "react";
import CheckBox,{ICheckboxEvent} from "@lib/checkBox/checkBox";

export default function (){

    const [checked,setChecked] = useState(false)

    const onChange = (e:ICheckboxEvent)=>{
        setChecked(e.target.checked)
    }

    return (
        <div>

            <CheckBox checked={checked}  onChange={onChange}>CheckBox</CheckBox>
            <br/>
            <CheckBox indeterminate>A</CheckBox>
            <br/>
            <CheckBox disabled/><br/>
            <CheckBox disabled checked={true}>B</CheckBox><br/>
            <CheckBox disabled indeterminate />
        </div>
    )
}