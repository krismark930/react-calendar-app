import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearActiveEvent } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {
     
    const dispatch = useDispatch();
    
    const handleClickNew = () => {
        dispatch( eventClearActiveEvent() );
        dispatch( uiOpenModal() );
    }
    
    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddNewFab
