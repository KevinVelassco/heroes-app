import React, { useMemo, useState } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../../components/heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [search, setSearch] = useState(q);

    const handleInputChange = ({ target }) => {
        setSearch(target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (search.length === 0) return;

        history.push(`?q=${search}`);
    }

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div className="row">
            <div className="col-12">
                <form onSubmit={handleSearch}>
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            name="search"
                            autoComplete="off"
                            value={search}
                            onChange={handleInputChange} />
                    </div>
                    <div className="col-12 mt-2 mb-5">
                        <button type="submit" className="btn btn-primary">search</button>
                    </div>
                </form>
            </div>
            {
                (heroesFiltered.length === 0) &&
                <div className="col-12 alert alert-danger text-center">there are no heroes with the name {q}</div>
            }
            <div className="col-12">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 row-cols-lg-6 g-4">
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
