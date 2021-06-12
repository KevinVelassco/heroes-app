import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);
    return (
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 row-cols-lg-6 g-4">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero} />
                ))
            }
        </div>
    )
}
