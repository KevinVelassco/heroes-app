import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import queryString from 'query-string';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

    const { q = null } = useMemo(() => queryString.parse(rest.location.search), [rest.location.search]);

    useEffect(() => {
        const pathname = !q ? rest.location.pathname : `${rest.location.pathname}?q=${q}`;
        localStorage.setItem('page-hero-pathname', pathname);
    }, [rest.location.pathname, q]);

    return (
        <Route
            {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}