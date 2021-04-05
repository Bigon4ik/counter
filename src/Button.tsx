import React from 'react';
import styles from './App.module.css'

type ButtonProps = {
    title: string
    action: () => void
    disabled: boolean
}

export const Button = function (props: ButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={props.action}
            disabled={props.disabled}
        > {props.title} </button>
    )
}

