import React, { useState } from 'react'
import { ListItemSecondaryAction, ListItemText, IconButton, } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, selectEditTodo } from "../redux/todo/todoActions"
import styled from "styled-components"
import { darken } from '@material-ui/core/styles';

const TodoText = styled(ListItemText)`
text-decoration: 
    ${props => props.ischecked ? "line-through red 2px" : "none"};
`;

export const IconBtns = styled(IconButton)`
${({ theme }) => `
    background-color: ${theme.palette.info.main};
    border-radius: 5px;
    padding: 8px;
    margin-left: 10px;
    opacity: 0.4;
    &:hover {
        opacity: 1;
        background-color: ${theme.palette.info.main};
    }
`}`;

export const DeleteIconBtns = styled(IconBtns)`
${({ theme }) => `
    background-color: ${theme.palette.warning.main};
    &:hover {
        opacity: 1;
        background-color: ${theme.palette.warning.main};
    }
`}`;

const TodoItem = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <TodoText id={props.todo.id} primary={props.todo.value} ischecked={props.todo.completed}
            />
            {props.displayBtns ?
                <ListItemSecondaryAction >
                    <IconBtns edge="start" aria-label="comments"
                        onClick={() => dispatch(selectEditTodo(props.todo.id))}>
                        <CreateIcon style={{
                            color: "white",
                        }} />
                    </IconBtns>
                    <DeleteIconBtns edge="start" aria-label="comments" bgColor="red"
                        onClick={() => dispatch(deleteTodo(props.todo.id))}
                    >
                        <DeleteIcon style={{
                            color: "white",
                        }} />
                    </DeleteIconBtns>
                </ListItemSecondaryAction>
                : null}
        </>
    )
}

export default TodoItem
