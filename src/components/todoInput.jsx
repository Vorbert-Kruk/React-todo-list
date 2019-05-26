import React, { Component } from 'react';
import '../componentsStyling/todoInput.css';

class TodoInput extends Component {
    state = {
        currentValue: ''
    }
    render() { 
        return ( 
            <div className="todo-input">
                <label className="input-wrapper">
                    <input type="text" defaultValue={this.state.currentValue} onChange={this.handleChangeValue} onKeyUp={this.handleKeyUp}/>
                    <span onClick={this.onCreateItem}></span>
                </label>
            </div>
         );
    }
    onCreateItem = async e => {
        await this.props.handleCreateItem(this.state.currentValue);
    };
    handleChangeValue = async e => {
        await this.setState({ currentValue: e.target.value.trim() });
    }
    handleKeyUp = async e => {
        if(e.keyCode === 13)
            await this.props.handleCreateItem(this.state.currentValue);
    }
}
 
export default TodoInput;