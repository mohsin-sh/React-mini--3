import React, { useState } from "react";
import './App.css'


function App() {
  const [calc, setCalc] = useState("");
  const [theme, setTheme] = useState(false)

  const operator = ['/', '*', '-', '+'];

  const updateCalc = value => {
    if((operator.includes(value) && operator.includes('')) ||
    (operator.includes(value) && operator.includes(calc.slice(-1)))
    ){
      return;
    }
    setCalc(calc + value);

  }

  //calculate function
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  //delete function
  const deletefn = () =>{
    setCalc(calc.slice(0, -1));
  }
  //reset function
  const reset = () => {
    setCalc('');
  }

  return (
  <>
    <div className={!theme ?'container': 'light-container'}>
      <div className={!theme ?'calc-container': 'calc-light'}>
        <div className={!theme ?'calc-header': 'calc-light-header'}>
          <h2 className={!theme ?'calc-title': 'calc-light-title'}>calc</h2>
          <div className={!theme ?'toggle': 'light-toggle'}>
            <p>Theme</p>
            <div className="theme-toggle">
            <label className="switch">
              <input type="checkbox" onClick={()=> setTheme(!theme)} />
              <span className="slider round"></span>
            </label>
            </div>
          </div>
        </div>


        <div className={!theme ?'calc-input': 'calc-light-input'}>
          {calc || '0' }
        </div>

        <div className={!theme ?'calc-parent-div': 'calc-light-parent'}>
          <div className={!theme ?'calc-btn': 'calc-light-btn'}>
            <button className="calc-key" onClick={()=> updateCalc('7')}>7</button>
            <button className="calc-key" onClick={()=> updateCalc('8')}>8</button>
            <button className="calc-key" onClick={()=> updateCalc('9')}>9</button>
            <button className={!theme ?'calc-del-key': 'calc-light-del-key'} onClick={deletefn}>DEL</button>
            <button className="calc-key" onClick={()=> updateCalc('4')}>4</button>
            <button className="calc-key" onClick={()=> updateCalc('5')}>5</button>
            <button className="calc-key" onClick={()=> updateCalc('6')}>6</button>
            <button className="calc-key" onClick={()=> updateCalc('+')}>+</button>
            <button className="calc-key" onClick={()=> updateCalc('1')}>1</button>
            <button className="calc-key" onClick={()=> updateCalc('2')}>2</button>
            <button className="calc-key" onClick={()=> updateCalc('3')}>3</button>
            <button className="calc-key" onClick={()=> updateCalc('-')}>-</button>
            <button className="calc-key" onClick={()=> updateCalc('.')}>.</button>
            <button className="calc-key" onClick={()=> updateCalc('0')}>0</button>
            <button className="calc-key" onClick={()=> updateCalc('/')}>/</button>
            <button className="calc-key" onClick={()=> updateCalc('*')}>x</button>
          </div>
          <div className="calc-fn-btn">
            <button className={!theme ?'calc-reset-key': 'calc-light-reset-key'}  onClick={reset}>RESET</button>
            <button className="calc-key calc-equal-key" onClick={calculate}>=</button>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default App;
