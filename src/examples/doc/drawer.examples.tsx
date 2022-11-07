import React, {useState} from "react";
import Drawer from "@/lib/drawer/drawer";
import Button from "@/lib/button/button";


export default function () {

    const [visible, setVisible] = useState(false)

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div>
            <Button type='primary' onClick={() => setVisible(true)}>开启</Button>
            <Drawer visible={visible} onClose={onClose}>12231231</Drawer>
        </div>
    )
}