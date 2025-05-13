"use client";

import { useConversation } from "@11labs/react";
import { useState } from "react";

export default function VoiceAgent() {
    const [started, setStarted] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);

    const conversation = useConversation({
        onConnect: () => console.log("Connected"),
        onDisconnect: () => console.log("Disconnected"),
        onMessage: (msg) => {
            console.log("Message:", msg);
            setMessages((prev) => [...prev, JSON.stringify(msg)]);
        },
        onError: (err) => console.error("Error:", err),
    });

    const startChat = async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            await conversation.startSession({ agentId: "LPfDBwxyOhTo24f8Ehjt" });
            setStarted(true);
        } catch (err) {
            console.error("Microphone error or session failed:", err);
            alert("Please allow microphone access.");
        }
    };

    const endChat = async () => {
        await conversation.endSession();
        setStarted(false);
    };

    return (
        <div className="p-4 border rounded-xl shadow-md w-fit mx-auto my-8 text-center">
            <h3 className="text-lg font-semibold mb-2">Need help? Talk to our AI agent!</h3>
            {!started ? (
                <button
                    type="button"
                    onClick={startChat}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Start Voice Chat
                </button>
            ) : (
                <button
                    type="button"
                    onClick={endChat}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    End Chat
                </button>
            )}

            {/* Optional: Show agent messages */}
            {messages.length > 0 && (
                <div className="mt-4 text-left max-w-md mx-auto">
                    {messages.map((m, i) => (
                        <p key={i} className="text-sm text-gray-600 mb-1">
                            {m}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
