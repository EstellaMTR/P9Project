import React from "react";

interface ProgressBarProps {
    completedLessons: number;
    totalLessons?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    completedLessons,
    totalLessons = 3,
}) => {
    const completed = Math.max(
        0,
        Math.min(completedLessons, totalLessons)
    );

    const green = "#48D69B";
    const blue = "#A9C9F2";
    const background = "#EDF4FB";

    return (
        <div
            role="progressbar"
            aria-valuenow={completed}
            aria-valuemin={0}
            aria-valuemax={totalLessons}
            style={{
                position: "relative",
                width: "100%",
                padding: "10px 0",
            }}
        >
            {/* Connecting lines */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "45px",
                    right: "45px",
                    transform: "translateY(-50%)",
                    display: "flex",
                    zIndex: 0,
                }}
            >
                {Array.from({ length: totalLessons - 1 }, (_, index) => (
                    <div
                        key={index}
                        style={{
                            flex: 1,
                            height: "8px",
                            backgroundColor:
                                index < completed ? green : blue,
                        }}
                    />
                ))}
            </div>

            {/* Progress circles */}
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 1,
                }}
            >
                {Array.from({ length: totalLessons }, (_, index) => {
                    const isCompleted = index < completed;

                    return (
                        <div
                            key={index}
                            style={{
                                width: "90px",
                                height: "90px",
                                flexShrink: 0,
                                borderRadius: "50%",
                                border: `8px solid ${
                                    isCompleted ? green : blue
                                }`,
                                backgroundColor: isCompleted
                                    ? green
                                    : background,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxSizing: "border-box",
                            }}
                        >
                            {isCompleted && (
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        width: "65%",
                                        height: "65%",
                                    }}
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M4 12.5L9.5 18L20 6"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressBar;
