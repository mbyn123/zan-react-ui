import React from "react";
import MdBasic from "@/components/demo/mdBasic";
import basicMd from './basic.md'
import MdCode from "@/components/demo/mdCode";
import instructions from './instructions.md'

export default function (){
    return (
        <div className="markdown-body" >
            <MdBasic md={basicMd}/>
            <MdCode md={instructions}/>
        </div>
    )
}