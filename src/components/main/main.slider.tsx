'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceCards } from "../card/data"
import CardService from "../card/cart.service";

const MainSlider = () => {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500

    };
    return (
        <div className="slider-container">

            <Slider {...settings}>
                {ServiceCards.map((service, index) => (
                    <CardService key={index} {...service} />
                ))}
            </Slider>
        </div>
    )
}
export default MainSlider;