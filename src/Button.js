import React from "react";

const Button = () => {

    const handleClick = () => {
        console.log('hello');
    }

    return (
        <div className="buttons">

            <button id="login-btn" onClick={handleClick}>LOGIN</button>

            <button id="create-btn" onClick={handleClick}>CREATE ACCOUNT</button>
        </div>

    )


}

export default Button;