"use client";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { signUpIn } from "@/lib/api";

export function LandingPageComponent() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = await signUpIn(email);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#E6F4F1] to-[#D0E9E5]">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#0E4D4A]">
                                    Sirona - Your Trusted Therapy Companion
                                </h1>
                                <p className="max-w-[600px] text-[#4D6D6A] md:text-xl dark:text-[#4D6D6A]">
                                    Discover a personalized, secure, and
                                    seamless therapy experience with our
                                    AI-powered chatbot on sirona.help.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <form
                                    className="flex space-x-2 w-full"
                                    onSubmit={handleSubmit}
                                >
                                    <Input
                                        className="max-w-lg flex-1"
                                        placeholder="Enter your email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <Button
                                        className="inline-flex h-10 items-center justify-center rounded-full bg-[#0E4D4A] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0E4D4A]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0E4D4A] disabled:pointer-events-none disabled:opacity-50"
                                        type="submit"
                                        // variant="primary"
                                    >
                                        Start Chatting
                                    </Button>
                                </form>
                            </div>
                        </div>
                        <img
                            alt="Sirona Hero"
                            className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full lg:order-last"
                            height="550"
                            src="/sirona.png"
                            width="550"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <img
                            alt="Sirona Personalized Therapy"
                            className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src="/sironaIndividual.png"
                            width="310"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-full bg-[#D0E9E5] px-3 py-1 text-sm text-[#0E4D4A]">
                                    Personalized Therapy
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0E4D4A]">
                                    Tailored to Your Needs on Sirona
                                </h2>
                                <p className="max-w-[600px] text-[#4D6D6A] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#4D6D6A]">
                                    Our AI-powered chatbot on sirona.help adapts
                                    to your unique needs, providing personalized
                                    therapy sessions that address your specific
                                    concerns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#D0E9E5] to-[#E6F4F1]">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-full bg-[#E6F4F1] px-3 py-1 text-sm text-[#0E4D4A]">
                                    Secure Data Storage
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0E4D4A]">
                                    Protecting Your Privacy on Sirona
                                </h2>
                                <p className="max-w-[600px] text-[#4D6D6A] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#4D6D6A]">
                                    Your personal data is securely stored and
                                    encrypted on sirona.help, ensuring your
                                    privacy is protected at all times.
                                </p>
                            </div>
                        </div>
                        <img
                            alt="Sirona Secure Data Storage"
                            className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center sm:w-full"
                            height="310"
                            src="/sironaProtect2.png"
                            width="310"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <img
                            alt="Sirona Seamless Integration"
                            className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src="/sironaPara.png"
                            width="310"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-full bg-[#D0E9E5] px-3 py-1 text-sm text-[#0E4D4A]">
                                    Seamless Integration
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0E4D4A]">
                                    Connecting to Your Substrate Parachain on
                                    Sirona
                                </h2>
                                <p className="max-w-[600px] text-[#4D6D6A] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#4D6D6A]">
                                    Our chatbot on sirona.help seamlessly
                                    integrates with your Substrate parachain,
                                    allowing for a seamless and secure therapy
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
