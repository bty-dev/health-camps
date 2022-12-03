import React from 'react';
import classes from './Main.module.scss';

import logo from './logo.svg';
import top_left from './top_left_bubble.svg';
import top_right from './top_right_bubble.svg';
import bottom_right from './bottom_right.svg';

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.nav_menu}>
                <img className={classes.logo} src={logo} alt="logo"/>
                <hr className={classes.delimiter}/>
                <ul className={classes.menu_list}>
                    <li className={classes.menu_item_active}>Каталог</li>
                    <li className={classes.menu_item}>Чаты</li>
                    <li className={classes.menu_item}>Мои дети</li>
                    <li className={classes.menu_item}>Личный кабинет</li>
                    <li className={classes.menu_item_last}>Поддержка</li>
                </ul>
            </div>
            <div className={classes.content}>
                <img className={classes.top_left} src={top_left} alt="tol_left"/>
                <img className={classes.top_right} src={top_right} alt="top_right"/>
                <img className={classes.bottom_right} src={bottom_right} alt="bottom_right"/>
            </div>
        </div>
    );
};

export default Main;