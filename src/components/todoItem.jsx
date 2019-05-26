import React, { Component } from 'react';
import '../componentsStyling/todoItem.css';

class TodoItem extends Component {
    constructor(props) {
        const { itemIndex, text } = props;
        super(props);
        this.state = { itemIndex: itemIndex, text: text };
    }
    render() { 
        const { itemIndex, text } = this.state;
        const { handleRemove } = this.props;
        return ( 
            <div className="todo-item">
                <div className="todo-content">
                    <textarea autoComplete="off" spellCheck="false" defaultValue={text} onBlur={this.checkChange}></textarea>
                    <div className="remove-button" onClick={() => handleRemove(itemIndex)}></div>
                </div>
            </div>
         );
    }
    checkChange = async e => {
        const { handleChange } = this.props;
        const { itemIndex, text } = this.state;
        console.log(itemIndex, text, handleChange);
        if(e.target.value.trim() !== text.trim())
            await handleChange(itemIndex, e.target.value);
        else
            console.log('Wartość pola nie zostala zmieniona');
    };
}

export default TodoItem;