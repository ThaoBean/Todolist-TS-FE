import { makeAutoObservable } from "mobx";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


export class TodosStore{
    todos: Todo[] = [];

    constructor(todos: Todo[]){
        makeAutoObservable(this);
        this.todos = todos;
    }

    //Add new Todo
    addTodo : AddTodo = (todo: Todo) => {
        this.todos.push(todo);
    };

    //Edit todo
    editTodo : EditTodo = (id: string, newTodo: Todo) => {
        if(!newTodo.title || !newTodo.description) return;

        let updateTodos = this.todos.map(todo=>{
            return todo.id === id? newTodo : todo;
        });

        this.todos= updateTodos;
    }

    //Remove todo
    delTodo : DelTodo = (id: string)=>{
        const restArr = this.todos.filter((todo) => todo.id !== id);
        this.todos = restArr;
    }

    //Change isCompleted
    changeIsCompleted : ChangeComplete = (id: string) => {
        let completedTodo = this.todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        this.todos = completedTodo;
    };

}

export const todosStore = new TodosStore([
    { 
        id: '1',
        title: 'Homework',
        description: 'Do homework 1, Do homework 1, Do homework 1',
        deadline: new Date().toLocaleDateString(), 
        isCompleted:false
    },
    { 
        id: '2',
        title: 'Housework',
        description: 'Do housework 1, Do housework 1, Do housework 1',
        deadline: new Date().toLocaleDateString(), 
        isCompleted:false
    },
    { 
        id: '3',
        title: 'Homework',
        description: 'Do homework 1, Do homework 1, Do homework 1',
        deadline: new Date().toLocaleDateString(),
        isCompleted:false
    },
    { 
        id: '4',
        title: 'Housework',
        description: 'Do housework 1, Do housework 1, Do housework 1',
        deadline: new Date().toLocaleDateString(), 
        isCompleted:false
    },
]);