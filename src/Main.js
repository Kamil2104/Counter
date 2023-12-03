import React from 'react';
import { useState, useEffect, useRef } from "react";
import './Main.css';

function Main() {
  // useState()
  const [counter, setCounter] = useState(0);
  const [boost, setBoost] = useState(1);
  const [reduction, setReduction] = useState(-1);
  let [textColor, setTextColor] = useState("rgb(224, 223, 223)");
  let [errorCounterTextColor, setErrorCounterTextColor] = useState("black");
  let [errorBoostTextColor, setErrorBoostTextColor] = useState("black");
  let [errorReductionTextColor, setErrorReductionTextColor] = useState("black");

  // useRef()
  const inputSetCounterRef = useRef(null);
  const inputSetBoostRef = useRef(null);
  const inputSetReductionRef = useRef(null);

  // useEffect()
  useEffect(() => {
    document.title = "Counter";
  }, []);

  useEffect(() => {
    if (counter < 0) {
      setTextColor("rgb(238, 82, 82)");
    } else if (counter === 0) {
      setTextColor("rgb(224, 223, 223)");
    } else if (counter > 0) {
      setTextColor("rgb(144, 238, 144)");
    }
  }, [counter]);

  // Functions
  const setCounterHandler = () => {
    const counterValueInputedByUser = inputSetCounterRef.current.value;

    if (counterValueInputedByUser !== "") {
      if (counterValueInputedByUser <= 999999999) {
        if (counterValueInputedByUser >= -999999999) {
          setCounter(parseInt(counterValueInputedByUser), 10);
          inputSetCounterRef.current.value = "";
        } else {
          alert("Value of counter can't be lower than -999 999 999");
          setErrorCounterTextColor("rgb(238, 82, 82)");
        }
      } else {
        alert("Value of counter can't be higher than 999 999 999");
        setErrorCounterTextColor("rgb(238, 82, 82)");
      }
    } else {
      alert("To set counter value, you have to enter a value!");
    }
  }

  const setBoostHandler = () => {
    const boostValueInputedByUser = inputSetBoostRef.current.value;

    if (boostValueInputedByUser === "") {
      alert("To set boost value, you have to enter a value!");
    } else if (boostValueInputedByUser > 0) {
      if (boostValueInputedByUser <= 100000) {
        setBoost(boostValueInputedByUser);
        inputSetBoostRef.current.value = "";
      } else {
        alert("Value of boost can't be higher than 100 000!");
        setErrorBoostTextColor("rgb(238, 82, 82)");
      }
    } else if (boostValueInputedByUser <= 0) {
      alert("To set boost value, you have to enter a positive number!");
      setErrorBoostTextColor("rgb(238, 82, 82)");
    }
  }

  const setReductionHandler = () => {
    const reductionValueInputedByUser = inputSetReductionRef.current.value;

    if (reductionValueInputedByUser === "") {
      alert("To set reduction value, you have to enter a value!");
    } else if (reductionValueInputedByUser < 0) {
      if (reductionValueInputedByUser >= -100000) {
        setReduction(reductionValueInputedByUser);
        inputSetReductionRef.current.value = "";
      } else {
        alert("Value of reduction can't be lower than -100 000");
        setErrorReductionTextColor("rgb(238, 82, 82)");
      }
    } else if (reductionValueInputedByUser >= 0) {
      alert("To set reduction value, you have to enter a negative number!");
      setErrorReductionTextColor("rgb(238, 82, 82)");
    }
  }

  const clearInputsHandler = () => {
    inputSetCounterRef.current.value = "";
    inputSetBoostRef.current.value = "";
    inputSetReductionRef.current.value = "";
  }

  const setTextColorBackToBlack = () => {
    setErrorCounterTextColor("black");
    setErrorBoostTextColor("black");
    setErrorReductionTextColor("black");
  }


  const addingToCounterHandler = () => {
    const boostValue = parseInt(boost, 10);
    if (counter + boostValue <= 999999999) {
      setCounter(counter + boostValue);
    } else {
      alert("Value of counter can't be higher than 999 999 999");
    }
  }

  const subtractionFromCounterHandler = () => {
    const reductionValue = parseInt(reduction, 10);
    if (counter + reductionValue >= -999999999) {
      setCounter(counter + reductionValue);
    } else {
      alert("Value of counter can't be lower than -999 999 999");
    }
  }

  const resetCounterHandler = () => {
    setCounter(0);
    alert("Counter has been reseted and set to 0!");
  }

  const setDeafultOptionsHandler = () => {
    setBoost(1);
    setReduction(-1);
  }

  // Displayer
  return (
    <div className='Container'>
      <div className='UserPanel'>
        <div className='UserPanelHeader'>
          <h1> User panel: </h1>
        </div>
        <div className='SetCounterContainer'>
          <label> Set counter value: </label> <br />
          <input type='number' id='inputSetCounter' style={{ color: errorCounterTextColor }} ref={inputSetCounterRef} />
          <button id='btnSetCounter' onClick={setCounterHandler}> SET </button> <br />
        </div>
        <div className='SetBoostContainer'>
          <label> Set boost: </label> <br />
          <input type='number' id='inputSetBoost' onChange={setTextColorBackToBlack} style={{ color: errorBoostTextColor }} ref={inputSetBoostRef} />
          <button id='btnSetBoost' onClick={setBoostHandler}> SET </button> <br />
        </div>
        <div className='SetBoostReductionContainer'>
          <label> Set reduction: </label> <br />
          <input type='number' id='inputSetReduction' onChange={setTextColorBackToBlack} style={{ color: errorReductionTextColor }} ref={inputSetReductionRef} />
          <button id='btnSetReduction' onClick={setReductionHandler}> SET </button> <br />
        </div>
        <div className='ClearInputsContainer'>
          <label> Clear values: </label> <br />
          <button id='btnClearInputsHandler' onClick={clearInputsHandler}> RESET </button> <br />
        </div>
      </div>
      <div className='CounterPanel'>
        <div className='CounterPanelHeader'>
          <h1> Counter: </h1>
        </div>
        <div className='CounterValueDisplayer'>
          <p style={{ color: textColor }}> {counter} </p>
        </div>
        <div className='CounterButtonsContainer'>
          <button id='btnSubtraction' onClick={subtractionFromCounterHandler}> - </button>
          <button id='btnAddition' onClick={addingToCounterHandler}> + </button> <br />
          <button id='btnReset' onClick={resetCounterHandler}> Reset </button>
        </div>
      </div>

      <div className='ValuePanel'>
        <div className='ValuePanelHeader'>
          <h1> Value panel: </h1>
        </div>
        <div className='CurerentValueOfBoostDisplayer'>
          <label> Current value of boost: </label> <br />
          <input type='text' id='displayCurrentValueOfBoost' value={boost} readOnly /> <br />
        </div>
        <div className='CurrentValueOfReductionDisplayer'>
          <label> Current value of reduction: </label> <br />
          <input type='text' id='displayCurrentValueOfReduction' value={reduction} readOnly /> <br />
        </div>
        <div className='setDeafultOptionsHandlerContainer'>
          <label id='setDeafultLabel'> Set default options </label> <br />
          <button id='btnSetDeafultOptionsHandler' onClick={setDeafultOptionsHandler}> SET </button> <br />
        </div>
      </div>

      <div className='CreatorContainer'>
        <p> Made by: Niewiadomski Kamil </p>
      </div>
    </div>
  );
}

// Exporter
export default Main;