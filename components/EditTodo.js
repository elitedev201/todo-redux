import React, { useState } from 'react'
import { ListItemSecondaryAction, IconButton, TextField, } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useDispatch, } from "react-redux";
import { cancelEditTodo, editTodo } from "../redux/todo/todoActions"
import styled from "styled-components"
import { IconBtns, DeleteIconBtns } from "./TodoItem"

const EditBtns = styled(IconBtns)`
    opacity: 1;
`;
const CancelEditBtns = styled(DeleteIconBtns)`
    opacity:1;
`;

const EditTodo = (props) => {
    const [itemValue, setItemValue] = useState(props.todo.value);
    const dispatch = useDispatch();

    const handleItemChange = ev => setItemValue(ev.target.value);


    const handleEditAndResetForm = ev => {
        ev.preventDefault();

        dispatch(editTodo({
            ...props.todo,
            value: itemValue
        }))

        // Reset value
        setItemValue('');
    };

    return (
        <>
            <TextField
                variant="outlined"
                margin="dense"
                id={props.todo.id}
                value={itemValue}
                onChange={handleItemChange}
                autoFocus
            />
            <ListItemSecondaryAction>
                <EditBtns edge="start" aria-label="comments"
                    onClick={handleEditAndResetForm}
                >
                    <DoneIcon
                        style={{
                            color: "white",
                        }} />
                </EditBtns>
                <CancelEditBtns edge="start" aria-label="comments"
                    bgColor="red"
                    onClick={() => dispatch(cancelEditTodo())}
                >
                    <CloseIcon
                        style={{
                            color: "white",
                        }} />
                </CancelEditBtns>
            </ListItemSecondaryAction>
        </>
    )
}

export default EditTodo
