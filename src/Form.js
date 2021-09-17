import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id: '',
            firstName: '',
            lastName: '',
            email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <button type="submit">
                    Add User
                </button>
                <label for="firstName">FirstName</label>
                <input 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="lastName">LastName</label>
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    value={name} 
                    onChange={this.handleChange} />
                    <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={name} 
                    onChange={this.handleChange} />
            </form>
        );
    }
}

export default Form;
