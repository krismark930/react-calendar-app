import moment from 'moment';

import types from '../types/types';

const initialState = {

    events: [{
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add( 2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el pastel',
        user: {
            _id: '123',
            name: 'Omar'
        }
    }],
    activeEvent: null
    
};


const calendarReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [ action.payload, ...state.events]
            }


        
        default:
            return state;
    }
    

}

export default calendarReducer;