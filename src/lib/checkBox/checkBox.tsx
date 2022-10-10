import React from "react";
import classNames from "classnames";
import {scopedClassMaker} from "@/utils/classes"
import './checkBox.scss'

export interface ICheckboxEvent {
    target: {
        checked: boolean
    }
}

interface CheckBoxProps {
    checked?: boolean
    className?: string
    children?: React.ReactNode
    onChange?: (e: ICheckboxEvent) => void
    indeterminate?: boolean
    disabled?: boolean
}

const sc = scopedClassMaker('zan-checkbox')

const CheckBox: React.FC<CheckBoxProps> = (props) => {
    const {className, children, indeterminate, disabled} = props

    const onchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange && props.onChange(e)
    }

    return (
        <label className={classNames(sc('wrapper'), className, {
            [sc('checked')]: props.checked,
            [sc('disabled')]:disabled,
            [sc('indeterminate')]: indeterminate
        })}>
            <span className={sc('')}>
                <span className={sc('inner')}/>
                <input type="checkbox" onChange={onchange}/>
            </span>
            {
                children && <div className={sc('label')}>{children}</div>
            }
        </label>
    )
}

export default CheckBox