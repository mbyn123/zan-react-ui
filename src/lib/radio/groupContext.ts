import {createContext} from 'react'
import {IRadioEvent} from "@lib/radio/radio";

export interface IRadioContext<Value> {
    value?: Value
    disabled?: boolean
    onRadioChange?: ((e: IRadioEvent<Value>) => void)
    isValueEqual?:(value1:Value,value2:Value)=>boolean
}

export default createContext<IRadioContext<any> | null>(null)

