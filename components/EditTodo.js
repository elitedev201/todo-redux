import React, { useState } from 'react'
import { ListItemSecondaryAction, IconButton, TextField, } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useDispatch, } from "react-redux";
import { cancelEditTodo, editTodo } from "../redux/todo/todoActions"
import styled from "styled-components"

const IconBtns = styled(IconButton)`
    background-color: ${props => props.bgColor || "darkgreen"};
    border-radius: 5px;
    padding: 8px;
    margin-left: 10px;
    &:hover {
        opacity: 1;
        background-color: ${props => props.bgColor || "darkgreen"};
        transition: opacity 0.25s ease-in-out;
    }
`

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
            />
            <ListItemSecondaryAction>
                <IconBtns edge="start" aria-label="comments"
                    onClick={handleEditAndResetForm}
                >
                    <DoneIcon
                        style={{
                            color: "white",
                        }} />
                </IconBtns>
                <IconBtns edge="start" aria-label="comments"
                    bgColor="red"
                    onClick={() => dispatch(cancelEditTodo())}
                >
                    <CloseIcon
                        style={{
                            color: "white",
                        }} />
                </IconBtns>
            </ListItemSecondaryAction>
        </>
    )
}

export default EditTodo
