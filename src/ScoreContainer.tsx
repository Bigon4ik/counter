import styles from './App.module.css';
import React from 'react';

type ScoreContainerProps = {
    children: any
}

export const ScoreContainer = function (props: ScoreContainerProps) {
    return (
        <div className={styles.scoreContainer}>
            {props.children}
        </div>
    )
}
