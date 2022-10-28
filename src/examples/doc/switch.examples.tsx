import React, {useState} from "react";
import Switch from "@lib/switch/switch";

export default function () {

    const [checked, setChecked] = useState(false)

    const [checked2, setChecked2] = useState(false)

    const onChange = (checked: boolean) => {
        setChecked(checked)
    }

    return (
        <div>
            <Switch size='small' checked={checked} onChange={onChange}/>
            <Switch checked={checked} onChange={onChange}/>
            <Switch size='large' checked={checked} onChange={onChange}/>
            <br/>
            <Switch disabled size='large' checked={checked2} onChange={(checked)=>setChecked2(checked)}/>
            <Switch disabled checked={true}/>
            <br/>
            <Switch loading checked={false}/>
            <Switch loading checked={true}/>
            <br/>
            <Switch loading size='large' checked={true}/>
            <Switch loading size='large' checked={false}/>
            <Switch loading size='small' checked={true}/>
            <Switch loading size='small' checked={false}/>
        </div>

    )
}