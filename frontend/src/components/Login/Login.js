import React, { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import styles from './Login.module.css'
import {Auth} from './../../api/apis'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const divStyle = {
        height: '57px'
    };

    const handlerSubmit = async(e) => {
        e.preventDefault();
        let result = await Auth(email, password);
        if(result?.data?.accessToken) {
            localStorage.setItem('token', result.data.accessToken);
            history.push("/overview");
        } else {
            setMsg(result);
        }
    }

    return (
        <div className={`text-center d-flex`}>
            <div className={ `${styles.form_signin}` }>
                <form onSubmit={handlerSubmit}>
                    <p className="has-text-centered">{msg}</p>
                    <img className={`mb-4`} style={divStyle} src="/images/Hoval_Logo.svg" alt=""/>
                    <h1 className="h3 mb-2 fw-normal">HVL cloud</h1>
                    <h5 className="h5 mb-2 fw-normal">Please Sign in</h5>

                    <div className={`form-floating ${styles.form_floating}`}>
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@hoval.com"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">HSC Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className={`${styles.checkbox} mb-3`}>
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className={`w-100 btn btn-lg btn-primary ${styles.btn_hoval_blue}`} type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; HVL 2022</p>
                </form>
                <Link to='/register'>Sign up</Link>
            </div>
        </div>
    )
}

export default Login
