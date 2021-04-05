import React, {useState} from 'react';
import s from './App.module.css';
import {Scoreb} from './scoreb';
import {Button} from './Button';
import {Container} from './Container';
import {Input} from './Input';
import {Error} from './Error';

type CounterProps = {}

function Counter() {
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxPropertiesValue, setMaxPropertiesValue] = useState<number>(0)
    const [starPropertiesValue, setStarPropertiesValue] = useState<number>(0)
    const [error, setError] = useState<string>('')


    const increaseCount = () => {
        if (count < maxPropertiesValue) {
            setCount(+count + 1)
        }
    }
    const resetCount = () => setCount(starPropertiesValue)

    const setCountProperties = () => {
        setCount(startValue)
        setMaxPropertiesValue(maxValue)
        setStarPropertiesValue(startValue)

    }

    const onChangeMaxValue = (value: number) => setMaxValue(value)
    const onChangeStartValue = (value: number) => {
        setStartValue(value)
        if (value < 0) {
            setError('ERRRRROR')
        } else {
            setError('')
        }
    }

    const isDisabledButtonSet = () => {
        if (!isValuesChanged()) {
            return true
        }
        return false
    }


    const isValuesChanged = () => (starPropertiesValue !== startValue || maxPropertiesValue !== maxValue)

    const isDisabledButtonInc = () => (maxPropertiesValue === +count) && isValuesChanged()

    const isDisabledButtonReset = () => isValuesChanged()

    let renderContent = <Scoreb count={count}/>
    if (error) {
        renderContent = <Error errorText={error}/>
    }

    return (
        <div>
            <Container padding='5px 10px'>
                <div className={s.App}>
                    <Container padding='5px 10px' margin='10px'>
                        <Container padding='5px 10px'>
                            <Input value={maxValue} onChange={onChangeMaxValue} label={'maxValue'}/>
                            <Input value={startValue} onChange={onChangeStartValue} label={'startValue'}/>
                        </Container>

                        <Container padding="5px 10px">
                            <div>
                                <Button title={'set'}
                                        action={setCountProperties}
                                        disabled={isDisabledButtonSet()}/>
                            </div>
                        </Container>
                    </Container>
                </div>
                <div className={s.App}>
                    <Container padding="5px 10px" margin='10px'>
                        <div>
                            <Container padding='5px 10px'>
                                {renderContent}
                            </Container>
                            <Button title={'inc'}
                                    action={increaseCount}
                                    disabled={isDisabledButtonInc()}
                            />
                            <Button title={'reset'}
                                    action={resetCount}
                                    disabled={isDisabledButtonReset()}/>
                        </div>

                    </Container>
                </div>
            </Container>
        </div>

    )

}

export default Counter;