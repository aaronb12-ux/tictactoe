import Gamestate from "./GameState";

function Reset({gameState, onReset})
{
  if (gameState === Gamestate.inProgress) {
      return;
  }
      return (
          <button onClick={onReset} className="reset-button">Reset</button>
      );
}

export default Reset;