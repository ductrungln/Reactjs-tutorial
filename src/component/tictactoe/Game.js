import React, { useReducer } from 'react';
import { calculateWinner } from '../../helper';
import Board from './Board';
import "./GameStyles.css"

const initialState = { // State khởi tạo
    board: Array(9).fill(null),
    xIsNext: true,
}

const gameReducer = (state,action) => {
    switch (action.type) {
        case 'CLICK': { 
        const{board, xIsNext} = state;
        const{index,winner} = action.payload
        if (winner || board[index]) return state;
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board[index] = xIsNext ? "X" : "O"
        nextState.xIsNext = !xIsNext
        return nextState;
        }
        case 'RESET':{
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board = Array(9).fill(null);
            nextState.xIsNext = true;
            return nextState;
        }
        default:
            console.log('Error');
            break;
            
    }
    return state;
}


const Game = () => {
    // const [board,setBoard] = useState(Array(9).fill(null));
    // const [xIsNext,setXIsNext] = useState(true);

    const [state, dispatch] = useReducer(gameReducer, initialState);

    // const [state,setState] = useState({
    //         board: Array(9).fill(null),
    //         xIsNext: true,
    //     })
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        // const boardCopy = [ ...state.board];
        // if (winner || boardCopy[index]) return;
        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner,
            }
        })
        // boardCopy[index] = state.xIsNext ? "X" : "O";
        // console.log(index);
        // setState({
        //     ...state,
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext,
        // });
        // setBoard(boardCopy);
        // setXIsNext(xIsNext => !xIsNext);
    };
    const handleResetGame = ()=>{
        dispatch({
            type: 'RESET',
        })
        // setState({
        //     board: Array(9).fill(null),
        //     xIsNext: true,
        // })
        // setBoard(Array(9).fill(null)); 
        // setXIsNext(true);
    }
    return (
        <div>
            <Board cells={state.board} onClick={handleClick}> </Board>
            {winner &&<div className='game-winner'>
                Winner is {winner}
            </div>}
            <button className='game-reset' onClick={handleResetGame}>Reset game</button>
        </div>
    );
};

export default Game;