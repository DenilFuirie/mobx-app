import React from 'react';
import todo from './store/todo.js'
import { observer } from 'mobx-react';

const Todo = observer(() => {
    console.log(todo)
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>fetch todo</button>
            {todo.todos.map(t =>
                <div key={t.id + '___'} className="todo">
                    <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                    {t.title + ' ' + t.id}
                    <button onClick={() => todo.removeTodo(t.id)}>X</button>
                </div>
            )}
        </div>
    );
});

export default Todo;