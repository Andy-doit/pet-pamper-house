import "../(public)/globals.css";
import { NextUIProvider } from "@nextui-org/react";



export default function TesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </body>
        </html>
    );
}
