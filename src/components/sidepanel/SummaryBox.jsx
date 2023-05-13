
import {useContext, useState, useEffect} from 'react';
import { TodoItemsContext } from '../../App';

import {IMPORTANCE} from "../../util/Todo";

const SummaryBox = () =>{

    const {todoItems} = useContext(TodoItemsContext);

    const [countHigh, setCountHigh] = useState(0);
    const [countMid, setCountMid] = useState(0);
    const [countLow, setCountLow] = useState(0);

    useEffect(()=>{
        setCountHigh(0);
        setCountMid(0);
        setCountLow(0);
        
        todoItems.forEach(todoItem =>{
            switch(todoItem.itemImportance){
                case IMPORTANCE.HIGH:
                    setCountHigh(prev => prev+1);
                    break;
                case IMPORTANCE.MID:
                    setCountMid(prev => prev+1);
                    break;
                case IMPORTANCE.LOW:
                    setCountLow(prev => prev+1);
                    break;
            }
        });
    }, [todoItems]);

    return (
        <div className="Sidepanel--input-box">
            <h2 className="Sidepanel--input-box-header">Summary</h2>
            <div id="Summary-box-categories">
                <label>
                    Number of urgent items:
                    <span style={{color: IMPORTANCE.HIGH.color}}>{countHigh}</span>
                </label>
                <label>
                    Number of mid items:
                    <span style={{color: IMPORTANCE.MID.color}}>{countMid}</span>
                </label>
                <label>
                    Number of low items:
                    <span style={{color: IMPORTANCE.LOW.color}}>{countLow}</span>
                </label>
                <h2>Total due: {todoItems.length}</h2>
            </div>
        </div>
    );
};

export default SummaryBox;