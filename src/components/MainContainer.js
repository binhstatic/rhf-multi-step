import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomizedContainer = styled(Container)(
  ({ theme }) => `
    margin-top: ${theme.spacing(4)};
    display: flex;
    flex-direction: column;
    align-items: center;
`
);

const MainContainer = ({ children, ...props }) => {
  return (
    <CustomizedContainer component='main' maxWidth='xs' {...props}>
      {children}
    </CustomizedContainer>
  );
};

export default MainContainer;
