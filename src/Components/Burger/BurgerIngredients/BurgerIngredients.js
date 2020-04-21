import React from 'react';
import classes from './BurgerIngredients.modules.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type) {
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'): 
            ingredient = {};
            break;
    }
};

export default burgerIngredient;