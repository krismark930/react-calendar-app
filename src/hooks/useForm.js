import { useState } from "react";

/**
 * 
 * @param {*} initialState Object containing the fields from a form you want to manage
 * 
 * @returns [formState, handleInputchange] Current form state and a function to manage changes on the form fields 
 */
const useForm = ( initialState = {} ) => {

    const [formState, setFormState] = useState(initialState);

    const reset = () => {
        setFormState( initialState );
    }
    
    
    
    const handleInputChange = ( { target } ) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return [formState, handleInputChange, reset];
}

export default useForm