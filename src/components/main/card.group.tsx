'use client'
import { Card, Image } from "@nextui-org/react";

const CardGroup = () => {
    return (
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            <Card className="col-span-12 sm:col-span-4 h-[300px]">

                <Image
                    removeWrapper
                    alt="Card background"
                    isZoomed
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/a2/e9/70/a2e97087637b3b74ec16812e8480f5b3.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">

                <Image
                    removeWrapper
                    isZoomed
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/bb/24/35/bb2435b88d3a62905f978b00ee8783c1.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">

                <Image
                    removeWrapper
                    isZoomed
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/c0/71/ba/c071ba05045ff797ecdd7dc764b55fe5.jpg"
                />
            </Card>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">

                <Image
                    removeWrapper
                    isZoomed
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://i.pinimg.com/564x/b8/5c/f3/b85cf3f87c6abdfcfaa381d72d1a56dc.jpg"
                />
            </Card>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">

                <Image
                    removeWrapper
                    isZoomed
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/b2/75/e8/b275e8cca8f99f4ebf32dc675e7268a2.jpg"
                />

            </Card>
        </div>
    )
}
export default CardGroup