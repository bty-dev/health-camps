import React from 'react';
import classes from './CampInfo.module.scss';
import logo from "../Main/logo.svg";
import top_left from "../Main/top_left_bubble.svg";
import top_right from "../Main/top_right_bubble.svg";
import bottom_right from "../Main/bottom_right.svg";
import SearchListItem from "../../components/SearchListItem/SearchListItem";
import Filter from "../../components/UI/Filter/Filter";

import preview from './preview.png';
import certificate from './cert.png';
import RateItem from "../../components/RateItem/RateItem";
import {useNavigate} from "react-router";

const CampInfo = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.main}>
            <div className={classes.nav_menu}>
                <img className={classes.logo} src={logo} alt="logo"/>
                <hr className={classes.delimiter}/>
                <ul className={classes.menu_list}>
                    <li onClick={() => navigate("/")} className={classes.menu_item_active}>Каталог</li>
                    <li onClick={() => navigate("/chat")}  className={classes.menu_item}>Чаты</li>
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
                    Каталог оздоровительных учереждений
                </div>
                <div className={classes.search_block}>
                    <div className={classes.search}>
                        <div className={classes.search__title}>
                            Поиск
                        </div>
                        <input className={classes.search__input} type="text"/>
                    </div>
                    <button className={classes.search__btn}>
                        Найти
                    </button>
                </div>
                <div className={classes.result__block}>
                    <div className={classes.result__search}>
                        <div className={classes.preview__row}>
                            <img className={classes.preview} src={preview} alt="preview"/>
                            <div className={classes.preview__info}>
                                <div className={classes.preview__title}>Летняя сказка</div>
                                <div className={classes.preview__subtitle}>Тип: <span className={classes.subtitle_light}>Летний стационарный лагерь</span></div>
                                <div className={classes.preview__subtitle}>Регион: <span className={classes.subtitle_light}>Оренбург, Оренбургская область</span></div>
                                <div className={classes.preview__subtitle}>Ближайший город: <span className={classes.subtitle_light}>Оренбург</span></div>
                                <div className={classes.preview__subtitle}>Кол-во участников: <span className={classes.subtitle_light}>255 человек</span></div>
                            </div>
                        </div>
                        <div className={classes.place__left}>
                            Осталось мест : <span className={classes.place__light}>144</span>
                        </div>
                        <div className={classes.claim__block}>
                            <button className={classes.btn__claim} onClick={() => navigate("/main")}>Подать заявку</button>
                            <div className={classes.price}>
                                Стоимость : <span className={classes.price__light}>33.560  руб</span>
                            </div>
                        </div>
                        <div className={classes.certificate__block}>
                            <div className={classes.certificate__title}>
                                Сертификаты:
                            </div>
                            <div className={classes.certificate__list}>
                                <img src={certificate} alt=""/>
                                <img src={certificate} alt=""/>
                                <img src={certificate} alt=""/>
                                <img src={certificate} alt=""/>
                            </div>
                        </div>
                        <div className={classes.certificate__block}>
                            <div className={classes.certificate__title}>
                                Отзывы:
                            </div>
                            <div style={{marginLeft: 0}} className={classes.certificate__list}>
                                <RateItem/>
                                <RateItem/>
                            </div>
                        </div>
                        <button className={classes.let__rate}>
                            Оставить отзыв
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampInfo;