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

    const [todo, setTodo] = useState(initialState);
    const [task, setTask] = useState("");

    const handleNewTask = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task === "") return;
        setTodo((todo) => [...todo, { task, isCompleted: false }]);
        setTask("");
    };

    const handleRemoveTask = (index) => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
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
                {todo.map((text, index) => (
                <li key={index} className="li">
                    <button
                    onClick={() => {
                        handleRemoveTask(index);
                    }}
                    className="deleteButton"
                    >
                    X
                    </button>
                    {text.task}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
