import React, {useState, useRef, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { uuid as id } from 'uuidv4';
// import setHours from "date-fns/setHours";
// import setMinutes from "date-fns/setMinutes";


import './TodoForm.css';
interface TodoFormProps{
    iconAdd: boolean;
    setIconAdd:React.Dispatch<React.SetStateAction<boolean>>;
    onSubmit: AddTodo;
    edit?: Edit;
};

export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [startDate, setStartDate] = useState( !props.edit ? new Date() : convertFromStringToDate(props.edit.deadline));

    function convertFromStringToDate(stringDate: string){
        let datetime = stringDate.split('/');
        return(new Date(parseInt(datetime[2]), parseInt(datetime[1]) -1, parseInt(datetime[0])));
    }

    const[input, setInput] = useState( !props.edit ?
        {
            title:'', 
            description: ''
        }:
        {
            title: props.edit.title, 
            description: props.edit.description
        }
    );



    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) =>{
        setInput({
            ...input, 
            [e.target.name]: e.target.value,
        });
    }

    const handleClickCancel = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.setIconAdd(!props.iconAdd);
    }

    const handleClickSave = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if(!props.edit){
            if(!input.title || !input.description) return;
            props.onSubmit({
                id: id(),
                title: input.title, 
                description: input.description, 
                deadline: startDate.toLocaleDateString() , 
                isCompleted: false
            });
        }
        else{
            props.onSubmit({
                id: id(),
                title: input.title, 
                description: input.description, 
                deadline: startDate.toLocaleDateString() , 
                isCompleted: props.edit.isCompleted
            });
            
        }
        
        setInput({
            title:'', 
            description: ''
        });

        setStartDate(new Date());
        props.setIconAdd(!props.iconAdd);
    }

    return (
        <div className="todo-form">
            {
                !props.edit ? 
                (
                    <>
                    <h1>Add New Todo</h1>
                    <div className="todo-form-main">
                        <div className="input">
                            <div className="label">Title: </div>
                            <input 
                                className="todo-input"
                                type='text'
                                name='title'
                                value={input.title}
                                onChange={handleChange}
                                required
                                
                            />
                        </div>
                        
                        <div className="input">
                            <div className="label">Description: </div>
                            <textarea 
                                className="todo-input"
                                name='description'
                                value={input.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input">
                            <div className="label">Deadline: </div>
                            <DatePicker 
                                className="todo-input"
                                selected={startDate} 
                                onChange={(date: Date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                
                            />
                        </div>
                    </div>
                    </>
                    
                ):
                (
                    <>
                    <h1>Update Todo</h1>
                    <div className="todo-form-main">
                        <div className="input">
                            <div className="label">Title: </div>
                            <input 
                                className="todo-input"
                                type='text'
                                name='title'
                                value={input.title}
                                onChange={handleChange}
                                required
                                
                            />
                        </div>
                        
                        <div className="input">
                            <div className="label">Description: </div>
                            <textarea 
                                className="todo-input"
                                name='description'
                                value={input.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input">
                            <div className="label">Deadline: </div>
                            <DatePicker 
                                className="todo-input"
                                selected={startDate} 
                                onChange={(date: Date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                
                            />
                        </div>
                    </div>
                    </>
                )
            }
            
            <div className="btn">
                <button className="todo-button" onClick={handleClickCancel}>Cancel</button>
                <button className="todo-button" onClick ={handleClickSave}>&nbsp;Save&nbsp;</button>
            </div>
        </div>
    )
}
