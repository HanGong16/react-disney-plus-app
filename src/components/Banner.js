import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';
import './Banner.css';
import styled from 'styled-components';

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);

    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`/movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });
    setMovie(movieDetail);
  };
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };
  console.log(movie);
  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Embed
              src={`https://www.youtube.com/embed/${movie.videos?.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos?.results[0].key}`}
              width='640'
              height='360'
              allowfullscreen
            ></Embed>
          </HomeContainer>
        </Container>
        <button
          onClick={() => setIsClicked(false)}
          style={{ cursor: 'pointer' }}
        >
          X
        </button>
      </>
    );
  } else {
    return (
      <header
        className='banner'
        style={{
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {movie.videos?.results[0]?.key && (
              <button
                className='banner__button play'
                onClick={() => setIsClicked(true)}
              >
                play
              </button>
            )}
          </div>
          <p className='banner__description'>
            {truncate(movie?.overview, 100)}
          </p>
        </div>
      </header>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Embed = styled.embed`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
