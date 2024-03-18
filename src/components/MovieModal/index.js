import React, { useRef } from 'react';
import './MovieModal.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function MovieModal({ movie, setModalOpen }) {
  const {
    backdrop_path,
    title,
    overview,
    release_date,
    name,
    vote_average,
    media_type,
    first_air_date,
  } = movie;
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });
  return (
    <div className='presentation' role='presentation'>
      <div className='wrapper-modal'>
        <div className='modal' ref={ref}>
          <span className='modal-close' onClick={() => setModalOpen(false)}>
            X
          </span>
          <img
            className='modal__poster-img'
            alt='modal__poster-img'
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          />
          <div className='modal__content'>
            <p className='modal__details'>
              <span className='modal__type'>{media_type}</span>
              <span className='modal__date'>
                개봉: {release_date ? release_date : first_air_date}
              </span>
            </p>
            <h2 className='modal__title'>{title ? title : name}</h2>
            <p className='modal__overview'>
              평점 : {Number(vote_average?.toFixed(2))}
            </p>
            <p className='modal__overview'>
              {overview || '상세설명이 없습니다😭'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
