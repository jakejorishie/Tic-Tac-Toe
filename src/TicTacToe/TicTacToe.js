const TicTacToe = () => {
    
    const Cell = () => {
        return <td>-</td>
    }
    
    return (
                <div>
                    <header>
                    <h1>Tic Tac Toe</h1>
                    </header>
                    <table>
                        <tbody>
                            <tr>
                                <Cell />
                                <Cell />
                                <Cell />
                            </tr>
                            <tr>
                                <Cell />
                                <Cell />
                                <Cell />
                            </tr>
                            <tr>
                                <Cell />
                                <Cell />
                                <Cell />
                            </tr>
                        </tbody>
                    </table>
                </div>
      );
}
 
export default TicTacToe;