import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';



const LoginForm = () => {
    return (
        <div className="login-from">
            <h3>Log In</h3>
            <form>
                <label>
                    Username:
                    <input type="text" />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default LoginForm;