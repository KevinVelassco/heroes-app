import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {alter_ego !== characters && <p className="card-text">{characters}</p>}
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                </div>
                <div className="card-footer d-grid">
                    <Link to={`/hero/${id}`} className="btn btn-primary btn-sm">detalle</Link>
                </div>
            </div>
        </div>
    )
}
