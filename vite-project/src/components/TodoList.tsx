import React from 'react'
import type { Todo } from '../types/todo'; //타입이어서 import 할때 앞에 type 붙임
import TodoItem from './TodoItem';

type Props = {
    todos: Todo[];
    deleteTodo: (id:number)=>void;
    toggleTodo: (id:number)=>void;
};

function TodoList({
    todos,
    deleteTodo,
    toggleTodo
}: Props) {
    return(
        //목록 돌려줌
    <ul>
        {todos.map(todo=>(
        <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
        />
        ))}
    </ul>
    );
}

export default TodoList