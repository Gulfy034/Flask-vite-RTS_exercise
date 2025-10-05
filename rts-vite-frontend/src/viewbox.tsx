import React from "react";

export default function ViewBox({content}: { content: React.ReactNode }) {
    return (
        <div className="viewBox">{content}</div>
    )
}