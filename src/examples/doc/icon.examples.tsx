import React from "react";
import Icon from "@lib/icon/icon"

export default function (){
    return (
        <div>
            <Icon name="loading" style={{color:'red'}}/>
            <Icon name="setting" className='my-icon'/>
            <Icon name="query"/>
            <Icon name="examine"/>
            <Icon name="folder"/>
            <Icon name="logout"/>
        </div>
    )
}