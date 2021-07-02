
import { fetchWithToken } from '../helpers/fetch';
import types from '../types/types';

export const eventSetActive = ( event ) => ({
    
    type: types.eventSetActive,
    payload: event

});

export const eventStartAddNew = ( event ) => {
    return async ( dispatch, getState ) => {

        const { uid, name } = getState().auth;
        
        try {

            const resp = await fetchWithToken('events', event, 'POST');
            const body = await resp.json();

            if ( body.ok ) {

                event.id = body.evento.id;
                event.user = {
                  _id: uid,
                  name
                };
                
                console.log( event );
                dispatch( eventAddNew( event ) );
                
            }
            
            
        } catch (error) {
            console.log(error);
        }
        
    }
}

const eventAddNew = ( event ) => ({
    
    type: types.eventAddNew,
    payload: event

});

export const eventClearActiveEvent = () => ({ type: types.eventClearActive });

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () => ({ type: types.eventDeleted });
