import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [total, setTotal] = useState('');
  const [accumulator, setAcc] = useState('')
  const calculate = () => {
      try {
        setAcc(eval(total));
        setTotal(eval(total))
      }
      catch(e) {
        console.log(e)
        setTotal('error');
        setAcc('error');
      }
  }

  const click = event => {
    const button = event.target.textContent
    if(button === "="){
        calculate()
    } else if(button === 'C'){
      setTotal('');
      setAcc('');
    } else if(button === '+/-'){
      setAcc(eval(accumulator * -1))
      setTotal(eval(total * -1));
    } else if(button === 'x'){
      setTotal(`${total}*`)
      setAcc(`${accumulator}x`)
    } else if(button === '%') {
      setTotal(eval(total / 100));
      setAcc(eval(accumulator / 100));
    }

    else {
      setAcc(`${accumulator}${button}`)
      setTotal(`${total}${button}`);
    }
}


 
  const mainContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const calculatorStyle = {
    display: "flex",
    flexWrap: "wrap",
    background: "#A9203C",
    height: "702px",
    width: "395px",
    borderRadius: "8px"
  };
  const calcBorderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "black",
    height: "709px",
    width: "402px"
  };

  const buttonWrapperStyle = {
    height: "500px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  };

  const logoStyle = {
    marginTop: "10px",
    marginLeft: "10px"
  };

  return (
    <div className="container" style={mainContainerStyle}>
      <div style={calcBorderStyle}>
        <div className="App" style={calculatorStyle}>
          {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
          <Logo style={logoStyle} />
          <Display total={accumulator} />
          <div style={buttonWrapperStyle}>
            <Specials total={(event) => click(event)}/>
            <Numbers total={(event) => click(event)} />
            <Operators
              total={event => click(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
