
import Button from "../Button";

import {useRef, useContext} from 'react';
import { FilterContext } from "../../App";
import { IMPORTANCE } from "../../util/Todo";

const FilterItemBox = ({categories, centerButtonStyle})=>{


    const {setFilter} = useContext(FilterContext);

    const itemNameInputRef = useRef("");
    const itemCategoryRef = useRef(categories[0]);
    const itemImportanceRef = useRef(IMPORTANCE.DEFAULT);

    const applyFilter = () =>{
        setFilter(current => current = {
            isFilterEmpty: true,
            itemName: itemNameInputRef.current.value.trim().length === 0 ? null : itemNameInputRef.current.value,
            itemCategory: itemCategoryRef.current.value == categories[0] ? null : itemCategoryRef.current.value,
            itemImportance: itemImportanceRef.current.value == IMPORTANCE.DEFAULT ? null : itemImportanceRef.current.value
        });
    };


    const clearFilter = ()=>{
        itemNameInputRef.current.value = "";
        itemCategoryRef.current.value = categories[0];
        itemImportanceRef.current.value = IMPORTANCE.DEFAULT.value;
        setFilter(current => current = {
            isFilterEmpty: true,
            itemName: null,
            itemCategory: null,
            itemImportance: null
        });
    };



    return (
        <div className="Sidepanel--input-box">
                    <h2 className="Sidepanel--input-box-header">Filter</h2>
                    <label htmlFor="item-name-search">Item name:
                        <input type="text" id="item-name-search" ref={itemNameInputRef}/>
                    </label>
                    <label>Category:
                        <select ref={itemCategoryRef}>
                            {
                            categories.map((category, index) => (
                            <option key={index}>{category}</option>
                                ))
                             }
                        </select>
                    </label>
                    <label>Importance: 
                        <select ref={itemImportanceRef}>
                            {   
                                Object.keys(IMPORTANCE).map((key, i) =>{
                                    return <option key={i} >{IMPORTANCE[key].value}</option>
                                })
                            }
                            
                        </select>
                    </label>
                    <Button style={centerButtonStyle} onClick={applyFilter}>Apply filter</Button>
                    <Button style={centerButtonStyle} onClick={clearFilter}>Clear filter</Button>
                </div>
    );
}

export default FilterItemBox;