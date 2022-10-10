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
        </div>
    )
}