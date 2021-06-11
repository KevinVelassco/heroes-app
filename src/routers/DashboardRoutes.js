import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { DsScreen } from '../components/dc/DsScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/heroes/:heroesId" component={HeroScreen} />
                    <Route exact path="/dc" component={DsScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
