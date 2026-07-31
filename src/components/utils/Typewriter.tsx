"use client"
import { useEffect, useState } from "react";

interface TypewriterProps {
    quotes: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
    quotes, 
    className, 
    typingSpeed = 120, 
    deletingSpeed = 80, 
    pauseTime = 1500 
}) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = quotes[index % quotes.length];

        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            // Typing
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));

                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }, typingSpeed);
        } else {
            // Deleting
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));

                if (text.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => prev + 1);
                }
            }, deletingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, quotes, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={className}>
            {text}
            <span className="animate-pulse text-foreground">_</span>
        </span>
    );
}

export default Typewriter;
