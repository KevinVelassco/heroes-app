import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        const pathName = localStorage.getItem('page-hero-pathname') || '/';

        dispatch({
            type: types.login,
            payload: { name: 'Kevin' }
        });

        history.replace(pathName);
    }

    return (
        <div className="p-5">
            <h2>Login</h2>
            <hr />
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    )
}
