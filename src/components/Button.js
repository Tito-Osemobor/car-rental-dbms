import React from "react";

const Button = ({content, onclick = null}) => {
    return (
        <button
            className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-48"}
            onClick={onclick}
        >
            {content}
        </button>
    );
}

export default Button;
