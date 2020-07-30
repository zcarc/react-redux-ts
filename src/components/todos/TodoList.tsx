import React from "react";
import useTodos from "../../hooks/todos/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = useTodos()

    if(todos.length === 0)
        return <p>등록된 항목이 없습니다.</p>

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList