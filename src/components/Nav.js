import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navLists } from '../data/navLists';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export default function Nav() {
  const [show, setShow] = useState(false);
  const initialUserData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : {};
  const [userData, setUserData] = useState(initialUserData);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  const handleAuth = () => {
    signInWithPopup(auth, provider) //
      .then((result) => {
        console.log(result.user);
        setUserData(result.user);
        localStorage.setItem('userData', JSON.stringify(result.user));
      })
      .catch(() => new Error().message);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
        setIsLogin(true);
      } else {
        navigate('/login');
        setIsLogin(false);
      }
    });
  }, [auth, navigate, setIsLogin]);

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
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
      })
      .catch((err) => console.log(err.message));
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
      {!isLogin ? (
        <SignInLogin onClick={handleAuth}>
          <Link to='login'>
            <BiLogIn />
            <span>로그인</span>
          </Link>
        </SignInLogin>
      ) : (
        <SignOut>
          <UserImg src={userData.photoURL} alt={userData.displayName} />
          <DropDown>
            <span onClick={handleLogOut}>Sign out</span>
          </DropDown>
        </SignOut>
      )}
    </NavWrapper>
  );
}
const SignInLogin = styled.a`
  color: #f9f9f9;
  font-size: 17px;
  cursor: pointer;
  span {
    margin-left: 10px;
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  visibility: hidden;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  text-align: center;
  &:hover {
    background-color: rgba(19, 19, 19, 0.7);
  }
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    ${DropDown} {
      visibility: visible;
      transition-duration: 1s;
    }
  }
`;

const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.$show ? '#0e0b14' : 'transparent')};
  display: flex;
  gap: 20px;
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
