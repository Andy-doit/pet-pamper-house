import UserHeader from "@/components/userHeader/user.header";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/footer/footer";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    <UserHeader />
                    {children}
                    <Footer />
                </NextUIProvider>
            </body>
        </html>
    );
}
