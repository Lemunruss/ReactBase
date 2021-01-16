import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList({todos, onToggleHandler}) {
    return (
        <ul style={styles.ul} >
            {todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} 
                index={index} onChange={onToggleHandler}/>
            })}
        </ul>
    )
}

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleHandler: PropTypes.func.isRequired
}

export default TodoList;
