
import {useContext} from 'react';
import {ThemeContext, TodoItemsContext} from "../App";

import Button from "./Button";
import Switch from "react-switch";

import BackArrowImage from "../assets/back-arrow-btn.png";
import ForwardArrowImage from "../assets/forward-arrow-btn.png";



const Toppanel = () =>{


    const {currentTheme, changeTheme} = useContext(ThemeContext);
    const {todoItems, setTodoItems} = useContext(TodoItemsContext)


    return (
        <section className="Toppanel--component">
            
            <div id="Toppanel-buttons" className="flex-row-center">
                <Button>Save</Button>
                <Button>Load</Button>
                <label id="Toppanel-theme-switch" className="flex-row-center">
                    <span>Theme: </span>
                    <Switch onChange={
                        ()=>{changeTheme()}
                        } checked={currentTheme === "dark" ? true : false}/>
                </label>
                <Button onClick={()=>{setTodoItems([])}}>Delete all todo</Button>
            </div>

            <div id="Toppanel-pagination" className="flex-row-center">
                <button id="Pagination-back" className="flex-row-center">
                    <img src={BackArrowImage} />
                </button>
                <button id="Pagination-forward" className="flex-row-center">
                    <img src={ForwardArrowImage} />
                </button>
                <span id="Pagination-current-page">1</span>/
                <span id="Pagination-max-page">
                    {
                        todoItems.length % 9 === 0 ? todoItems.length / 9 : Math.ceil(todoItems.length / 9)
                    }
                </span>
            </div>

            <div id="Toppanel-username">
                <h2>Username</h2>
            </div>
                
            
    
        </section>
    )
};

export default Toppanel;