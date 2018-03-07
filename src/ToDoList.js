import React, {Component} from 'react';
import ToDo from './ToDo.js';

class ToDoList extends Component{
    constructor() {
        super();
        this.state = {
            listItems: [],
            newItem: ''
        };
    };

    addListItem = (event) => {
        event.preventDefault();
        const tempList = this.state.listItems;
        tempList.push(this.state.newItem);
        this.setState({
            newItem: '',
            listItems: tempList
        });
    };

    handleNewItem = (event) => {
        this.setState({newItem: event.target.value});
    };

    
    removeListItem = (index) => {
        const tempList = this.state.listItems;
        tempList.splice(index, 1);
        this.setState({listItems: tempList});
    };

    render() {
        return (
            <div>
                {this.state.listItems.map((item, i) => <ToDo item={item} index={i} remove={this.removeListItem} />)}
                <form onSubmit={this.addListItem}>
                    <input type="text" onChange={this.handleNewItem} placeholder="New ToDo!" value={this.state.newItem} />
                </form>
            </div>
        )
    }


}
export default ToDoList;