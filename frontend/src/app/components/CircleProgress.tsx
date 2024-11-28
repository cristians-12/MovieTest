import React from 'react';

interface CircleProgressProps {
    score: number;
    width: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ score, width }) => {
    const radius = width / 3;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 10) * circumference;
    const center = width / 2;

    return (
        <div className="circle-container">
            <svg width={width} height={width}>
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={score > 6 ? '#285129' : '#5b370e'}
                    strokeWidth={width / 15}
                    fill="transparent"
                />
                <circle
                    cx={center}
                    cy={center}
                    r={radius}

                    stroke={score > 6 ? 'green' : '#d17812'}
                    strokeWidth={width / 15}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize={`${width / 5}px`}
                    fill="white"
                >
                    {`${Math.floor(score * 10)}%`}
                </text>
            </svg>
        </div>
    );
};

export default CircleProgress;
