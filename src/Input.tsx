import React from 'react';
import styles from './App.module.css'

type InputProps = {
    value: number
    onChange: (value: number) => void
    label: string
}

export const Input = function (props: InputProps) {
    const onChange = (e:any) => {
        props.onChange(e.target.value)
    }
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputText}>{props.label}:</label>
            <input type="number" className={styles.inputValue} value={props.value} onChange={onChange}/>
        </div>
    )
}

