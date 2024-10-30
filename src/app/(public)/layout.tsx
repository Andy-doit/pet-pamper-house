import UserHeader from "@/components/userHeader/user.header";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";



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
                </NextUIProvider>
            </body>
        </html>
    );
}
