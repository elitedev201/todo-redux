import { ADD_TODO, COMPLETED_TODO, EDIT_TODO, DELETE_TODO, SELECT_EDIT_ITEM, CANCEL_EDIT_ITEM } from "./todoTypes";

export const addTodo = (todoText) => {
    return {
        type: ADD_TODO,
        payload: {
            value: todoText
        }
    }
}

export const selectEditTodo = (id) => {
    return {
        type: SELECT_EDIT_ITEM,
        payload: {
            id
        }
    }
}

export const cancelEditTodo = () => {
    return {
        type: CANCEL_EDIT_ITEM,
        payload: {
        }
    }
}

export const editTodo = (editItem) => {
    return {
        type: EDIT_TODO,
        payload: {
            editItem
        }
    }
}

export const completedTodo = (completedItem) => {
    return {
        type: COMPLETED_TODO,
        payload: {
            completedItem
        }
    }
}

export const deleteTodo = (deleteItemId) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: deleteItemId,
        }
    }
}