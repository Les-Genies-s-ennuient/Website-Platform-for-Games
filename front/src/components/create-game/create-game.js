import React from 'react';
import { apiConnector } from '../../connectors/api-connector'

class CreateGameComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            GameId: ''
        }

        // To use the 'this' keyword, we need to bind it to our function
        this.onChange = this.onChange.bind(this);
    }

    // A custom function to change the name in our state to match the user input
    async onChange(e) {
        const gameId = await apiConnector.getQueryAPI(`games/new-game/${e.target.value}`)
        this.setState({
            GameId: gameId
        });
    }
    // The render function, where we actually tell the browser what it should show
    render() {
        return (
            <div>
                <section className="section">
                    <label className="label">Game Type:</label>
                    <input className="input" name="gameType" placeholder="Enter Game Type desired..." onChange={this.onChange} />
                </section>
            </div>
        )
    }
}

export default CreateGameComponent;
