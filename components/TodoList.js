import React, { useState } from 'react'
import { Checkbox, List, ListItem, ListItemIcon, } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, } from "../redux/todo/todoActions";
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';
import styled from "styled-components";

const ListItemTodo = styled(ListItem)`
    border: 1px grey solid;
    border-radius: 5px;
    margin-bottom: 10px;
    opacity: ${props => props.isChecked ? 0.4 : 1};
`;

const TodoList = (props) => {
    const [displayBtns, setdisplayBtns] = useState(false);
    const todoList = useSelector(state => state?.todos);
    const editItem = useSelector(state => state?.editingItem);

    const updateDisplayMenu = bool => {
        if (displayBtns !== bool) {
            setdisplayBtns(bool);
        }
    }

    const dispatch = useDispatch();
    return (
        <>
            <List >
                {todoList?.map((todo) => {
                    return (
                        <ListItemTodo key={todo.id} role={undefined} dense button
                            onMouseOver={() => updateDisplayMenu(true)}
                            onMouseLeave={() => updateDisplayMenu(false)}
                            isChecked={todo.completed}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    tabIndex={-1}
                                    disableRipple
                                    onChange={() => dispatch(completedTodo(todo))}
                                />
                            </ListItemIcon>
                            {editItem.id === todo.id ? (
                                <EditTodo todo={todo} />
                            ) : (
                                <TodoItem todo={todo} displayBtns={displayBtns} />
                            )}
                        </ListItemTodo>
                    );
                })}
            </List>
        </>
    )
}

export default TodoList
