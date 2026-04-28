import React from 'react'

import type { Todo } from '../types/todo'; //type 이어서 type {Todo}

// Todo 하나와 동작 함수들 받기

type Props = {
    todo: Todo;
    deleteTodo:(id:number)=>void; //함수의 반환타입 (return void)
    toggleTodo:(id:number)=>void;
};

function TodoItem ({
    todo,
    deleteTodo,
    toggleTodo

}: Props) {
    return (
        //한줄 렌더링
        <li>
        <input
            type="checkbox"
            checked={todo.completed}

            // 체크 시 completed true/false 반전
            onChange={() =>
            toggleTodo(todo.id)
            }
        />

        <span
            style={{
            textDecoration:
            todo.completed
            ? "line-through"
            : "none"
            }}
        >
            {todo.text}
        </span>

        <button
            onClick={() =>
            deleteTodo(todo.id)
            }
        >
            삭제
        </button>
        </li>
    );
}



export default TodoItem