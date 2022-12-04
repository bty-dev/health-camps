import React, {useState} from 'react';
import classes from './Filter.module.scss'

const Filter = () => {
    const [isShow, setShow] = useState(false);


    const handleShow = () => {
        setShow(!isShow)
    }

    return (
        <div className={classes.main}>
            <div className={classes.filter__name}>
                Фильтр
                <div id="arrow" onClick={handleShow} className={classes.arrow}>
                </div>
            </div>
            {
                isShow ?
                    <div className={classes.filter__list}>
                        <div className={classes.filter__item}>
                            Показать только
                            <div className={classes.dot}>

                            </div>
                        </div>
                        <div className={classes.filter__item}>
                            Показать только
                            <div className={classes.dot}>

                            </div>
                        </div>
                        <div className={classes.filter__item}>
                            Показать только
                            <div className={classes.dot}>

                            </div>
                        </div>
                    </div>

                : null
            }
        </div>
    );
};

export default Filter;