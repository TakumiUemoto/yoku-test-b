import { useState } from "react";
import "../App.css";

const TodoList = () => {
    const initialState = [
        {
            task: "Apple",
            isCompleted: false
        },
        {
            task: "Grape",
            isCompleted: false
        },
        {
            task: "Strawberry",
            isCompleted: false
        }
    ];

    const [todos, setTodos] = useState(initialState);
    const [task, setTask] = useState("");

    const handleNewTask = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task === "") return;
        setTodos((todos) => [...todos, { task, isCompleted: false }]);
        setTask("");
    };

    const handleRemoveTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input" value={task} onChange={handleNewTask} />
                <button type="submit" className="addButton">
                追加
                </button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                <li key={index} className="li">
                    <button
                    onClick={() => {
                        handleRemoveTask(index);
                    }}
                    className="deleteButton"
                    >
                    X
                    </button>
                    {todo.task}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
