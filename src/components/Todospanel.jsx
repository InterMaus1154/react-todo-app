
import {useContext} from 'react';

import {IMPORTANCE} from "../util/Todo";
import TodoBox from "./TodoBox";

import { TodoItemsContext, FilterContext } from '../App';


const Todospanel = () =>{

    const {todoItems} = useContext(TodoItemsContext);
    const {filter} = useContext(FilterContext);

    return(
        <section className="Todospanel--component">
            {
                todoItems.length == 0 ? <h1 style={{
                    gridColumn: "span 3",
                    gridRow: "span 3",
                    alignSelf: "center",
                    justifySelf: "center",
                    fontSize: 60
                }}>You've got as much free time as you want</h1> :

                
                filter.isFilterEmpty ? todoItems.map(todoItem => (
                    <TodoBox key={todoItem.id} todoItem={todoItem}/>
                )) : filteredItems(todoItems, filter).map(item => {
                    return <TodoBox key={item.id} todoItem={item} />
                })
            }
        </section>
    );

};

function filteredItems(items, filter){

    let filteredItems = [];

    if(filter.itemName){
        filteredItems = items.filter(item=> item.itemName.includes(filter.itemName));
    }

    if(filter.itemCategory){
        filteredItems = items.filter(item=> item.itemCategory.includes(filter.itemCategory));
    }

    return filteredItems;
}

export default Todospanel;