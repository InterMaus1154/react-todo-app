import "./style/App.css";
import "./style/theme.css";
import Sidepanel from  "./components/Sidepanel";
import Toppanel from  "./components/Toppanel";
import Todospanel from  "./components/Todospanel";
import { createContext, useEffect, useState } from "react";
import {Todo, IMPORTANCE} from "./util/Todo";


export const ThemeContext = createContext("light");
export const TodoItemsContext = createContext([]);
export const FilterContext = createContext({});




const App = () =>{
    const [theme, setTheme] = useState("light");
    const toggleTheme = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    };

    const themeValues = {
        currentTheme: theme,
        changeTheme: toggleTheme
    };

    let defaultTodos = [];
    let defaultCategories = ["<>","house", "garden", "work", "school"];
    
    if(!(window.localStorage.getItem("todo-items") == null)){
        defaultTodos = JSON.parse(window.localStorage.getItem("todo-items"));
    }

    if(!(window.localStorage.getItem("categories") == null)){
        defaultCategories = JSON.parse(window.localStorage.getItem("categories"));
    }

    const [todoItems, setTodoItems] = useState(defaultTodos);
    const [categories, setCategories] = useState(defaultCategories);
    const [filter, setFilter] = useState(
        {
        isFilterEmpty: false,
        itemName: null,
        itemCategory: null,
        itemImportance: null});

    useEffect(()=>{
        window.localStorage.setItem("todo-items", JSON.stringify(todoItems));
    }, [todoItems]);

    useEffect(()=>{
        window.localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);
    
    const todosValues = {
        todoItems: todoItems,
        setTodoItems: setTodoItems
    };
    return(
        <ThemeContext.Provider value={themeValues}>
            <FilterContext.Provider value={{filter, setFilter}}>
            <TodoItemsContext.Provider value={todosValues}>
                <main className="App--component" id={theme}>
                    <Toppanel />
                    <Sidepanel categories={categories} setCategories={setCategories}/>
                    <Todospanel/>
                </main>
             </TodoItemsContext.Provider>
             </FilterContext.Provider>
        </ThemeContext.Provider>
    );
};

export default App;