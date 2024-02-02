import React, { useEffect } from "react";

export default function RemoteComponent() {

    useEffect(() => {
        console.log('useEffect hook in remote component!!!');
        // alert('useEffect hook in remote component!');
    }, []);

    return (
        <div style={{ color: 'red', fontSize: 20 }}>
            Success! This is a remote component dynamically loaded from a remote server.
        </div>
    )
}