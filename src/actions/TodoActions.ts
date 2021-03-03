import { Dispatch } from 'redux';
import axios from 'axios';
import {
  TodoDispatchTypes,
  TODO_LOADING,
  TODO_SUCCESS,
  TODO_FAIL,
} from './TodoActionTypes';

export const GetTodo = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: TODO_LOADING,
    });

    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    dispatch({
      type: TODO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: TODO_FAIL,
    });
  }
};
