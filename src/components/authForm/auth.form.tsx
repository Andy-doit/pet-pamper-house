import {
    Button,
    Checkbox,
    Divider,
    Input,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { BiMailSend, BiUser } from "react-icons/bi";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";

const LoginForm = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isVisible, setIsVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

    const toggleVisibility = () => setIsVisible(!isVisible);

    const switchToSignup = () => {
        setIsLogin(false);
    };

    const switchToLogin = () => {
        setIsLogin(true);
    };

    const handleClose = () => {
        setIsLogin(true); // Reset to login form on modal close
        onOpenChange();
    };

    return (
        <>
            <Button
                size="sm"
                onPress={onOpen}
                href="#"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                variant="flat"
            >
                Đăng nhập
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={(isOpen) => {
                    if (!isOpen) handleClose(); // Reset when closing
                }}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center gap-1 text-2xl uppercase bg-gray-900 text-orange-400">
                                {isLogin ? "Đăng nhập" : "Đăng ký"}
                            </ModalHeader>
                            <Divider />
                            <ModalBody>
                                {isLogin ? (
                                    <>
                                        {/* Login Form */}
                                        <Input
                                            autoFocus
                                            endContent={
                                                <BiUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                            }
                                            label="Tên đăng nhập"
                                            placeholder="Nhập tên đăng nhập"
                                            variant="bordered"
                                        />
                                        <Input
                                            label="Mật khẩu"
                                            variant="bordered"
                                            placeholder="Nhập mật khẩu"
                                            endContent={
                                                <button
                                                    className="focus:outline-none"
                                                    type="button"
                                                    onClick={toggleVisibility}
                                                    aria-label="toggle password visibility"
                                                >
                                                    {isVisible ? (
                                                        <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                                                    ) : (
                                                        <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                                                    )}
                                                </button>
                                            }
                                            type={isVisible ? "text" : "password"}
                                        />
                                        <div className="flex py-2 px-1 justify-between">
                                            <Checkbox
                                                classNames={{
                                                    label: "text-small",
                                                }}
                                            >
                                                Lưu thông tin đăng nhập
                                            </Checkbox>
                                            <Link color="primary" href="#" size="sm">
                                                Quên mật khẩu
                                            </Link>
                                        </div>
                                        <div className="flex py-1 px-1 justify-between">
                                            <p>
                                                Chưa có tài khoản?{" "}
                                                <Link
                                                    color="primary"
                                                    href="#"
                                                    size="sm"
                                                    onClick={switchToSignup}
                                                >
                                                    Đăng ký ngay
                                                </Link>
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Signup Form */}
                                        <Input
                                            autoFocus
                                            endContent={
                                                <BiUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                            }
                                            label="Họ người dùng"
                                            placeholder="Nhập họ người dùng"
                                            variant="bordered"
                                        />
                                        <Input
                                            autoFocus
                                            endContent={
                                                <BiUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                            }
                                            label="Tên người dùng"
                                            placeholder="Nhập tên người dùng"
                                            variant="bordered"
                                        />
                                        <Input
                                            autoFocus
                                            endContent={
                                                <BiUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                            }
                                            label="Tên đăng nhập"
                                            placeholder="Nhập tên đăng nhập"
                                            variant="bordered"
                                        />
                                        <Input
                                            label="Email"
                                            variant="bordered"
                                            placeholder="Nhập email"
                                            endContent={
                                                <BiMailSend className="text-2xl text-default-400 pointer-events-none" />
                                            }
                                        />
                                        <Input
                                            label="Mật khẩu"
                                            variant="bordered"
                                            placeholder="Nhập mật khẩu"
                                            endContent={
                                                <button
                                                    className="focus:outline-none"
                                                    type="button"
                                                    onClick={toggleVisibility}
                                                    aria-label="toggle password visibility"
                                                >
                                                    {isVisible ? (
                                                        <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                                                    ) : (
                                                        <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                                                    )}
                                                </button>
                                            }
                                            type={isVisible ? "text" : "password"}
                                        />
                                        <div className="flex py-1 px-1 justify-between">
                                            <p>
                                                Đã có tài khoản?{" "}
                                                <Link
                                                    color="primary"
                                                    href="#"
                                                    size="sm"
                                                    onClick={switchToLogin}
                                                >
                                                    Đăng nhập
                                                </Link>
                                            </p>
                                        </div>
                                    </>
                                )}
                            </ModalBody>
                            <Divider />
                            <ModalFooter>
                                <Button variant="flat" onPress={onClose}>
                                    Đóng
                                </Button>
                                <Button
                                    size="md"
                                    href="#"
                                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                                    variant="flat"
                                >
                                    {isLogin ? "Đăng nhập" : "Đăng ký"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default LoginForm;

