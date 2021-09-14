import React from 'react';
import './Counter.css';
import { observer } from 'mobx-react';
import {useStores} from './hooks/useStores.js'
import counter from './store/counter.js'

const Counter = observer(() => {
    console.log(counter)
    return (
        <div className="counter">
            <div className="buttons">
                {counter.total}
                <button onClick={() => counter.implement()}>+</button>
                <button onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    );
})

export default Counter ;