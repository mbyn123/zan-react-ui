import React from "react";
import Carousel from "@lib/carousel/carousel";
import './styles/carousel.scss'

export default function (){
    return (
        <div>
            <div >
                <Carousel className='card-wrapper' autoPlay={true} autoplayInterval={1000} transitionDuration={800}>
                    <div className='card'>1</div>
                    <div className='card'>2</div>
                    <div className='card'>3</div>
                    <div className='card'>4</div>
                </Carousel>
            </div>

        </div>
    )
}