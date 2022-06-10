import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomizedBox = styled(Box)(
  ({ theme }) => `
    width: 100%;
    margin-top: ${theme.spacing(1)};
`
);

const Form = ({ children, ...props }) => {
  return (
    <CustomizedBox component='form' noValidate {...props}>
      {children}
    </CustomizedBox>
  );
};

export default Form;
