import React, {Component} from 'react';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            removed: false
        };
    };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    };

    handleButtonClick = () => {
        this.props.remove(this.props.index);
    };

    render() {
        const strike = this.state.clicked ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
        return(
            <div style={{display: 'flex'}}>
                <div style={strike} onClick={this.handleClick}>{this.props.item}</div>
                <button style={{marginLeft: '20px'}} onClick={this.handleButtonClick}>Remove</button>
            </div>
        );
    };
}

export default ToDo;