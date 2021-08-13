import React, { useState } from 'react'
import { ListItemSecondaryAction, ListItemText, IconButton, } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, selectEditTodo } from "../redux/todo/todoActions"
import styled from "styled-components"
import { white } from 'ansi-colors';

const TodoText = styled(ListItemText)`
text-decoration: 
    ${props => props.isChecked ? "line-through red 2px" : "none"};
`;

const IconBtns = styled(IconButton)`
    background-color: ${props => props.bgColor || "darkgreen"};
    border-radius: 5px;
    padding: 8px;
    margin-left: 10px;
    opacity: 0.4;
    &:hover {
        opacity: 1;
        background-color: ${props => props.bgColor || "darkgreen"};
    }
`

const TodoItem = (props) => {
    const dispatch = useDispatch();

    return (
        <div>
            <TodoText id={props.todo.id} primary={props.todo.value} isChecked={props.todo.completed}
            />
            {props.displayBtns ?
                <ListItemSecondaryAction >
                    <IconBtns edge="start" aria-label="comments"
                        onClick={() => dispatch(selectEditTodo(props.todo.id))}>
                        <CreateIcon style={{
                            color: "white",
                        }} />
                    </IconBtns>
                    <IconBtns edge="start" aria-label="comments" bgColor="red"
                        onClick={() => dispatch(deleteTodo(props.todo.id))}
                    >
                        <DeleteIcon style={{
                            color: "white",
                        }} />
                    </IconBtns>
                </ListItemSecondaryAction>
                : null}
        </div>
    )
}

export default TodoItem
