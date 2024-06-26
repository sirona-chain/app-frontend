export function AchievementsComponent() {
    return (
        <div className="bg-gradient-to-b from-[#E6F4F1] to-[#D0E9E5] py-12 md:py-20 lg:py-28">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                        Your Achievements
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover the NFT achievements you have earned based on
                        your time spent with our therapists.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <div className="flex items-center">
                            <img
                                alt="Award NFT"
                                className="h-8 w-8"
                                height={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <h3 className="ml-4 text-lg font-medium text-gray-900">
                                1 Year Milestone
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Congratulations on reaching your 1 year milestone
                            with our therapy services.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <div className="flex items-center">
                            <img
                                alt="Blockchain NFT"
                                className="h-8 w-8"
                                height={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <h3 className="ml-4 text-lg font-medium text-gray-900">
                                2 Year Milestone
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            You have been with us for 2 years, a true testament
                            to your commitment to your mental health.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <div className="flex items-center">
                            <img
                                alt="Verified NFT"
                                className="h-8 w-8"
                                height={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <h3 className="ml-4 text-lg font-medium text-gray-900">
                                5 Year Milestone
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Wow, 5 years of working with our therapists. You are
                            an inspiration to us all.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <div className="flex items-center">
                            <img
                                alt="Growth NFT"
                                className="h-8 w-8"
                                height={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <h3 className="ml-4 text-lg font-medium text-gray-900">
                                10 Year Milestone
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            An incredible 10 years of progress and growth. We
                            are honored to have you as a client.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <div className="flex items-center">
                            <img
                                alt="Innovation NFT"
                                className="h-8 w-8"
                                height={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <h3 className="ml-4 text-lg font-medium text-gray-900">
                                15 Year Milestone
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Reaching 15 years with us is a true testament to
                            your dedication and our innovative approach.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <div className="flex items-center">
                            <img
                                alt="Impact NFT"
                                className="h-8 w-8"
                                height={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <h3 className="ml-4 text-lg font-medium text-gray-900">
                                20 Year Milestone
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            After 20 years, the positive impact you have had on
                            your life is truly remarkable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
