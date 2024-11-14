
import CardGroup from '@/components/main/card.group';
import MainSlider from '@/components/main/main.slider';
import ShopSlider from '@/components/main/slider.shop';
import SortService from '@/components/sortService/page';
import { Button } from '@nextui-org/react';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { HiViewfinderCircle } from 'react-icons/hi2';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Text Section */}
                <div className="flex items-center order-1 lg:order-1">
                    <div className="w-full text-center bg-cover p-6 ">
                        <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-lg mx-auto leading-snug">
                            Mang đến sự chăm sóc tốt nhất cho người bạn thân yêu!
                        </p>
                        <p className="font-light text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg mx-auto mt-4">
                            Việc tìm kiếm một người trông thú cưng tốt và đáng tin cậy tại địa phương không hề dễ dàng. Và chúng tôi ở đây để giúp bạn.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <Button
                                size="md"
                                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-sm sm:text-base md:text-lg px-6"
                                endContent={<FaArrowAltCircleRight size={20} />}
                            >
                                Khám phá ngay
                            </Button>
                            <Button
                                size="md"
                                variant="light"
                                className="text-sm sm:text-base md:text-lg px-6"
                                endContent={<HiViewfinderCircle size={20} />}
                            >
                                Tìm hiểu thêm
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Card Group Section */}
                <div className="order-2 lg:order-2 p-4">
                    <CardGroup />
                </div>
            </div>

            {/* Featured Services Section */}
            <div className="text-center mt-8">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Dịch vụ nổi bật
                </p>
            </div>

            {/* Sort Services and Card Services Sections */}
            <div className="mt-6">
                <SortService />
            </div>
            <div className="my-4">
                <MainSlider />
            </div>
            <div className="text-center mt-8">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Shop nổi bật
                </p>
            </div>
            <div className="mt-6">
                <SortService />
            </div>
            <div className="my-4">
                <ShopSlider />
            </div>

        </div>
    );
};

export default HomePage;
