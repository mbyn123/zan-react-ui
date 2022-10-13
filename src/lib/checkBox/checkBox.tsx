import React, {useContext} from "react";
import classNames from "classnames";
import {scopedClassMaker} from "@/utils/classes"
import './checkBox.scss'
import groupContext from "@lib/checkBox/GroupContext";
import CheckboxGroup from './checkBoxGroup'

export interface ICheckboxEvent {
    target: {
        checked: boolean
    }
}

interface CheckBoxProps<Value> {
    value?: Value
    checked?: boolean
    className?: string
    children?: React.ReactNode
    onChange?: (e: ICheckboxEvent) => void
    indeterminate?: boolean
    disabled?: boolean
    style?: React.CSSProperties
    labelStyle?: React.CSSProperties
}

const sc = scopedClassMaker('zan-checkbox')

export default function CheckBox<Value>(props: CheckBoxProps<Value>) {
    const {className, children, indeterminate, disabled, style, labelStyle} = props

    const groupCtx = useContext(groupContext)
    const ctxChange = groupCtx?.onChange

    const onchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (ctxChange) {
            ctxChange(props.value)
            return
        }
        props.onChange && props.onChange(e)
    }

    let checked: boolean
    if (!groupCtx) {
        checked = !!props.checked
    } else {
        const {value, isValueEqual} = groupCtx
        if(!value || !isValueEqual){
            checked = false
        }else{
            checked = value.findIndex(item => isValueEqual(item, props.value)) !== -1
        }
    }

    return (
        <label className={classNames(sc('wrapper'), className, {
            [sc('checked')]: checked,
            [sc('disabled')]: disabled,
            [sc('indeterminate')]: indeterminate
        })} style={style}>
            <span className={sc('')}>
                <span className={sc('inner')}/>
                <input type="checkbox" onChange={onchange}/>
            </span>
            {
                children && <div className={sc('label')} style={labelStyle}>{children}</div>
            }
        </label>
    )
}

CheckBox.CheckboxGroup = CheckboxGroup