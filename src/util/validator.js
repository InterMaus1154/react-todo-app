

export default class Validator{
    static isItemValid(itemNameInputRef, minNameLength, itemCategoryRef, itemDate, allDay, itemTimeRef, defaultCatValue){
        let isTodoValid = true;

        if(itemNameInputRef.current.value.trim().length === 0){
            isTodoValid = false;
        }

        if(itemCategoryRef.current.value == defaultCatValue){
            isTodoValid = false;
        }

        
        if(!itemDate.getFullYear()){
            isTodoValid = false;
        }
        if(itemDate.setHours(0,0,0,0) < new Date().setHours(0,0,0,0)){
            isTodoValid = false;
        }

        if(!allDay && !itemTimeRef.current.value){
            isTodoValid = false;
        }

        return isTodoValid;
    }

    static resetInputFields(itemNameInputRef, itemDescriptionRef, itemCategoryRef, itemDateRef, setAllDay, itemTimeRef, defaultCatValue){
        setAllDay(false);
        itemNameInputRef.current.value = "";
        itemNameInputRef.current.focus();
        itemCategoryRef.current.value = defaultCatValue;
        itemDateRef.current.value = "";
        itemTimeRef.current.value = "";
        itemDescriptionRef.current.value = "";
    }
}