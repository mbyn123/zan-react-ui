import React from "react";
import Icon from "@lib/icon/icon"
import Notify from "@lib/notify/notify";
import {scopedClassMaker} from "@/utils/classes";
import './icon.examples.scss'
import {copy} from './copy'
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import api from './api.md'
import spinMd from './spin.md'

const sc = scopedClassMaker('zan-icon-demo')

function IconDemo(props: { name: string, spin?: boolean }) {
    const {name, spin} = props

    const clickCopy = () => {
        copy(spin?`<Icon name='${name}' spin/>`:`<Icon name='${name}'/>`, () => Notify.success(`${name}已复制到剪切板`))
    }

    return (
        <div className={sc('wrapper')} onClick={clickCopy}>
            <div className={sc('inner')}>
                <Icon name={name} spin={spin}/>
            </div>
            <div className={sc('name')}>{name}</div>
        </div>
    )
}

export default function () {
    return (
        <div>
            <MdBasic md={handbook}/>
            <Demo md={basic} title='React组件方式使用'>
                <IconDemo name='query'/>
            </Demo>
            <Demo md={spinMd} title='旋转动画'>
                <IconDemo name='loading' spin/>
            </Demo>
            <Demo>
                <div className={sc('')}>

                    <IconDemo name='setting'/>
                    <IconDemo name='query'/>
                    <IconDemo name='examine'/>
                    <IconDemo name='folder'/>
                    <IconDemo name='logout'/>
                    <IconDemo name='close'/>
                    <IconDemo name='left'/>
                    <IconDemo name='right'/>
                    <IconDemo name='top'/>
                    <IconDemo name='down'/>
                    <IconDemo name='edit'/>
                    <IconDemo name='document-copy'/>
                    <IconDemo name='finished'/>
                    <IconDemo name='folder-checked'/>
                    <IconDemo name='food'/>
                    <IconDemo name='football'/>
                    <IconDemo name='fork-spoon'/>
                    <IconDemo name='full-screen'/>
                    <IconDemo name='goblet'/>
                    <IconDemo name='goblet-full'/>
                    <IconDemo name='grape'/>
                    <IconDemo name='guide'/>
                    <IconDemo name='headset'/>
                    <IconDemo name='heavy-rain'/>
                    <IconDemo name='help'/>
                    <IconDemo name='hot-water'/>
                    <IconDemo name='house'/>
                    <IconDemo name='ice-cream'/>
                    <IconDemo name='ice-cream-round'/>
                    <IconDemo name='ice-cream-square'/>
                    <IconDemo name='ice-tea'/>
                    <IconDemo name='key'/>
                    <IconDemo name='knife-fork'/>
                    <IconDemo name='location-outline'/>
                    <IconDemo name='map-location'/>
                    <IconDemo name='a-1_1'/>
                    <IconDemo name='add'/>
                    <IconDemo name='archive'/>
                    <IconDemo name='arrow_back'/>
                    <IconDemo name='arrow_drop_down'/>
                    <IconDemo name='arrow_drop_up'/>
                    <IconDemo name='arrow_left'/>
                    <IconDemo name='arrow_right'/>
                    <IconDemo name='calendar_today'/>
                    <IconDemo name='card_view'/>
                    <IconDemo name='check'/>
                    <IconDemo name='close_fullscreen'/>
                    <IconDemo name='compare_arrows'/>
                    <IconDemo name='contacts'/>
                    <IconDemo name='control_point_duplicate'/>
                    <IconDemo name='delete'/>
                    <IconDemo name='drag_indicator'/>
                    <IconDemo name='file_download'/>
                    <IconDemo name='filter_list'/>
                    <IconDemo name='fit_screen'/>
                    <IconDemo name='folder'/>
                    <IconDemo name='info'/>
                    <IconDemo name='list_view'/>
                    <IconDemo name='logout'/>
                    <IconDemo name='menu'/>
                    <IconDemo name='more_horiz'/>
                    <IconDemo name='more_vert'/>
                    <IconDemo name='notifications'/>
                    <IconDemo name='open_in_full'/>
                    <IconDemo name='person'/>
                    <IconDemo name='person_add'/>
                    <IconDemo name='refresh'/>
                    <IconDemo name='remove'/>
                    <IconDemo name='rotate_90_degrees_ccw'/>
                    <IconDemo name='save'/>
                    <IconDemo name='search'/>
                    <IconDemo name='sort'/>
                    <IconDemo name='timer'/>
                    <IconDemo name='warning_amber'/>
                    <IconDemo name='gouxuankuanglig'/>
                    <IconDemo name='guanbi'/>
                </div>
            </Demo>

            <MdBasic md={api}/>
        </div>

    )
}