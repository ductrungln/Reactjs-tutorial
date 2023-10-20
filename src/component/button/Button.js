import React from 'react';
//import "./Button.scss"
import styles from "./Button.module.css"
//style-components
const Button = (props) => {
    return (
        <button className={`${styles.button} ${styles.buttonSecondary}`}>
            {props.children}
        </button>
    );
};

export default Button;