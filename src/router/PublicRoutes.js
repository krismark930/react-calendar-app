import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';

const PublicRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            component={ (props) => (
                ( isAuthenticated )
                ? <Redirect to="/" />
                : <Component { ... props } />
            )}
        />
    )
}

export default PublicRoutes

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
