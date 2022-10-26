import React, {useMemo} from "react";
import RadioGroupContext, {IRadioContext} from './groupContext'
import {IRadioEvent} from "@lib/radio/radio";

interface IRadioGroupProps<Value> {
    value: Value
    onChange?: (e: IRadioEvent<Value>) => void
    children?: React.ReactNode
    isValueEqual?: (value1: Value, value2: Value) => boolean
}

export default function RadioGroup<Value>(props: IRadioGroupProps<Value>) {

    const {value, onChange, children, isValueEqual = Object.is} = props

    const contextValue = useMemo<IRadioContext<Value>>(() => ({
        value,
        isValueEqual,
        onRadioChange: onChange
    }), [value, onChange])

    return (
        <RadioGroupContext.Provider value={contextValue}>
            {children}
        </RadioGroupContext.Provider>
    )
}