import React, {useState} from 'react';
import classes from './Authorization.module.scss';

import logo from './logo.svg';
import left_top_bubble from './left_top_bubble.svg';
import left_bottom_bubble from './left_bottom_bubble.svg';
import right_bottom_auth from './right_bottom_auth.svg';
import eye from './eye.svg';
import eye_close from './eye_close.svg';


import cogoToast from "cogo-toast";
import axios from 'axios'
import {useNavigate} from "react-router";


const Authorization = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [passwordShown, setPasswordShown] = useState(false);

    const navigate = useNavigate();

    const toastOptions = {
        position: "bottom-right",
    }

    const onLoginHandle = () => {
        if (error) {
            cogoToast.loading('Проверяем введенные данные...', toastOptions).then(() => {
                cogoToast.error('Проверьте правильность введенных данных!', toastOptions);
            });
        } else {
            cogoToast.loading('Проверяем введенные данные...', toastOptions).then(() => {
                axios.post("https://gamification.oksei.ru/HealthServer/api/account/sign", {
                    "Email": login,
                    "Password": password,
                }).then((response) => {
                    if (response.status === 200) {
                        cogoToast.success('Вход выполнен успешно! :)', toastOptions)
                        navigate("/")
                    }
                }).catch(err => {
                    console.log("err")
                    cogoToast.error('Проверьте правильность введенных данных!', toastOptions)
                })


            });
        }
    }
    const handleLoginChange = (event) => {
        if (!isValidEmail(event.target.value)) {
            setError(true);
        } else {
            setError(false);
        }
        setLogin(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }

    const isValidEmail = () => {
        return /\S+@\S+\.\S+/.test(login);
    }

    return (
        <div className={classes.main}>
            <img className={classes.left_top} src={left_top_bubble} alt="left top bubble"/>
            <img className={classes.left_bottom} src={left_bottom_bubble} alt="left bottom bubble"/>
            <div className={classes.form}>
                <div className={classes.form__block}>
                    <img className={classes.right_bottom} src={right_bottom_auth} alt="right bottom auth"/>
                    <p className={classes.form__title}>
                        Авторизация
                    </p>
                    <div className={classes.input__container}>
                        <p className={classes.input__title}>
                            Почта
                        </p>
                        <input
                            style={error ? {border: "1px solid red"} : {border: "none"}}
                            value={login}
                            className={classes.input}
                            type="email"
                            onChange={handleLoginChange}
                        />
                    </div>
                    <div className={classes.input__container}>
                        <p className={classes.input__title}>
                            Пароль
                        </p>
                        <input
                            value={password}
                            className={classes.input}
                            type={passwordShown ? "text" : "password"}
                            onChange={handlePasswordChange}
                        />
                        <img onClick={() => setPasswordShown(!passwordShown)} className={classes.eye} src={passwordShown ? eye_close : eye} alt="eye"/>
                    </div>
                    <button onClick={onLoginHandle} className={classes.login__btn}>
                        Войти
                    </button>
                </div>
            </div>
            <div className={classes.bubble_container}>
                <img className={classes.logo_img} src={logo} alt="logo"/>
            </div>
        </div>
    );
};

export default Authorization;