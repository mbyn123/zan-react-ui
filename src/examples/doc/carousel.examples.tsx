import React from "react";
import Carousel from "@lib/carousel/carousel";
import './styles/carousel.scss'

export default function () {

    const onChange = (currentIndex: number, prevIndex: number | null) => {
        console.log(currentIndex, prevIndex);
    }

    return (
        <div>
            <div>
                <Carousel className='card-wrapper' onChange={onChange} autoPlay={true} autoplayInterval={1000} transitionDuration={800}>
                    <div className='card'>1</div>
                    <div className='card'>2</div>
                    <div className='card'>3</div>
                    <div className='card'>4</div>
                </Carousel>
            </div>

        </div>
    )
}