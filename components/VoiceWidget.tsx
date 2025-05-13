"use client";

import { useEffect } from "react";
// import { ElevenLabsConvai } from "@11labs/react";

export default function VoiceWidget() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://elevenlabs.io/convai-widget/index.js";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        // Optional: setup client tools
        const setupClientTools = () => {
            const widget = document.querySelector("elevenlabs-convai");
            if (widget) {
                widget.addEventListener("elevenlabs-convai:call", (event: any) => {
                    event.detail.config.clientTools = {
                        redirectToExternalURL: ({ url }: { url: string }) => {
                            window.open(url, "_blank", "noopener,noreferrer");
                        },
                    };
                });
            }
        };

        // Delay setup to ensure widget loads
        setTimeout(setupClientTools, 2000);
    }, []);

    return (
        <elevenlabs-convai
            agent-id="LPfDBwxyOhTo24f8Ehjt"
            variant="expanded"
            // avatar-image-url="https://example.com/avatar.png"
            dynamic-variables={JSON.stringify({ user_name: "John", account_type: "premium" })}
        />

    );
}
