import React from "react";

const Form = () => {



    return (

        <form className="login-form">
            <input type="text"
                placeholder="email"
                id="email"
            />
            <input type="password"
                placeholder="password"
                id="password"
            />
        </form>
    )
}

export default Form;