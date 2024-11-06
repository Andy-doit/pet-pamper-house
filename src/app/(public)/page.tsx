import React from 'react';
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

const HomePage = () => {
    return (
        <div>
            <div
                className=" mx-auto bg-[url('https://i.pinimg.com/564x/76/d4/e6/76d4e6d0e84835bb6f34801e3b7d745c.jpg')] bg-repeat-x bg-center">
                <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-1 p-4 md:p-0">
                    <div className="md:col-span-3 md:row-span-3 md:col-start-2">
                        <div className="mx-auto py-3 md:py-5">
                            <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                                Mang đến sự chăm sóc tốt nhất cho người bạn thân yêu!
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center md:col-span-6 md:row-start-4 mt-4 md:mt-0">
                        <Button
                            className="w-full md:w-auto bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                            radius="sm"
                            size="sm"
                            endContent={<FaArrowCircleRight size={16} className="md:text-lg lg:text-xl" />}
                        >
                            Bắt đầu khám phá ngay
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
