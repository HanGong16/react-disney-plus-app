import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './SearchPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from './../../api/axios';
import SearchErrorPage from './ErrorPage';
import SearchData from './SearchData';

export default function SearchPage() {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('q');

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  console.log(searchResults);

  return (
    <div className='search-container'>
      <Input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='검색어를 입력하세요 '
      />
      {searchResults.length > 0 ? (
        <div className='section-container'>
          {searchResults
            .filter(
              (searchResult) =>
                searchResult.backdrop_path !== null &&
                searchResult.media_type !== 'person'
            )
            .map((searchResult) => (
              <SearchData {...searchResult} key={searchResult.id} />
            ))}
        </div>
      ) : (
        <SearchErrorPage searchTerm={searchTerm} />
      )}
    </div>
  );
}

const Input = styled.input`
  position: fixed;
  left: 50%;
  top: 80px;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  color: white;
  padding: 30px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(75, 78, 90);
  color: rgb(168, 169, 173);
  outline: none;
  font-size: 40px;
  z-index: 50;
  &::placeholder {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.3;
  }
`;
