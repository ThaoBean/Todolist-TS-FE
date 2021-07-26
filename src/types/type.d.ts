type UserLogin = {
    username: string,
    password: string,
}

type UserRegister = {
    username: string,
    password: string,
    email: string,
}

type Todo = {
    id: string,
    title: string,
    description: string,
    deadline: string,
    isCompleted: boolean,
}

type AddTodo = {
    (todo: Todo) : void;
}

type EditTodo= {
    (id: string, newTodo: Todo) : void;
}

type DelTodo = {
    (id: string): void;
}

type ChangeComplete = {
    (id: string): void;
}

type Edit={
    id: string;
    title: string;
    description: string;
    deadline: string;
    isCompleted: boolean;
}

