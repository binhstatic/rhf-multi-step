import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CustomizedTypography = styled(Typography)(
  ({ theme }) => `
  margin: ${theme.spacing(3, 0, 2)};
  font-family: 'Permanent Marker';
  text-align: center;
  font-size: 40px;
  color: #f15412;
  text-shadow: 1px 1px darkmagenta;
`
);

const Header = () => {
  return (
    <>
      <CustomizedTypography component='h1' variant='h5'>
        Sign Up
      </CustomizedTypography>
    </>
  );
};

export default Header;
