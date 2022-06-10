import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)(
  ({ theme }) => `
    margin: ${theme.spacing(3, 0, 2)};
`
);

const PrimaryButton = ({ children, ...props }) => {
  return (
    <CustomizedButton
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      {...props}
    >
      {children}
    </CustomizedButton>
  );
};

export default PrimaryButton;
