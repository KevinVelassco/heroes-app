import React from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    const { heroesId } = useParams();
    const hero = getHeroById(heroesId);

    if (!hero) return <Redirect to="/" />;

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = hero;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-5 h-100">
                    <img src={`../assets/heroes/${heroesId}.jpg`} classNameName="card-img-top" alt={superhero} />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title mb-4">{superhero}</h5>
                        <p className="card-text"><b>Alter ego: </b>{alter_ego}</p>
                        <p className="card-text"><b>Publisher: </b>{publisher}</p>
                        <p className="card-text"><b>First appearance: </b>{first_appearance}</p>
                        <p className="card-text"><b>Characters: </b>{characters}</p>

                        <button onClick={handleReturn} className="btn btn-primary btn-sm">Return</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
