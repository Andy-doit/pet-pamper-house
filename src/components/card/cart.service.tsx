'use client'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface IService {
    ServiceName: string;
    company: string;
    address: string;
    rate: string;
    price: string;
}

export default function CardService(props: IService) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Card className="py-4 mt-4 w-full sm:w-[250px] md:w-[300px]">
                <CardBody className="overflow-visible py-1">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-xl uppercase font-bold truncate w-full" title={props.ServiceName}>
                        {props.ServiceName}
                    </p>
                    <small className="text-default-500 text-lg truncate w-full" title={props.company}>
                        {props.company}
                    </small>
                    <h4 className="font-bold text-base truncate w-full" title={props.address}>
                        {props.address}
                    </h4>
                    {/* <div className="flex">
                        <Rate className="flex" value={Number(service.rate)} />
                    </div> */}
                    <p className="text-lg mt-2 font-semibold">Giá: {props.price}</p>
                </CardHeader>
            </Card>
        </div>
    );
}
