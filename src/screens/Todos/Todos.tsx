import React, {useState} from 'react';
import { TodoForm } from '../../components/Todos/TodoForm';
import  TodoList  from '../../components/Todos/TodoList';
import {RiAddCircleFill} from 'react-icons/ri';
import {todosStore} from '../../stores/Todos.store';
import {observer} from 'mobx-react';

import './Todos.css';

const Todos:React.FC = () => {

    const [iconAdd, setIconAdd] = useState(true);//true la appear

    const[edit, setEdit] = useState<Edit>({
        id: '',
        title: '', 
        description: '', 
        deadline: '',
        isCompleted: false
    });
  
    const changeIconAdd  = () => {
        setIconAdd(!iconAdd);
    }

    const handleUpdate = (newTodo: Todo) =>{
        todosStore.editTodo(edit.id, newTodo);
        setEdit({
            id: '',
            title: '', 
            description: '', 
            deadline: '',
            isCompleted: false
        });
    }

    if(edit.id){
        
        return (
            <>
            <div className="todos">
                <div className="todos-left todos-left-resize">
                    <TodoList 
                        todos={todosStore.todos}  
                        setEdit={setEdit}
                        delTodo ={todosStore.delTodo}
                    />
                </div>
                <div className="add-todo-right">
                    <TodoForm 
                        edit ={edit}
                        iconAdd = {iconAdd} 
                        setIconAdd = {setIconAdd}
                        onSubmit={handleUpdate}
                    />
                </div> 
            </div>
            </>
        )
    }

    return (
        <>
            <div className="todos">
                {
                    (iconAdd)?
                    (
                        <>
                            <div className= "icon-add-todo">
                                <div className="tooltip">
                                    <span className="tooltipAdd">Add new todo</span>
                                    <RiAddCircleFill onClick={changeIconAdd}/>
                                </div>
                            </div>
                            <div className="todos-left">
                            <TodoList 
                                todos={todosStore.todos}  
                                setEdit={setEdit}
                                delTodo ={todosStore.delTodo}
                            />
                            </div>
                        </>
                    ):
                    (
                        <>
                            <div className="todos-left todos-left-resize">
                            <TodoList 
                                todos={todosStore.todos}  
                                setEdit={setEdit} 
                                delTodo ={todosStore.delTodo}
                            />
                            </div>
                            <div className="add-todo-right">
                                <TodoForm 
                                    iconAdd = {iconAdd} 
                                    setIconAdd = {setIconAdd}
                                    onSubmit = {todosStore.addTodo}
                                />
                            </div> 
                        </>
                    )
                }
            </div>
        </>
    )
}

export default observer(Todos);
