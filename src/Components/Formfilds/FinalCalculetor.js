import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {clickButton, backspace,answer,clickClear } from '../../redux/actions/actions'
import NumberButton  from '../Button/NumButton'
import OprButton  from '../Button/OprButton'

import '../../App.css'

export default function FinalCalculetor() {
    let key ="Calculator"

    const dispatch = useDispatch();
    const display = useSelector( state => state) 

    console.log("show the display",(display.ans).length === 0 ? display.number : display.ans)


    

    return (
        <div className="container">
            <form>
                <input type='text' placeholder='0' value={(display.ans).length === 0 ? display.number : display.ans} type="text"/>
            </form>
            <div className="keypad">
                <OprButton value={'Clear'} onClick={() => dispatch(clickClear())} id={'clear'}/>
                <OprButton value={'C'}  onClick={() => dispatch(backspace())} id={'backspace'}/>
                <OprButton value={'/'}  onClick={() => dispatch(clickButton('/'))} id={'division'}/>
                <NumberButton value={7} onClick={() => dispatch(clickButton(7))}/>
                <NumberButton value={8} onClick={() => dispatch(clickButton(8))}/>
                <NumberButton value={9} onClick={() => dispatch(clickButton(9))}/>
                <OprButton value={'*'} onClick={() => dispatch(clickButton('*'))} id={'mult'}/>
                <NumberButton value={4} onClick={() => dispatch(clickButton(4))}/>
                <NumberButton value={5} onClick={() => dispatch(clickButton(5))}/>
                <NumberButton value={6} onClick={() => dispatch(clickButton(6))}/>
                <OprButton value={'-'} onClick={() => dispatch(clickButton('-'))} id={'sub'}/>
                <NumberButton value={1} onClick={() => dispatch(clickButton(1))}/>
                <NumberButton value={2} onClick={() => dispatch(clickButton(2))}/>
                <NumberButton value={3} onClick={() => dispatch(clickButton(3))}/>
                <OprButton value={'+'} onClick={() => dispatch(clickButton('+'))} id={'add'}/>
                <NumberButton value={0} onClick={() => dispatch(clickButton(0))}/>
                <NumberButton value={'.'} onClick={() => dispatch(clickButton('.'))}/>
                <button onClick={() => dispatch(answer())} id="result">=</button>
            </div>
        </div>
    )
}
