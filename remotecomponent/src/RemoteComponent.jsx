// import React from "react";

export default function RemoteComponent({useEffect, useState, ...props}) {
    const [count, setCount] = useState(0);
    const [useEffectFired, setUseEffectFired] = useState(false);

    // THIS CAUSES AN ERROR WHEN DYNAMICALLY LOADED INSIDE THE MAIN APP
    useEffect(() => {
        setUseEffectFired(true);
        console.log('useEffect hook in remote component!!!');
        // alert('useEffect hook in remote component!');
    }, []);

    return (
        <div style={{ color: 'red', fontSize: 20 }}>
            <div>
                Success! This is a remote component dynamically loaded from a remote server.
            </div>
            <div>
                mainAppProp: {props.mainAppProp}
            </div>
            <div>
                useEffect hook fired: {useEffectFired ? 'YES' : 'NO'}
            </div>

            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        </div>
    )
}