import React from 'react';
import classes from './RateItem.module.scss';

import person from './avatar.png';

const RateItem = () => {
    return (
        <div className={classes.main}>
            <div className={classes.rate__header}>
                <img className={classes.ava} src={person} alt="person photo"/>
                <div className={classes.person__info}>
                    <div className={classes.name}>Тамара Петровна</div>
                    <div className={classes.birth}>Дата: 12.06.22</div>
                    <div className={classes.about}>О Лагере “Летняя сказка”</div>
                </div>
            </div>
            <div className={classes.rate__text}>
                Очень здорово! Ребёнку очень понравилось хорошая атмосфера и интересная программа!!!
            </div>
            <div className={classes.rate__bottom}>
                <div>Общая оценка: <span className={classes.stars}>★★★★☆</span></div>
                <div>Превосходно, <span style={{color: "red"}}>5.0</span></div>
            </div>
        </div>
    );
};

export default RateItem;