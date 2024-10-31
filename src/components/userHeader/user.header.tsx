'use client'
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Dropdown,
    DropdownTrigger,
    Avatar,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/react";
import Image from 'next/image'
import LogoApp from "../../../public/assets/images/Logo.svg";

export default function UserHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn] = useState(false);
    const menuItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Về chúng tôi", href: "/about" },
        { label: "Liên hệ", href: "/contact" },
        { label: "Dịch vụ", href: "/services" },
        { label: "Shop", href: "/shop" },
    ];
    const profileItems = [
        { label: "Trang cá nhân", href: "/" },
        { label: "Đổi mật khẩu", href: "/about" },
        { label: "Lịch sử đặt hàng", href: "/contact" },
        { label: "Danh sách thú cưng", href: "/services" },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="border p-1">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image

                        src={LogoApp}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) =>
                (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}


            </NavbarContent>
            <NavbarContent justify="end">
                {isLoggedIn ? (
                    <>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">

                                {profileItems.map((item, index) => (
                                    <DropdownItem key={`${item}-${index}`} className="h-14 gap-2">
                                        {item.label}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </>
                ) : (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#" >Đăng ký</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} href="#" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" variant="flat">
                                Đăng nhập
                            </Button>
                        </NavbarItem>
                    </>

                )}

            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
