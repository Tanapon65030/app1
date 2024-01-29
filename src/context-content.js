import React from "react";
import { useContext } from "./context"

export default function Content() {
    let user = React.useContext(useContext)

    const contextStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        margin: 10,
        padding: 10

    }

    return (
        <div style={contextStyle}>
            Hello {user}
        </div>
    )
}
