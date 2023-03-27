import React from 'react';

interface ArcTextProps {
    text: string;
    radius: number;
    centerX: number;
    centerY: number;
    angle: number;
    startAngle: number;
    fontSize: string
    color: string;
}

export const ArcText = ({
        text,
        radius,
        centerX,
        centerY,
        angle,
        startAngle,
        fontSize,
        color
}:ArcTextProps) => {
    const path = `M ${centerX},${centerY} m ${-radius},0 a ${radius},${radius} 0 1,1 ${2 * radius},0 a ${radius},${radius} 0 1,1 ${-2 * radius},0`;

    return (
        <svg viewBox={`0 0 ${2 * (radius + parseInt(fontSize))} ${2 * (radius + parseInt(fontSize))}`}>
            <path id="arc-path" d={path} fill="none" />
            <text>
                <textPath href="#arc-path" startOffset={`${startAngle * Math.PI * radius * 2 / 360}px`} textLength={`${angle * Math.PI * radius / 180}px`} style={{ fontSize, fill: color }}>
                    {text}
                </textPath>
            </text>
        </svg>
    );
}

export default ArcText;