import React, { Component } from 'react';
import '../componentsStyling/todoList.css';
import TodoItem from './todoItem';
import TodoInput from './todoInput';

class TodoList extends Component {
    constructor() {
        super();
        this.state = { items: this.getItemsFromStorage() };
    }
    render() { 
        return ( 
            <React.Fragment>
                <TodoInput handleCreateItem={this.handleCreateItem}/>
                <div className="todo-list">
                    {this.state.items.map(item => <TodoItem key={item.id} text={item.text} itemIndex={item.id} handleChange={this.handleChange} handleRemove={this.handleItemRemove}/>)}
                </div>
            </React.Fragment>
         );
    }

    handleChange = async (itemIndex, changedValue) => {
        const currentItems = [...this.state.items];
        currentItems[this.getItemIndex(itemIndex)] = changedValue;
        await this.setState({ items: currentItems });
        this.handleItemChange(itemIndex, changedValue);
        console.log('Wartość pola została zaktualizowana!');
    };

    getItemIndex = searchedIndex => {
        const { items } = this.state;
        return items.indexOf(
            items.filter(item => item.id === searchedIndex)[0]
        );
    };

    handleItemChange = (itemId, itemValue) => 
        window.localStorage.setItem(itemId, itemValue);

    getItemsFromStorage = () => Object.keys(window.localStorage)
        .map(storageKey => {
            return {
                id: storageKey,
                text: window.localStorage.getItem(storageKey)
            }
        });

    handleItemRemove = async itemIndex => {
        const currentItems = [...this.state.items];
        currentItems.splice(this.getItemIndex(itemIndex), 1);
        window.localStorage.removeItem(itemIndex);
        await this.setState({ items: currentItems });
        console.log('Przedmiot został usunięty!');
    };

    handleCreateItem = async itemValue => {
        const currentItems = [...this.state.items];
        const currentItem = {
            id: this.getUntappedIndex(),
            text: itemValue
        };
        currentItems.push(currentItem);
        await this.setState({ items: currentItems });
        this.handleItemChange(currentItem.id, currentItem.text);
    };

    getUntappedIndex = () => {
        const currentIndexes = this.state.items.map(item => Number(item.id));
        for(let i = 0; i <= currentIndexes.length; i++)
            if(!currentIndexes.includes(i)) 
                return i;
    }
}
 
export default TodoList;