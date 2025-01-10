function Tile({className, value, onClick, playerTurn}) {
    let HoverClass = null;
    if (value == null && playerTurn != null)
    {
        HoverClass = `${playerTurn.toLowerCase()}-hover`;
    }
    return (
        <div onClick={onClick} className={`tile ${className} ${HoverClass}`}>{value}</div>
    );
}

export default Tile;