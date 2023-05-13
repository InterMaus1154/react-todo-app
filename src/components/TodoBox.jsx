
import{useContext} from 'react';
import { TodoItemsContext } from '../App';
import Button from "./Button";
import { Todo, IMPORTANCE } from '../util/Todo';

const TodoBox = ({todoItem})=>{

    const {id, itemName, itemDescription, itemImportance, itemCategory, itemDueDate} = todoItem;
    const {setTodoItems} = useContext(TodoItemsContext);

    const deleteTodo = () =>{
        setTodoItems(
            current => current=current.filter(item => item.id !== id)
        );
    };
    return (
        <div className="Todo--box">
            <h1 style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32
            }}
            className="Todo--box-header">{itemName}
                <div className="Todo--box-importance" style={{
                    width: 100,
                    height: 20,
                    backgroundColor: itemImportance.color
                }}></div>
            </h1>
            {itemDescription ? <h2><span style={{color: "red"}}>Notes:</span> {itemDescription}</h2> : null}
            <h2>Category: {itemCategory}</h2>
            <h2>Until: {itemDueDate.date}</h2>
            <h2>{Todo.getDayName(itemDueDate.day)}</h2>
            {!itemDueDate.allDay ? <h2>{itemDueDate.time}</h2> : null}
            <div className="Todo--box-buttons">
                <Button onClick={()=>{
                    deleteTodo();
                }}>Delete</Button>
                <Button>Edit</Button>
            </div>
            
        </div>
    );
};

export default TodoBox;