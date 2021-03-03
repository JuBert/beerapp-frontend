import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { GetTodo } from './actions/TodoActions';
import { TodosType } from './actions/TodoActionTypes';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todoState: TodosType = useSelector((state: RootStore) => state.todos);
  useEffect(() => {
    dispatch(GetTodo());
  }, []);
  const todos = todoState.todos;
  return (
    <div className="App">
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
};

export default App;
