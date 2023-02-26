/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from "./../context";
import { refreshToken } from '../../api/apis';

const Layout = (props) => {
    const {
        g_name, setGName,
        g_token, setGToken,
        g_expire, setGExpire
    } = useGlobalContext();

    const history = useHistory();

    useEffect(async() => {
        let result = await refreshToken();
        if(result == 'failed') {
            history.push('/');
        } else {
            setGName(result.name);
            setGToken(result.token);
            setGExpire(result.exp);
        }
    }, [])

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (g_expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('https://hscadmin.westeurope.cloudapp.azure.com:5000/token');
            // const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setGToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setGName(decoded.name);
            setGExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    return (
        <>
        <div className="container">
            {props.children}
        </div>
        </>
    );
}

export default Layout;