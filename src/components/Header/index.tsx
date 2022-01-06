import React from 'react';
import { Container, HeaderTitle } from './styles';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <Container>
      <HeaderTitle>{title && title}</HeaderTitle>
    </Container>
  );
};

export default Header;
