'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { FaArrowAltCircleRight } from "react-icons/fa";


const MainSlider = () => {

    const NextArrow = (props: any) => {
        return (
            <Button isIconOnly color="danger" onClick={props.onClick}>
                <FaArrowAltCircleRight />
            </Button>
        )
    }
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        NextArrow: <NextArrow />,
        Previ: <NextArrow />,
        speed: 500

    };
    return (
        <div className="slider-container">

            <Slider {...settings}>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>1</h3>
                </div>

                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}
export default MainSlider;