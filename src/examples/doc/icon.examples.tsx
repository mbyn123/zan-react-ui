import React from "react";
import Icon from "@lib/icon/icon"

export default function (){
    return (
        <div>
            <Icon name="loading" spin/>
            <Icon name="setting" className='my-icon'/>
            <Icon name="query" onClick={()=>console.log('12131231')}/>
            <Icon name="examine" onMouseMove={()=>console.log('456456456')}/>
            <Icon name="folder" style={{color:'red'}}/>
            <Icon name="logout"/>
            <Icon name="close"/>
            <Icon name="left"/>
            <Icon name="right"/>
        </div>
    )
}