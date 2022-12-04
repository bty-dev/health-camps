import React from 'react';
import classes from './Main.module.scss';

import logo from './logo.svg';
import top_left from './top_left_bubble.svg';
import top_right from './top_right_bubble.svg';
import bottom_right from './bottom_right.svg';

import SearchListItem from "../../components/SearchListItem/SearchListItem";
import Filter from "../../components/UI/Filter/Filter";
import {useNavigate} from "react-router";

const Main = () => {

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
                        <div className={classes.result__title}>
                            Результаты поиска
                        </div>
                        <div className={classes.search__list}>
                            <SearchListItem/>
                            <SearchListItem/>
                            <SearchListItem/>
                            <SearchListItem/>
                            <SearchListItem/>
                        </div>
                    </div>
                    <div className={classes.result__filters}>
                        <div className={classes.result__filter}>
                            <Filter/>
                            <Filter/>
                            <button className={classes.btn__apply}>
                                Применить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;