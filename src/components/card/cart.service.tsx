'use client';
import { Card, CardHeader, CardBody, Image, Divider, CardFooter } from "@nextui-org/react";
import ServiceDetails from "../details/service.detail";

interface IService {
    ServiceName: string;
    company: string;
    address: string;
    rate: string;
    price: string;
    index?: number;
}

export default function CardService(props: IService) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5" key={props.index}>
            <Card className="py-4 mt-4 w-full sm:w-[250px] md:w-[300px]" >
                <CardBody className="overflow-visible py-1" >
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    {/* Service Name */}
                    <p
                        className="text-xl uppercase font-bold truncate w-full"
                        title={props.ServiceName} // Tooltip for full text
                    >
                        {props.ServiceName}
                    </p>

                    {/* Company */}
                    <small
                        className="text-default-500 text-lg truncate w-full"
                        title={props.company}
                    >
                        {props.company}
                    </small>

                    {/* Address */}
                    <h4
                        className="font-bold text-base truncate w-full"
                        title={props.address}
                    >
                        {props.address}
                    </h4>

                    {/* Price */}
                    <p className="text-lg mt-2 font-semibold">
                        Giá: {props.price}
                    </p>
                </CardHeader>
                <Divider />
                <CardFooter>
                    <div className="w-full">
                        <ServiceDetails />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
