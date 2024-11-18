import {
    Button,
    Modal,
    ModalContent,
    Card,
    useDisclosure,
    Image,
} from "@nextui-org/react";
import Link from "next/link";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const ServiceDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div>
                <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                    onClick={onOpen}
                >
                    <FaEye size={20} className="ml-2" /> Xem chi tiết
                </Button>

                <Modal
                    size="5xl"
                    isOpen={isOpen}
                    onClose={onClose}
                    scrollBehavior="outside"
                >
                    <ModalContent>
                        <div className="rounded-lg">
                            {/* Header Section */}
                            <div
                                className="rounded-lg p-6 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url("https://i.pinimg.com/564x/11/e5/bd/11e5bd4736dbf8f404eb90bf306a0562.jpg")`,
                                }}
                            >
                                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                                    <div className="ml-0 md:ml-4">
                                        <p className="font-medium text-2xl md:text-4xl text-orange-600">
                                            Dịch Vụ Tắm Rửa
                                        </p>
                                        <p className="text-lg md:text-2xl text-white">An Spa</p>
                                        <p className="text-sm md:text-xl font-light text-white">
                                            Địa chỉ: Khu 2 Hoàng Dương, Thanh Ba, Phú Thọ
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="rounded-lg p-6">
                                <div className="flex justify-end mb-6">
                                    <Link href="/">
                                        <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full md:w-[350px]">
                                            <FaShoppingCart size={20} className="ml-2" />
                                            Đặt lịch
                                        </Button>
                                    </Link>
                                </div>
                                <p className="text-xl md:text-2xl font-medium">Giới thiệu</p>
                                <p className="text-base md:text-xl">Mô Tả</p>

                                <p className="text-xl md:text-2xl font-medium mt-6">
                                    Hình ảnh dịch vụ
                                </p>
                                <div className="mt-5 mb-5 flex justify-center">
                                    <div className="max-w-auto gap-2 grid grid-cols-12 grid-rows-2 px-8">
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
                                </div>

                                <p className="text-xl md:text-2xl mt-2 font-medium">Bảng giá</p>
                                <div className="mt-3"></div>

                                <p className="text-xl md:text-2xl mt-2 font-medium">Đánh giá</p>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
};

export default ServiceDetails;
