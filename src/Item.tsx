import {TodoType} from './App'

type Props = {
    todo: TodoType;
    complete: (clickedItem: TodoType) => void;
}

const Item: React.FC<Props> = ({todo, complete}) => (
    <div onClick={() => complete(todo)}>
        <p style={ todo.completed ? {textDecoration:"line-through"} : {display: 'block'}}>{todo.title}</p>
    </div>
)

export default Item;