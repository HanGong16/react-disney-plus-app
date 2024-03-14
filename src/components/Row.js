import React, { useCallback, useEffect, useState } from 'react';
import axios from '../api/axios';
import './Row.css';
import MovieModal from './MovieModal';

export default function Row({ title, fetchurl, id }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchurl);
    setMovies(response.data.results);
  }, [fetchurl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };
  return (
    <div>
      <h4>{title}</h4>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span
            className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {'<'}
          </span>
        </div>
        <div className='row__posters' id={id}>
          {movies.map((movie) => (
            <div className='row__poster_box' key={movie.id}>
              <img
                className='row__poster'
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                onClick={() => handleClick(movie)}
              />
              <div className='movie__title'>{movie.title || movie.name}</div>
            </div>
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span
            className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {'>'}
          </span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal setModalOpen={setModalOpen} movie={movieSelected} />
      )}
    </div>
  );
}
