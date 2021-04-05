import styles from './App.module.css';
import React from 'react';

type ContainerProps = {
    children: any
    padding: string
    margin?: string
}

export const Container = function (props: ContainerProps) {
    return (
        <div style={{
            padding: props.padding,
            display: 'block',
            border: '5px solid black',
            borderRadius: 15,
            textAlign: 'center',
            margin: props.margin ? props.margin : 0
        }}>
            {props.children}
        </div>
    )
}
