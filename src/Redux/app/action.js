import * as toodActions from "./actionTypes";
import axios from 'axios';

const getTodoRequest = () => {
    return {
        type: toodActions.GET_TODO_REQUEST,
    };
};
const getTodoSuccess = (data) => {
    return {
        type: toodActions.GET_TODO_SUCCESS,
        data: data
    }
};
const getTodoFailure = (id) => {
    return {
        type: toodActions.GET_TODO_FAILURE,
    }
};
const changeTheme = (link) => {
    return {
        type: toodActions.CHANGE_THEME,
        link
    }
}

export { getTodoRequest, getTodoSuccess, getTodoFailure, changeTheme };
    
export const getTodo = (params = {}) => async dispatch => {
    dispatch(getTodoRequest())
    try {
        const res = await axios.get('https://json-mock-server.vercel.app/postDataToCart');
        dispatch(getTodoSuccess(res.data));
    } catch (err) {
        return dispatch(getTodoFailure(err));
    }
}


const postTodoRequest = () => {
    return {
        type: toodActions.POST_TODO_REQUEST,
    };
};
const postTodoSuccess = (data) => {
    return {
        type: toodActions.POST_TODO_SUCCESS,
        data: data
    }
};
const postTodoFailure = (id) => {
    return {
        type: toodActions.POST_TODO_FAILURE,
    }
};
export { postTodoRequest, postTodoSuccess, postTodoFailure };
    
export const postTodo = (title) => async dispatch => {
    dispatch(postTodoRequest())
    try {
        await axios.post('https://json-mock-server.vercel.app/postDataToCart', {
            ...title,
            status: false
        });
        dispatch(getTodo());
        return {
            success: true
        };
    } catch (err) {
        return dispatch(postTodoFailure(err));
    }
}

export const updateTodo = (status, id) => dispatch => {
    axios.patch(`https://json-mock-server.vercel.app/postDataToCart/${id}`, {
        status
    })
    .then((res)=> dispatch(getTodo()))
}
export const editTodo = (n, val, id) => dispatch => {
    
    axios.patch(`https://json-mock-server.vercel.app/postDataToCart/${id}`, {[n]: val})
    .then((res)=> dispatch(getTodo()))
}
export const deleteTodo = (id) => dispatch => {
    axios.delete(`https://json-mock-server.vercel.app/postDataToCart/${id}`)
    .then((res)=> dispatch(getTodo()))
}