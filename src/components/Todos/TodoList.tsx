import React from 'react';
import TodoItem from './TodoItem';
import {observer} from 'mobx-react';

import './TodoList.css';

interface TodoListProps{
    todos: Todo[],
    setEdit: React.Dispatch<React.SetStateAction<Edit>>,
    delTodo: DelTodo
}

const TodoList: React.FC<TodoListProps>= ({todos, setEdit, delTodo}) => {
    

    return (
        <div className="todo-list">
            <h1>Hello World</h1>
            {
                todos.map(todo =>{
                    return <TodoItem 
                        todo ={todo} key={todo.id}  
                        setEdit={setEdit} 
                        delTodo={delTodo}
                    />
                })
            }
        </div>
    )
}

export default observer(TodoList);