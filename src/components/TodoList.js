import { useState } from "react";
import styled from "styled-components";

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

    const handleNewTask = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input value={task} onChange={handleNewTask} />
                <AddButton type="submit" >
                追加
                </AddButton>
            </Form>
            <ul>
                {todo.map((text, index) => (
                <Li key={ index }>
                    <DeleteButton
                    onClick={() => {handleRemoveTask(index);}}>
                        X
                    </DeleteButton>
                    {text.task}
                </Li>
                ))}
            </ul>
        </Container>
    );
};
const Container = styled.div`
    margin: 100px;
    width: 700px;
`;

const Form = styled.form`
    margin: 60px 40px;
`;

const Input = styled.input`
    display: inline-block;
    position: relative;
    text-align: center;
    border: 1.5px solid darkblue;
    width: 365px;
    height: 45px;
    margin: 5px;
    font-size: 30px;
    padding-left: 40px;
`;

const AddButton = styled.button`
    display: inline-block;
    padding: 5px 15px;
    margin: 5px;
    color: white;
    font-size: 1.6em;
    background-color: darkblue;
    border: none;
`;

const DeleteButton = styled.button`
    display: inline-block;
    position: absolute;
    left: 0px;
    vertical-align: middle;
    padding: 10px 18px;
    color: white;
    font-size: 1.6em;
    background-color: darkblue;
    border: none;
`;

const Li = styled.li`
    display: inline-block;
    line-height: 70px;
    position: relative;
    list-style: none;
    border: 1.5px solid #0000e6;
    width: 410px;
    height: 65px;
    margin: 5px;
    font-size: 1.6em;
    padding-left: 90px;
`;

export default TodoList;
