import React, {useState} from "react";
import CheckBox, {ICheckboxEvent} from "@lib/checkBox/checkBox";
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import unusable from './unusable.md'
import checkAllMd from './checkAll.md'
import api from './api.md'

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
            <MdBasic md={handbook}/>
            <Demo md={basic} title='基础用法'>
                <CheckBox checked={checked}  onChange={onChange}>CheckBox</CheckBox>
            </Demo>
            <Demo md={unusable} title='不可用'>
                <CheckBox disabled/>
                <CheckBox disabled checked={true}/>
                <CheckBox disabled indeterminate />
            </Demo>

            <Demo md={checkAllMd} title='全选，在实现全选效果时，你可能会用到 `indeterminate` 属性'>
                <CheckBox checked={checkAll} indeterminate={indeterminate} onChange={changeAll}>全选</CheckBox>
                <CheckboxGroup value={group} onChange={changeGroup}>
                    <CheckBox key='1' value='1'>1</CheckBox>
                    <CheckBox key='2' value='2'>2</CheckBox>
                    <CheckBox key='3' value='3'>3</CheckBox>
                    <CheckBox key='4' value='4'>4</CheckBox>
                </CheckboxGroup>
            </Demo>
            <MdBasic md={api}/>
        </div>
    )
}