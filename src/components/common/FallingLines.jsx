// src/components/common/FallingLines.jsx
import React, { useState, useEffect } from 'react';

const FallingLines = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLine = {
                id: Date.now() + Math.random(),
                left: Math.random() * 100, // Random horizontal position (0% to 100%)
                animationDuration: Math.random() * 1 + 1.5, // Random duration (1.5s to 2.5s)
            };

            setLines(prevLines => [...prevLines, newLine]);

            // Remove the line after animation finishes to keep the DOM clean
            setTimeout(() => {
                setLines(prev => prev.filter(line => line.id !== newLine.id));
            }, newLine.animationDuration * 1000);

        }, 100); // Create a new line every 100ms

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            {lines.map(line => (
                <span
                    key={line.id}
                    className="absolute top-0 w-px h-8 bg-purple-400 falling-line"
                    style={{
                        left: `${line.left}%`,
                        animationDuration: `${line.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default FallingLines;