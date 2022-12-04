import React from 'react';

import classes from './Chat.module.scss';
import logo from "../Main/logo.svg";
import top_left from "../Main/top_left_bubble.svg";
import top_right from "../Main/top_right_bubble.svg";
import bottom_right from "../Main/bottom_right.svg";
import SearchListItem from "../../components/SearchListItem/SearchListItem";
import Filter from "../../components/UI/Filter/Filter";
import {useNavigate} from "react-router";
import kid from "../MyKids/kid_img.png";

const Chat = () => {

    const navigate = useNavigate();
    return (
        <div className={classes.main}>
            <div className={classes.nav_menu}>
                <img className={classes.logo} src={logo} alt="logo"/>
                <hr className={classes.delimiter}/>
                <ul className={classes.menu_list}>
                    <li onClick={() => navigate("/")} className={classes.menu_item}>Каталог</li>
                    <li onClick={() => navigate("/chat")}  className={classes.menu_item_active}>Чаты</li>
                    <li onClick={() => navigate("/myKids")} className={classes.menu_item}>Мои дети</li>
                    <li className={classes.menu_item}>Личный кабинет</li>
                    <li className={classes.menu_item_last}>Поддержка</li>
                </ul>
            </div>
            <div className={classes.content}>
                <img className={classes.top_left} src={top_left} alt="tol_left"/>
                <img className={classes.top_right} src={top_right} alt="top_right"/>
                <img className={classes.bottom_right} src={bottom_right} alt="bottom_right"/>
                <div className={classes.content__title}>
                    Мои чаты
                </div>
                <div className={classes.result__block}>
                    <div className={classes.result__filters}>
                        <div className={classes.result__filter}>
                            <div className={classes.kid__item__active}>
                                <img src={kid} alt="kid"/>
                                <div className={classes.kid__name__active}>
                                    Летняя сказка
                                </div>
                            </div>
                            <div className={classes.kid__item}>
                                <img src={kid} alt="kid"/>
                                <div className={classes.kid__name}>
                                    Иван Иванов
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.result__search}>
                        <div className={classes.search__list}>
                            <div className={classes.kid__item}>
                                <img src={kid} alt="kid"/>
                                <div className={classes.kid__name}>
                                    Летняя сказка
                                </div>
                                <div className={classes.more}>
                                    <div className={classes.more__item}></div>
                                    <div className={classes.more__item}></div>
                                    <div className={classes.more__item}></div>
                                </div>
                            </div>
                            <div className={classes.message}>
                                <div className={classes.from}>
                                    <div>Летняя сказка</div>
                                    <div>12:56</div>
                                </div>
                                <div className={classes.msg__text}>
                                    Здравствуйте! Хотелось бы расказать подробнее о нашем лагере! :)
                                </div>
                            </div>
                            <div className={classes.send__message}>
                                <input className={classes.msg__inp}>

                                </input>
                                <button className={classes.msg__btn}>
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;