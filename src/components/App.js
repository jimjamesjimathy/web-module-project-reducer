import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import { applyNumber, changeOperation, clearDisplay } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handle1Click = () => {
  //   dispatch(addOne())
  // }

  const handleClickSupreme = (number) => {
    dispatch(applyNumber(number))
  }
  const handleOperationClick = (operator) => {
    dispatch(changeOperation(operator))
  }
  const clearDisplayClick = () => {
    dispatch(clearDisplay())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleClickSupreme(1)}/>
              <CalcButton value={2} onClick={() => handleClickSupreme(2)}/>
              <CalcButton value={3} onClick={() => handleClickSupreme(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleClickSupreme(4)}/>
              <CalcButton value={5} onClick={() => handleClickSupreme(5)}/>
              <CalcButton value={6} onClick={() => handleClickSupreme(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleClickSupreme(7)}/>
              <CalcButton value={8} onClick={() => handleClickSupreme(8)}/>
              <CalcButton value={9} onClick={() => handleClickSupreme(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperationClick('+')}/>
              <CalcButton value={"*"} onClick={() => handleOperationClick('*')}/>
              <CalcButton value={"-"} onClick={() => handleOperationClick('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearDisplayClick}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
