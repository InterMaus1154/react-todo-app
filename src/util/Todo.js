


export class Todo{
    constructor(id, itemName, itemDescription, itemCategory, itemDueDate, itemImportance){
        this.id = id;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemCategory = itemCategory;
        this.itemDueDate = itemDueDate;
        this.itemImportance = itemImportance;
    }

    static date(itemDueDateRef, itemTimeRef, allDay, day){
        return {
            date: itemDueDateRef.current.value,
            time: itemTimeRef.current.value,
            allDay: allDay,
            day: day
        };
    }

    static getDayName(day){
        switch(day){
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return day;
        }
    }

}

/*export const IMPORTANCE = {
    HIGH: "#C94D4D",
    MID: "#E6C455",
    LOW: "#0A4B0A"
};*/

export const IMPORTANCE = {
    DEFAULT: {
        id: "default",
        value: "<>",
        color: null
    },
    HIGH: {
        id: "imp-high",
        value: "Urgent",
        color: "#C94D4D"
    },
    MID: {
        id: "imp-mid",
        value: "Delayable",
        color: "#E6C455"
    },
    LOW:{
        id: "imp-low",
        value: "Next time",
        color: "#0A4B0A"
    }
};