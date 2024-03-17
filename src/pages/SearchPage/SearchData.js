import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
export default function SearchData({ backdrop_path, id, title }) {
  const navigate = useNavigate();
  return (
    <Movie>
      <Poster onClick={() => navigate(`/${id}`)}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
          className='movie__poster'
        />
      </Poster>
    </Movie>
  );
}
const Movie = styled.div`
  margin-top: 40px;
  display: inline-block;
`;

const Poster = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
  img {
    height: 100%;
    cursor: pointer;
    width: 195px;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    transition: all 300ms ease-out;
    border-radius: 4px;
  }
  &:hover {
    img {
      outline: 3px solid white;
      box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
        rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
      transform: scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);
      border-radius: 6px;
    }
  }
`;
