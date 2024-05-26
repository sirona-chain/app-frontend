export async function getConversationsByUserId(userId: string) {
    const result = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}conversations?user_id=${userId}`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return await result.json();
}

export async function createConversationsByUserId(userId: string) {
    const result = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}conversations?user_id=${userId}`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return await result.json();
}

export async function sendMessageAndGetResponse(
    userId: string,
    conversationId: string,
    input: string
) {
    const result = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}conversations/${conversationId}/messages?user_id=${userId}`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ input }),
        }
    );

    if (!result.ok) {
        throw new Error("Failed to send message");
    }

    return await result.json();
}

export async function signUpIn(email: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/signup`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        }
    );
    return await response.json();
}
