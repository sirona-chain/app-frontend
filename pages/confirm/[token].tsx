"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ConfirmEmail = () => {
    const router = useRouter();
    const { token } = router.query;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) return;

        const confirmEmail = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/confirm/${token}`,
                    {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    //console.log('Success:', data);
                    router.push("/chat"); // redirect to the chatroom
                } else {
                    throw new Error("Invalid or expired token");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        confirmEmail();
    }, [token]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return null;
};

export default ConfirmEmail;
