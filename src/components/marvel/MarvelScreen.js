import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h2>Marvel</h2>
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
