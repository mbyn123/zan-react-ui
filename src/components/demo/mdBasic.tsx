import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

type PropsType ={
    md:string
}

const MdBasic:React.FC<PropsType> = ({md})=>{
    return (
        <div className='markdown-body'>
            <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} />
        </div>
    )
}

export default MdBasic