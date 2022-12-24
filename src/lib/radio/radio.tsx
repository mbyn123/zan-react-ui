import React, {useContext} from 'react'
import classNames, {Value} from "classnames";
import {scopedClassMaker} from "@/utils/classes";
import RadioGroup from "@lib/radio/radioGroup";
import RadioGroupContext from './groupContext'
import './radio.scss'

export interface IRadioEvent<Value> extends Omit<React.ChangeEventHandler<HTMLInputElement>, 'target'> {
    target: {
        type: 'radio',
        checked: boolean
    } & RadioProps<Value>
}

interface RadioProps<Value> {
    value: Value
    children?: React.ReactNode
    className?: string
    disabled?: boolean
    onChange?: (e: IRadioEvent<Value>) => void
    style?: React.CSSProperties
    labelStyle?: React.CSSProperties
}

const sc = scopedClassMaker('zan-radio')

function Radio(props: RadioProps<Value>) {

    const {children, className, value, disabled,style, labelStyle,...rest} = props

    const radioGroupCtx = useContext(RadioGroupContext)

    let checked: boolean

    if (!radioGroupCtx) {
        checked = !!value
    } else {
        if (!radioGroupCtx.isValueEqual || !value || !radioGroupCtx.value) {
            checked = false
        } else {
            checked = radioGroupCtx.isValueEqual(value, radioGroupCtx.value)
        }
    }

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (disabled || radioGroupCtx?.disabled) {
            return
        }
        const ctxChange = radioGroupCtx && radioGroupCtx.onRadioChange
        const e: IRadioEvent<Value> = Object.create(event)
        e.target = {
            ...props,
            type: 'radio',
            checked: event.target.checked
        }
        if (ctxChange) {
            ctxChange(e)
        } else {
            props.onChange && props.onChange(e)
        }
    }
    return (

        <label className={classNames('zan-radio-wrapper', className, {
            [sc('checked')]: checked,
            [sc('disabled')]: disabled || radioGroupCtx?.disabled
        })} style={style}>
                <span className="zan-radio">
                    <span className='zan-radio-inner'/>
                    <input {...rest} type="radio" checked={checked} onChange={onChange}/>
                </span>
            <span className="zan-radio-label" style={labelStyle}>{children}{checked}</span>
        </label>
    )
}


Radio.RadioGroup = RadioGroup
export default Radio