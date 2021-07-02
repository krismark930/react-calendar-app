import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = () => {


    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        
        dispatch( startChecking() );
        
    }, [ dispatch ]);
    
    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch >
                    <PublicRoutes
                        isAuthenticated={ !!uid } // doble exclamación para convertir a booleano
                        exact
                        path="/login"
                        component={ LoginScreen }
                    />

                    <PrivateRoutes
                        isAuthenticated={ !!uid }
                        exact
                        path="/"
                        component={ CalendarScreen }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
