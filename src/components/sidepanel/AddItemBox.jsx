
import { useState, useContext, useRef } from "react";
import Button from "../Button";
import { IMPORTANCE, Todo } from "../../util/Todo";
import Validator from "../../util/validator";

import {TodoItemsContext} from "../../App";

import Radiobutton from "./RadioButton";

const AddItemBox = ({categories, setModalVisible, centerButtonStyle}) =>{

    const [allDay, setAllDay] = useState(false);
    const [importance, setImportance] = useState(IMPORTANCE.HIGH.value);

    const {todoItems, setTodoItems} = useContext(TodoItemsContext);

    const itemNameInputRef = useRef(null);
    const itemDescriptionInputRef = useRef(null);
    const itemCategoryRef = useRef(null);
    const itemDueDateRef = useRef(null);
    const itemTimeRef = useRef(null);


    const addItem = () =>{

        const itemDate = new Date(itemDueDateRef.current.value);

        if(!Validator.isItemValid(itemNameInputRef, 5, itemCategoryRef, itemDate, allDay, itemTimeRef, categories[0])){
            alert("Check your inputs again!");
            return;
        }

        setTodoItems([...todoItems, new Todo(
            crypto.randomUUID(),
            itemNameInputRef.current.value, 
            itemDescriptionInputRef.current.value,
            itemCategoryRef.current.value, 
            Todo.date(itemDueDateRef, itemTimeRef, allDay, itemDate.getDay()),
            importance
        )]);

        Validator.resetInputFields(itemNameInputRef, itemDescriptionInputRef, itemCategoryRef, itemDueDateRef, setAllDay, itemTimeRef, categories[0]);
    }; 

    return (
        <div className="Sidepanel--input-box">
                    <h2 className="Sidepanel--input-box-header">Add new item</h2>
                    <label htmlFor="item-name-input">Item name:
                        <input type="text" id="item-name-input" ref={itemNameInputRef}/>
                    </label>
                    <label htmlFor="item-description-input">Description:(optional)
                        <input style={{width: "100%"}} type="text" id="item-description-input" ref={itemDescriptionInputRef}/>
                    </label>
                    <div style={{
                        display: "flex",
                        gap: "12px"
                    }}>
                        <label>Select category:
                            <select ref={itemCategoryRef}>
                                {
                                    categories.map((category, index) => (
                                        <option key={index}>{category}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <Button onClick={()=>{setModalVisible(true)}}>+</Button>
                    </div>
                    <div id="Sidepanel-importance-radios">
                        <label>Importance:
                        </label>
                        
                        <Radiobutton 
                            labelText={"- urgent"}
                            className={"importance-radio"}
                            name={"importance"}
                            style={{accentColor: IMPORTANCE.HIGH.color}}
                            state={importance}
                            value={IMPORTANCE.HIGH.value}
                            setState={setImportance}
                            id={"imp-high"}
                        />
                        <Radiobutton 
                            labelText={"- can be delayed"}
                            className={"importance-radio"}
                            name={"importance"}
                            style={{accentColor: IMPORTANCE.MID.color}}
                            state={importance}
                            value={IMPORTANCE.MID.value}
                            setState={setImportance}
                            id={"imp-mid"}
                        />
                        <Radiobutton 
                            labelText={"- maybe next time"}
                            className={"importance-radio"}
                            name={"importance"}
                            style={{accentColor: IMPORTANCE.LOW.color}}
                            state={importance}
                            value={IMPORTANCE.LOW.value}
                            setState={setImportance}
                            id={"imp-low"}
                        />
                    </div>
                    <div id="Sidepanel-due-date">
                        <label>Date:
                            <input type="date" ref={itemDueDateRef}/>
                        </label>
                        <label>All day:
                            <input type="checkbox" onChange={()=>{setAllDay(!allDay)}} checked={allDay}/>
                        </label>
                        <label className={allDay ? "all-day-enabled" : ""}>Time:
                            <input type="time" ref={itemTimeRef}/>
                        </label>
                    </div>
                    <Button onClick={addItem} style={centerButtonStyle}>Add</Button>
                </div>
    );
};

export default AddItemBox;