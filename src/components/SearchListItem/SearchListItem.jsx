import React from 'react';
import classes from './SearchListItem.module.scss';

import image from './image.png';
import {useNavigate} from "react-router";

const SearchListItem = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.main}>
            <div className={classes.col}>
                <div className={classes.col__title}>
                    Летняя сказка
                </div>
                <div className={classes.col__subtitle}>
                    Тип: <span className={classes.sub__span}>Летний стационарный лагерь</span>
                </div>
                <div className={classes.col__subtitle}>
                    Город: <span className={classes.sub__span}>г.Оренбург</span>
                </div>
                <div className={classes.price__block}>
                    <div className={classes.price__text}>
                        Стоимость :
                    </div>
                    <div className={classes.price__number}>
                        33.560  руб
                    </div>
                </div>
                <div className={classes.btns}>
                    <button className={classes.btn__more} onClick={() => navigate("/campInfo")}>Подробнее</button>
                    <button className={classes.btn__call}>Связаться</button>
                </div>
            </div>
            <div className={classes.col_sec}>
            </div>
        </div>
    );
};

export default SearchListItem;