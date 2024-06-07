import React from 'react'

function Button({ btnText = "Click Me" }) {
    return (
        <>
            <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-lg bg-secondary shadow-md shadow-indigo-500/50 text-white">{btnText}</button>
        </>
    )
}

export default Button