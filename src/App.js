import './App.css';
import Square from './Components/Square'
import { useEffect, useState } from 'react';
import { Patterns } from './Components/Patterns';

function App() {
  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState("X");
  const [result,setResult] = useState({winner:"none",state:"none"})

useEffect(()=>{
  console.log("effect: "+player)
  checkWin();
  if(player==="X"){
    setPlayer("O")
  }else{
    setPlayer("X")
  }
}, [board])

useEffect(()=>{
  if(result.state != "none") alert(`Winner is ${player}`)
  setBoard(["","","","","","","","",""])
}, [result])

const chooseSquare = (square) => {
  setBoard(board.map((val,idx) => {
    if(idx == square && val == ""){
      return player;
    }
    return val;
  })
  );
};

const checkWin = () => {
  Patterns.forEach((val) => {
    const temp = board[val[0]];
    if(temp == "") return;
    let win = true;
    val.forEach((x) => {
      if(board[x] != temp){
        win = false;
      }
    })
    if(win == true){
      console.log("cwin: "+win);
      setResult({winner:player,state:"win"})
    }
  })
};


  return (
    <div className="App">
      <div className="Board">
        <div className="row">
          <Square val = {board[0]} chooseSquare = {() => {chooseSquare(0);}}/>
          <Square val = {board[1]} chooseSquare = {()=>{chooseSquare(1);}}/>
          <Square val = {board[2]} chooseSquare = {()=>{chooseSquare(2);}}/>
        </div>
        <div className="row">
          <Square val = {board[3]} chooseSquare = {()=>{chooseSquare(3);}}/>
          <Square val = {board[4]} chooseSquare = {()=>{chooseSquare(4);}}/>
          <Square val = {board[5]} chooseSquare = {()=>{chooseSquare(5);}}/>
        </div>
        <div className="row">
          <Square val = {board[6]} chooseSquare = {()=>{chooseSquare(6);}}/>
          <Square val = {board[7]} chooseSquare = {()=>{chooseSquare(7);}}/>
          <Square val = {board[8]} chooseSquare = {()=>{chooseSquare(8);}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
// import "./App.css";
// import { useState, useEffect } from "react";
// import Square from "./Components/Square";
// import { Patterns } from "./Components/Patterns";

// function App() {
//   const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
//   const [player, setPlayer] = useState("O");
//   const [result, setResult] = useState({ winner: "none", state: "none" });

//   useEffect(() => {
//     checkWin();
//     checkIfTie();

//     if (player == "X") {
//       setPlayer("O");
//     } else {
//       setPlayer("X");
//     }
//   }, [board]);

//   useEffect(() => {
//     if (result.state != "none") {
//       alert(`Game Finished! Winning Player: ${result.winner}`);
//       restartGame();
//     }
//   }, [result]);

//   const chooseSquare = (square) => {
//     setBoard(
//       board.map((val, idx) => {
//         if (idx == square && val == "") {
//           return player;
//         }

//         return val;
//       })
//     );
//   };

//   const checkWin = () => {
//     Patterns.forEach((currPattern) => {
//       const firstPlayer = board[currPattern[0]];
//       if (firstPlayer == "") return;
//       let foundWinningPattern = true;
//       currPattern.forEach((idx) => {
//         if (board[idx] != firstPlayer) {
//           foundWinningPattern = false;
//         }
//       });

//       if (foundWinningPattern) {
//         setResult({ winner: player, state: "Won" });
//       }
//     });
//   };

//   const checkIfTie = () => {
//     let filled = true;
//     board.forEach((square) => {
//       if (square == "") {
//         filled = false;
//       }
//     });

//     if (filled) {
//       setResult({ winner: "No One", state: "Tie" });
//     }
//   };

//   const restartGame = () => {
//     setBoard(["", "", "", "", "", "", "", "", ""]);
//     setPlayer("O");
//   };

//   return (
//     <div className="App">
//       <div className="board">
//         <div className="row">
//           <Square
//             val={board[0]}
//             chooseSquare={() => {
//               chooseSquare(0);
//             }}
//           />
//           <Square
//             val={board[1]}
//             chooseSquare={() => {
//               chooseSquare(1);
//             }}
//           />
//           <Square
//             val={board[2]}
//             chooseSquare={() => {
//               chooseSquare(2);
//             }}
//           />
//         </div>
//         <div className="row">
//           <Square
//             val={board[3]}
//             chooseSquare={() => {
//               chooseSquare(3);
//             }}
//           />
//           <Square
//             val={board[4]}
//             chooseSquare={() => {
//               chooseSquare(4);
//             }}
//           />
//           <Square
//             val={board[5]}
//             chooseSquare={() => {
//               chooseSquare(5);
//             }}
//           />
//         </div>
//         <div className="row">
//           <Square
//             val={board[6]}
//             chooseSquare={() => {
//               chooseSquare(6);
//             }}
//           />
//           <Square
//             val={board[7]}
//             chooseSquare={() => {
//               chooseSquare(7);
//             }}
//           />
//           <Square
//             val={board[8]}
//             chooseSquare={() => {
//               chooseSquare(8);
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
