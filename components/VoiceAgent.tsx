"use client";

import { useConversation } from "@11labs/react";
import { useState } from "react";

export default function VoiceAgent() {
    const [started, setStarted] = useState(false);

    const conversation = useConversation({
        onConnect: () => console.log("Connected"),
        onDisconnect: () => console.log("Disconnected"),
        onError: (err) => console.error("Error:", err),
    });

    const agentId = process.env.NEXT_PUBLIC_AGENT_ID_ONE;

    const startChat = async () => {
        if (!agentId) {
            console.error("Missing NEXT_PUBLIC_AGENT_ID_ONE in environment variables.");
            alert("Agent ID is missing.");
            return;
        }

        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            await conversation.startSession({ agentId });
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

    const handleClick = started ? endChat : startChat;

    return (
        <div onClick={handleClick}>
            <div className="boxContainer">
                <div className="box box1"></div>
                <div className="box box2"></div>
                <div className="box box3"></div>
                <div className="box box4"></div>
                <div className="box box5"></div>
            </div>
        </div>
    );
}
