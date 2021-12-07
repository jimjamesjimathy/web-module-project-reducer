export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CURRENT_MEMORY_VALUE = "CURRENT_MEMORY_VALUE";
export const ADD_CURRENT_MEMORY_VALUE = "ADD_CURRENT_MEMORY_VALUE";
export const CLEAR_CURRENT_MEMORY_VALUE ="CLEAR_CURRENT_MEMORY_VALUE";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator});
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY});
}

export const currentMemoryValue = () => {
    return({type: CURRENT_MEMORY_VALUE});
}

export const addCurrentMemoryValue = () => {
    return({type: ADD_CURRENT_MEMORY_VALUE});
}

export const clearCurrentMemoryValue = () => {
    return({type: CLEAR_CURRENT_MEMORY_VALUE});
}