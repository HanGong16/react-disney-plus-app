import React, { useCallback, useEffect, useState } from 'react';
import axios from '../api/axios';
import './Row.css';

export default function Row({ title, fetchurl, id }) {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchurl);
    setMovies(response.data.results);
  }, [fetchurl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);
  // console.log(movies);
  return (
    <div>
      <h4>{title}</h4>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>{'<'}</span>
        </div>
        <div className='row__posters'>
          {movies.map((movie) => (
            <div className='row__poster_box' key={movie.id}>
              <img
                className='row__poster'
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className='movie__title'>{movie.title || movie.name}</div>
            </div>
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'>{'>'}</span>
        </div>
      </div>
    </div>
  );
}
