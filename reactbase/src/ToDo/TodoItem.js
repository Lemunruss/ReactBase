import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '0.5rem 1 rem',
        borderRadius: '4px',
        marginBottom: '0.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChangeHandler}) {
    const {removeTodo} = useContext(Context);
    const classes = [],
    
    if (todo.completed) {
        classes.push('done');
    }


    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} type="checkbox" 
                checked={todo.completed}
                onChange={() => onChangeHandler(todo.id)} />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>   

            <button className='rm'
            onClick={() => removeTodo(todo.id)} >&times;</button>    
        </li>
    )
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChangeHandler: PropTypes.func.isRequired
}

export default TodoItem;
