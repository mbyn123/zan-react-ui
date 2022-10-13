import {createContext} from "react"

export interface ICheckBoxGroupContext<Value> {
    value?: Value[]
    isValueEqual?: (value1: Value, value2: Value) => boolean
    onChange?: (value: Value) => void
}


export default createContext<ICheckBoxGroupContext<any> | null>(null)