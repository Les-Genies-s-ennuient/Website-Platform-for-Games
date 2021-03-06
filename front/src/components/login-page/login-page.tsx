import React from 'react';
type State = any;

interface Props {
    userUpdate?: string
}

class LoggingPage extends React.Component<{}, State> {
    setUser: any;
    constructor(props: Props = {}) {
        super(props);
        this.state = {
            name: ''
        };
        this.setUser = props.userUpdate;
        // To use the 'this' keyword, we need to bind it to our function
        this.onChange = this.onChange.bind(this);
    }
    // A custom function to change the name in our state to match the user input
    onChange(e: any) {
        this.setState({
            name: e.target.value
        });
        this.setUser(e);
    }
    // The render function, where we actually tell the browser what it should show
    render() {
        return (<div>
                <section className="section">
                    <label className="label">Name:</label>
                    <input className="input" name="name" placeholder="Enter your name..." onChange={this.onChange}/>
                </section>
            </div>);
    }
}
export default LoggingPage;
