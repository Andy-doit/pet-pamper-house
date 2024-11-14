import React from "react";
import { Card, CardHeader, CardFooter, Avatar, Divider } from "@nextui-org/react";
import Link from "next/link";

interface IShop {
  company: string;
  address: string;
  rate: string;
  order: string;
}

export default function CardShop(props: IShop) {
  return (
    <Card className="max-w-[400px] w-full sm:max-w-[300px] md:max-w-[400px]">
      <Divider />
      <CardHeader className="justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex justify-center">
            <Link href="/">
              <Avatar
                radius="full"
                src="https://nextui.org/avatars/avatar-1.png"
                className="w-20 h-20 sm:w-24 sm:h-24"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-semibold leading-none text-default-600 truncate"
              style={{ maxWidth: '100%' }}
            >
              {props.company}
            </Link>
            <h5 className="text-sm md:text-base tracking-tight text-default-400 truncate" style={{ maxWidth: '100%' }}>
              {props.address}
            </h5>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter className="gap-3 flex flex-col sm:flex-row justify-around">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-sm md:text-base truncate">{props.rate}</p>
          <p className="text-default-400 text-sm md:text-base">lượt đánh giá</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-sm md:text-base truncate">{props.order}</p>
          <p className="text-default-400 text-sm md:text-base">lượt đặt hàng</p>
        </div>
      </CardFooter>
    </Card>
  );
}
