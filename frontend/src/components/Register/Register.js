import React, { useState } from 'react'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Signup } from './../../api/apis'
import styles from './../Login/Login.module.css'

const divStyle = {
    height: '57px'
};

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const handlerSubmit = async(e) => {
        e.preventDefault();
        let result = await Signup(name, email, password, confPassword);
        if(result == 'success') {
            history.push('/');
        } else {
            setMsg(result);
        }
    }

    return (
        <div className={`text-center d-flex`}>
            <div className={ `${styles.form_signin}` }>
                <form onSubmit={handlerSubmit} >
                    <p className="has-text-centered">{msg}</p>
                    <img className={`mb-4`} style={divStyle} src="/images/Hoval_Logo.svg" alt=""/>
                    <h1 className="h3 mb-2 fw-normal">HVL cloud</h1>
                    <h5 className="h5 mb-2 fw-normal">Please Sign in</h5>

                    <div className={`form-floating ${styles.form_floating}`}>
                        <input type="text" className="form-control" id="floatingInput" placeholder="name"  
                                value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="email" placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="confpassword" placeholder="Confirm Password"
                                value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        <label htmlFor="confpassword">Confirm Password</label>
                    </div>
                    <button className={`w-100 btn btn-lg btn-primary ${styles.btn_hoval_blue}`} type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; HVL 2022</p>
                </form>
                <Link to='/'>Sign in</Link>
            </div>
        </div>
        // <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        //     <div className="hero-body">
        //         <div className="container">
        //             <div className="columns is-centered">
        //                 <div className="column is-4-desktop">
        //                     <form onSubmit={handlerSubmit} className="box">
        //                         <p className="has-text-centered">{msg}</p>
        //                         <div className="field mt-5">
        //                             <label className="label">Name</label>
        //                             <div className="controls">
        //                                 <input type="text" className="input" placeholder="Name"
        //                                     value={name} onChange={(e) => setName(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Email</label>
        //                             <div className="controls">
        //                                 <input type="text" className="input" placeholder="Email" 
                                                // value={email} onChange={(e) => setEmail(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Password</label>
        //                             <div className="controls">
        //                                 <input type="password" className="input" placeholder="******" 
        //                                      value={password} onChange={(e) => setPassword(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <label className="label">Confirm Password</label>
        //                             <div className="controls">
        //                                 <input type="password" className="input" placeholder="******" 
        //                                      value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         <div className="field mt-5">
        //                             <button className="button is-success is-fullwidth">Register</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Register
