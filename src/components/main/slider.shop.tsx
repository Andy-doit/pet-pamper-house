'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Shop } from "../card/data"
import CardShop from "../card/card.shop";

const ShopSlider = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div className="slider-container py-4">


      <Slider {...settings}>
        {Shop.map((shopInfor, index) => (
          <div className="pb-3">
            <CardShop key={index} {...shopInfor} />
          </div>

        ))}
      </Slider>

    </div>
  )
}
export default ShopSlider;