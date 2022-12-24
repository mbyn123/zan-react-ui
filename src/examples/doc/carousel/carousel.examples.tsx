import React, {useRef} from "react";
import Carousel from "@lib/carousel/carousel";
import './carousel.examples.scss'
import Demo from "@/components/demo/demo";
import MdBasic from "@/components/demo/mdBasic";
import handbook from './handbook.md'
import basic from './basic.md'
import api from './api.md'

export default function () {

    const onChange = (currentIndex: number, prevIndex: number | null) => {
        console.log(currentIndex, prevIndex);

    }


    return (
        <div>
            <div>
                <MdBasic md={handbook}/>
                <Demo md={basic} title='基础用法'>
                    <Carousel className='card-wrapper' onChange={onChange} autoPlay={false} >
                        <div className='card'>1</div>
                        <div className='card'>2</div>
                        <div className='card'>3</div>
                        <div className='card'>4</div>
                    </Carousel>
                </Demo>

                <MdBasic md={api}/>
            </div>

        </div>
    )
}