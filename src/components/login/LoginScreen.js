import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.push('/');
    }

    return (
        <div className="p-5">
            <h2>Login</h2>
            <hr />
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    )
}
