import ReactDOM from 'react-dom';
import {useRef, useState} from 'react';

import Button from "../Button";

const AddCategoryModal = ({categories, setCategories, visible, setVisible, reference})=>{
    const inputRef = useRef(null);

    return ReactDOM.createPortal(
        <div className={visible ? "modal modal-visible" : "modal"} ref={reference}>
            <h1>Manage categories</h1>
            <form onSubmit={e=>{
                e.preventDefault();
                inputRef.current.focus();
                if(inputRef.current.value.trim().length === 0){ 
                    inputRef.current.placeholder = "Cannot be empty";
                    return;
                }
                setCategories([...categories, inputRef.current.value]);
                inputRef.current.value="";
                inputRef.current.placeholder = "";
            }}>
                <input type="text" ref={inputRef}/>
                <Button>Add</Button>
            </form>
            <ul>
            {
                categories.length > 1 ?
                categories.map((category, index) => (
                    <Category key={index} category={category} categories={categories} setCategories={setCategories}/>        
                )) : <h3>Warning! No category remaining</h3>
            }
            </ul>
            
            <Button onClick={()=>{setVisible(false)}}>Close window</Button>
        </div>, document.body
    );
};


export default AddCategoryModal;


function Category({category, categories, setCategories}){

    const deleteItem = () =>{
        setCategories(
            current => current = categories.filter(cat=> cat != category)
        );
    };
    return (
        category === "<>" ? null :
        <li>{category}
            <Button onClick={deleteItem}>Delete</Button>
        </li>
        
    );

}