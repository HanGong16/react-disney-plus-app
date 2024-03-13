import React from 'react';
import styled from 'styled-components';
import { categoryList } from '../data/categoryList';
import './Category.css';
export default function Category() {
  return (
    <Container>
      {/* <Wrap>
        <img src='/images/viewers-disney.png' alt='viewer-disney' />
        <video autoPlay loop muted>
          <source src='/videos/disney.mp4' type='video/mp4' />
        </video>
      </Wrap> */}
      {categoryList.map((category) => (
        <Wrap key={category.name}>
          <img src={category.image} alt={category.name} />
          <video muted loop autoPlay>
            <source src={category.video} type={category.type} />
          </video>
        </Wrap>
      ))}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50)),
    url('/images/home-background.png');
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgb(0, 0, 0, 0.72) 0px 30px 22px -10px;
    transform: scale(1.05);
    /* border-color: rgba(249, 249, 249, 0.8); */
    border: none;
    video {
      opacity: 1;
    }
  }
`;
