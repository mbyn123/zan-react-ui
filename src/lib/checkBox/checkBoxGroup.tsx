import React from "react";
import GroupContext from "@lib/checkBox/GroupContext";

interface ICheckBoxGroupProps<Value> {
    value: Value[]
    onChange?: (value: Value[]) => void
    children: React.ReactNode
    isValueEqual?: (value1: Value, value2: Value) => boolean;

}

export default function CheckBoxGroup<Value>(props: ICheckBoxGroupProps<Value>) {

    const {value, children, isValueEqual} = props

    const getGroupContext = (maybeValue: Value[] | unknown) => {

        let value: Value[]

        if (Array.isArray(maybeValue)) {
            value = maybeValue
        } else {
            value = []
        }

        return {
            value,
            isValueEqual,
            onChange: onChangeCheckBoxGroup
        }
    }

    const onChangeCheckBoxGroup = (childValue: Value) => {
        const {onChange, value: prevValue, isValueEqual} = props
        if (!onChange || !isValueEqual) {
            return
        }
        const value = prevValue ? prevValue.slice() : []
        const index = value.findIndex(item => isValueEqual(item, childValue))

        if (index === -1) {
            value.push(childValue)
        } else {
            value.splice(index, 1)
        }
        onChange(value)
    }

    return (
        <GroupContext.Provider value={getGroupContext(value)}>
            <div>{children}</div>
        </GroupContext.Provider>
    )
}

CheckBoxGroup.defaultProps = {
    isValueEqual: Object.is,
    value: []
}