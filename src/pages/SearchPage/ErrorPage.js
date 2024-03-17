import React from 'react';
import styled from 'styled-components';
export default function SearchErrorPage({ searchTerm }) {
  return (
    <Error>
      <p> '{searchTerm}'에 대한 검색 결과 없음 </p>
    </Error>
  );
}
const Error = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  p {
    font-size: 20px;
    font-weight: 700;
  }
`;
