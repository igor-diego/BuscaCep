import React from 'react';
import Title from '../Title/Title.jsx';
import S from '../Header/Header.module.css';

const Header = () => {
  return (
    <div className={S.div}>
      <Title className={S.title} text="InfoCEP" />
    </div>
  );
};

export default Header;