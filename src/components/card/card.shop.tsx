'use client'
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
    <Card className="max-w-[320px] w-full">
      <Divider />
      <CardHeader className="justify-between">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex justify-center">
            <Link href="/">
              <Avatar
                radius="full"
                src="https://nextui.org/avatars/avatar-1.png"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <Link
              href="/"
              className="text-lg font-semibold leading-none text-default-600 truncate"
              style={{
                maxWidth: '100%',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {props.company}
            </Link>
            <h5
              className="text-sm text-default-400 truncate"
              style={{
                maxWidth: '100%',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {props.address}
            </h5>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter className="gap-2 flex flex-col sm:flex-row justify-around">
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-default-400 text-sm truncate">{props.rate}</p>
          <p className="text-default-400 text-sm">lượt đánh giá</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-default-400 text-sm truncate">{props.order}</p>
          <p className="text-default-400 text-sm">lượt đặt hàng</p>
        </div>
      </CardFooter>
    </Card>
  );
}
