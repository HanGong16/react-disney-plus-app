import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navLists } from '../data/navLists';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <NavWrapper $show={show}>
      <Logo>
        <img
          src='/images/logo.svg'
          alt='logo'
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </Logo>
      <NavList>
        {navLists.map((navList) => (
          <li key={navList.title}>
            <Link to={navList.url}>
              {' '}
              <span className='nav__icon'> {navList.icon}</span>
              <span className='hide'> {navList.title}</span>
            </Link>
          </li>
        ))}
      </NavList>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.$show ? '#0e0b14' : 'transparent')};
  display: flex;
  align-items: center;
  padding: 20px 36px;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;
const NavList = styled.ul`
  display: flex;

  gap: 20px;
  span {
    margin-left: 4px;
  }
  @media (max-width: 768px) {
    .hide {
      display: none;
    }
    .nav__icon {
      font-size: 20px;
    }
  }
`;
