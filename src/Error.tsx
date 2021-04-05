import React from 'react';
import styles from './App.module.css';

type ErrorType={
    errorText:string
}
export function Error(props:ErrorType){
    return(
        <div className={styles.error}>
            {props.errorText}
        </div>
    )
}
