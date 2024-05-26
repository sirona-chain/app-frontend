import { Eczar } from "next/font/google";
import { Yeseva_One } from "next/font/google";
import "./styles.css";
import React from "react";

const eczar = Eczar({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-eczar",
});
const yeseva_one = Yeseva_One({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-yeseva_one",
    weight: "400",
});

export default function Layout({ children }: any) {
    return (
        <React.StrictMode>
            <html lang="en">
                <body className={eczar.variable + " " + yeseva_one.variable}>
                    {children}
                </body>
            </html>
        </React.StrictMode>
    );
}
