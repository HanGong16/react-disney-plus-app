import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
export default function DetailPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/movie/${movieId}`);
      setMovie(res.data);
    }
    fetchData();
  }, [movieId]);
  if (!movie) return null;
  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title ? movie.title : movie.name}
        style={{ width: '100%', height: '700px', opacity: 0.7 }}
      />
      <h2>{movie.title || movie.name}</h2>
      <p>{movie.overview || '설명이 없습니다 '}</p>
    </section>
  );
}
