import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


import Navbar from '../ui/Navbar';
import messages from '../../helpers/calendar-messages-es';
import CalendarEvent from './CalendarEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import CalendarModal from './CalendarModal';

moment.locale('es');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add( 2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Omar'
    }
}];

const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView')  || 'month' );
    
    
    const onDoubleClick = ( e ) => {
        
    }

    const onSelectEvent = ( e ) => {
        
    }

    const onViewChange = ( e ) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }
    
    
    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }
    
    return (
        <div className="calendar-screen">

            <Navbar />


            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
            
        </div>
    )
}

export default CalendarScreen
