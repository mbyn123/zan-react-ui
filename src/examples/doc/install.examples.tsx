import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import markdown from './md/install.md'
import markdown2 from './md/install2.md'


import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function (){
    return (
        <div className="markdown-body" >
            <ReactMarkdown children={markdown2} remarkPlugins={[remarkGfm]} />
            <ReactMarkdown
                children={markdown}
                components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={oneLight}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    )
}