import React from 'react'
import { actors } from '../data'

const Actors = () =>
  <div>
    <h1>Actors Page</h1>
      {actors.map(actor =>
        <div>
          <h2>{`Name: ${actor.name}`}</h2>
          <p>Movies:</p>
          <ul>
            {actor.movies.map(movie =>
              <li>{movie}</li>
            )}
          </ul>
        </div>
      )}
  </div>

export default Actors;
