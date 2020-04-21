import React, { Component } from "react";
import Aux from '../hoc/Auxiliary'

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>
                    Burger Controls
                </div>
                <div>
                    Burger
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;