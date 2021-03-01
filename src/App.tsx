import React from 'react';
import {useQuery} from 'react-query';
import './App.css';
import {TextField} from './TextField'
// Components
import Item from './Item'
// Types
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// const url = 'https://api.punkapi.com/v2/beers?per_page=2';

const getTodos = async(): Promise<TodoType[]> => await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()

const App: React.FC = () => {
  const {data, isLoading, error} = useQuery<TodoType[]>('todos', getTodos)
  console.log(data)

  const handleClick = (todo: TodoType) => (
    todo.completed = !todo.completed
  );

  if(isLoading) return <div>loading...</div>;
  if(error) return <div>something went wrong</div>
  return (
    <div className="App">
      <TextField text='hello' />
      <h3>helloworld</h3>
      {data?.map(item => (
        <Item todo={item} key={item.id} complete={handleClick}/>
      ))}
    </div>
  );
}

export default App;
