import {
  TodoType,
  TodoDispatchTypes,
  TODO_LOADING,
  TODO_SUCCESS,
  TODO_FAIL,
} from '../actions/TodoActionTypes';

interface DefaultStateI {
  loading: boolean;
  todos?: TodoType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const todoReducer = (
  state: DefaultStateI = defaultState,
  action: TodoDispatchTypes
) => {
  switch (action.type) {
    case TODO_FAIL:
      return {
        loading: false,
      };
    case TODO_LOADING:
      return {
        loading: true,
      };
    case TODO_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
