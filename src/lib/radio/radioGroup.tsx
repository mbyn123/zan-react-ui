import React, {useMemo} from "react";
import RadioGroupContext, {IRadioContext} from './groupContext'
import {IRadioEvent} from "@lib/radio/radio";
import classNames from "classnames";

interface IRadioGroupProps<Value> {
    value: Value
    disabled?: boolean
    onChange?: (e: IRadioEvent<Value>) => void
    children?: React.ReactNode
    isValueEqual?: (value1: Value, value2: Value) => boolean
    className?: string
}

export default function RadioGroup<Value>(props: IRadioGroupProps<Value>) {

    const {value, onChange, children, disabled, isValueEqual = Object.is, className} = props

    const contextValue = useMemo<IRadioContext<Value>>(() => ({
        value,
        disabled,
        isValueEqual,
        onRadioChange: onChange
    }), [value, onChange])

    return (
        <RadioGroupContext.Provider value={contextValue}>
            <div className={classNames('zan-radio-group', className)}>
                {children}
            </div>
        </RadioGroupContext.Provider>
    )
}