import React from 'react';

import classes from './MyKids.module.scss';
import logo from "../Main/logo.svg";
import top_left from "../Main/top_left_bubble.svg";
import top_right from "../Main/top_right_bubble.svg";
import bottom_right from "../Main/bottom_right.svg";
import SearchListItem from "../../components/SearchListItem/SearchListItem";
import Filter from "../../components/UI/Filter/Filter";
import {useNavigate} from "react-router";

import kid from './kid_img.png';
import ivan from './ivan.png';

const MyKids = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.main}>
            <div className={classes.nav_menu}>
                <img className={classes.logo} src={logo} alt="logo"/>
                <hr className={classes.delimiter}/>
                <ul className={classes.menu_list}>
                    <li onClick={() => navigate("/main")} className={classes.menu_item}>Каталог</li>
                    <li className={classes.menu_item}>Чаты</li>
                    <li className={classes.menu_item_active}>Мои дети</li>
                    <li className={classes.menu_item}>Личный кабинет</li>
                    <li className={classes.menu_item_last}>Поддержка</li>
                </ul>
            </div>
            <div className={classes.content}>
                <img className={classes.top_left} src={top_left} alt="tol_left"/>
                <img className={classes.top_right} src={top_right} alt="top_right"/>
                <img className={classes.bottom_right} src={bottom_right} alt="bottom_right"/>
                <div className={classes.content__title}>
                    Мои дети
                </div>
                <div className={classes.result__block}>
                    <div className={classes.result__search}>
                          <div className={classes.row}>
                              <img src={ivan} alt="ivan"/>
                              <div className={classes.col}>
                                  <div className={classes.name}>Иван Иванович Иванов</div>
                                  <div className={classes.date}>Дата рождения: <span className={classes.code}>02.12.2009</span> Номер: <span className={classes.code}>+79923143342</span></div>
                                  <div className={classes.country}>Гражданство: <span style={{fontWeight: 300}}>Российская Федерация</span></div>
                              </div>
                          </div>
                    </div>
                    <div className={classes.result__filters}>
                        <div className={classes.result__filter}>
                            <div className={classes.kid__item__active}>
                                <img src={kid} alt="kid"/>
                                <div className={classes.kid__name__active}>
                                    Иван Иванов
                                </div>
                            </div>
                            <div className={classes.kid__item}>
                                <img src={kid} alt="kid"/>
                                <div className={classes.kid__name}>
                                    Иван Иванов
                                </div>
                            </div>
                            <div className={classes.kid__item}>
                                <img src={kid} alt="kid"/>
                                <div className={classes.kid__name}>
                                    Иван Иванов
                                </div>
                            </div>
                            <div className={classes.kid__item}>
                                <img src={kid} alt="kid"/>
                                <div className={classes.kid__name}>
                                    Иван Иванов
                                </div>
                            </div>
                            <button className={classes.add__child}>
                                Добавить ребёнка +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyKids;