export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const CLEARALL_TAGS = 'CLEARALL_TAGS';

export const addTag = (tag) => {
    return {  
        type: 'ADD_TAG',
        payload: tag,
      }
}

export const removeTag = (index) => {
    return {  
        type: 'REMOVE_TAG',
        payload: index,
      }
}
export const clearAllTags = (tag) => {
    return {  
        type: 'CLEARALL_TAGS',
      }
}
