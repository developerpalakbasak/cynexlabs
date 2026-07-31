"use client"
import { useEffect, useState } from "react";

interface Star {
    top: number;
    left: number;
    duration: number;
}

export default function Stars() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 30 }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 3 + 5,
        }));

        setStars(generatedStars);
    }, []);

    return (
        <div className="star-section absolute opacity-15 top-0 left-0 w-full h-full overflow-hidden">
            {stars.map((star, i) => (
                <span
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDuration: `${star.duration}s`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
}
