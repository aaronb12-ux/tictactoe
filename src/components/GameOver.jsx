import GameState from './GameState';

function GameOver({gameState}){
        switch(gameState) {
            case GameState.inProgress:
                return <></>;

            case GameState.playerOWins:
                return <div className="game-over">O wins</div>

            case GameState.playerXWins:
                return <div className="game-over">X wins</div>

            case GameState.Draw:
                return <div className="game-over">draw</div>



            default:
                return <></>

        }

}

export default GameOver;