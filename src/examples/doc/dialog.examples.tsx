import React, {useState} from "react";
import Dialog, {OpenDialog} from "@lib/dialog/dialog";
import Button from "@lib/button/button";

export default function () {
    const [visible, setVisible] = useState(false)

    const close = () => {
        setVisible(false)
    }

    const open = () => {
        OpenDialog({
            title: '使用 openDialog 直接打开对话窗',
            content: <div>Hello World</div>,
            // footer: null,
            onConfirm: () => {
                console.log('confirm1')
            },
            onClose: () => {
                console.log('close1')
            }
        })
    }

    const open2 = async ()=>{
        const result = await OpenDialog({
            title: '使用 openDialog 直接打开对话窗2',
            content: <div>Hello World</div>
        })
        console.log(result)
    }

    return (
        <div>
            <Dialog title='提示' visible={visible} onClose={close} onConfirm={close}>
                <div>
                    对话窗内容区域对话窗内容区域对话窗内容区域对
                    话窗内容区域对话窗内容区域对话窗内容区域
                    话窗内容区域对话窗内容区域对话窗内容区域
                    话窗内容区域对话窗内容区域对话窗内容区域
                    话窗内容区域对话窗内容区域对话窗内容区域
                    话窗内容区域对话窗内容区域对话窗内容区域
                </div>
            </Dialog>
            <Button type='primary' onClick={() => setVisible(true)}>显示</Button>
            <Button type='primary' onClick={open}>打开</Button>
            <Button type='primary' onClick={open2}>打开2</Button>
            <input type="checkbox" />
            <div style={{background:'red'}}>
                <img width={'50px'} height={'50px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAABGdBTUEAALGPC/xhBQAAASxJREFUOBGlkr9LQlEUx01Di1pCCKQhkAZxaMs/oFnwD3Bwqcmh0cnB0ak5HBwdHNyT5sDFIUIQxMXBQWgIIjB7fa7c+zjvvnfR9MCH8+t7vtOJxfYMz/OyMIIniB/u44dBhvs+ZCEHX7BbYHYGbyBjtpMbDifwKp2ol1D8tyFHSXgGGb805YAZg+PAIKJBE4cu2FH15WyOoA8fUPAXEQX7FthRD0jZdoRiQZ0PCHTDvCl0pnwMadlMzFbnGflSCulrlka1bTiQunXN8AY+QcaY5lwJyPdyoeseOREyMwOWt/CtxSYNKe5gZQY6v5BT5taZEZXgRx+50oDFqdPEXiCugPqpqHhnmLZvNvYcPUS4TZldbDx2CThuCNM59ZVLu/UcE/V36qWutz5C+AfE+OIwPOZePgAAAABJRU5ErkJggg==" alt=""/>
            </div>
        </div>
    )
}