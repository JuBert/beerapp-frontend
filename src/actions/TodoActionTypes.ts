export const TODO_LOADING = 'TODO_LOADING';
export const TODO_SUCCESS = 'TODO_SUCCESS';
export const TODO_FAIL = 'TODO_FAIL';

export type TodosType = {
  todos: TodoType[];
};

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoLoading {
  type: typeof TODO_LOADING;
}

export interface TodoFail {
  type: typeof TODO_FAIL;
}

export interface TodoSucess {
  type: typeof TODO_SUCCESS;
  payload: {
    todos: TodosType;
  };
}

export type TodoDispatchTypes = TodoLoading | TodoFail | TodoSucess;
