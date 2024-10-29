import React, { useState } from "react";
import "./style.css";

//create your first component
const Home = () => {
  const [squareValues, setSquareValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [currPlayer, setCurrPlayer] = useState("X");
  const winningCombinations = [
    //horizontal straight lines
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    //vertical straight lines
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    //diagonal straight lines
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
  ];

  const checkWinner = (updatedArray) => {
    winningCombinations.forEach((comboArray) => {
      var count = 0;
      comboArray.forEach((value, ind) => {
        if (value == 1) {
          if (updatedArray[ind] == currPlayer) {
            count++;
            console.log(count);

            if (count >= 3) {
              alert("Winner is " + currPlayer);
            }
          }
        }
      });
    });
  };

  const currentMove = (index) => {
    let newValues = [...squareValues];

    if (newValues[index] == "") {
      newValues[index] = currPlayer;
      setSquareValues(newValues);

      checkWinner(newValues);

      setCurrPlayer(currPlayer == "X" ? "O" : "X");
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>TicTacToe</h1>
      <div className="row">
        <div onClick={() => currentMove(0)} className="col-4">
          {squareValues[0]}
        </div>
        <div onClick={() => currentMove(1)} className="col-4">
          {squareValues[1]}
        </div>
        <div onClick={() => currentMove(2)} className="col-4">
          {squareValues[2]}
        </div>
      </div>
      <div className="row">
        <div onClick={() => currentMove(3)} className="col-4">
          {squareValues[3]}
        </div>
        <div onClick={() => currentMove(4)} className="col-4">
          {squareValues[4]}
        </div>
        <div onClick={() => currentMove(5)} className="col-4">
          {squareValues[5]}
        </div>
      </div>
      <div className="row">
        <div onClick={() => currentMove(6)} className="col-4">
          {squareValues[6]}
        </div>
        <div onClick={() => currentMove(7)} className="col-4">
          {squareValues[7]}
        </div>
        <div onClick={() => currentMove(8)} className="col-4">
          {squareValues[8]}
        </div>
      </div>
      <button
       type="reset" style={{ width: "100px", marginTop: "5px", borderRadius: "10px" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Home;
