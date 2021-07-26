import React from 'react';
import {observer} from 'mobx-react';
import {FcAlarmClock} from 'react-icons/fc';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

import './TodoItem.css';

interface TodoItemProps{
    todo: Todo,
    setEdit: React.Dispatch<React.SetStateAction<Edit>>,
    delTodo: DelTodo
}

const TodoItem :React.FC<TodoItemProps> = ({todo, setEdit, delTodo}) => {

    return (
        <div className="todo-row" >
            <div className="todo-title">{todo.title}</div>
            <div className="todo-des">{todo.description}</div>
            <div className="todo-time">{todo.deadline}</div>
            <div className="todo-act">
                <div className="act-icon">
                    <RiCloseCircleLine 
                        className="delete-icon" 
                        onClick={()=>{delTodo(todo.id)}}
                    />
                    <TiEdit 
                        className="edit-icon" 
                        onClick={() => {
                    
                            setEdit(
                                {
                                    id: todo.id ,
                                    title: todo.title, 
                                    description: todo.description, 
                                    deadline: todo.deadline, 
                                    isCompleted: todo.isCompleted
                                }
                                );
                            }
                        }
                    />
                </div>
                <div className="alarm-icon">
                    <FcAlarmClock/>
                </div>
            </div>
        </div>
    )
}

export default observer(TodoItem);