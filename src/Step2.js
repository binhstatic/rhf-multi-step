import React from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from './store/DataContext';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PrimaryButton from './components/PrimaryButton';
import MainContainer from './components/MainContainer';
import Form from './components/Form';
import Input from './components/Input';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: data.email,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push('./step3');
    setValues(data);
  };

  const handleBack = () => {
    history.push('./');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id='email'
          type='email'
          label='Email'
          name='email'
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <Input
          {...register('phoneNumber')}
          id='phoneNumber'
          type='tel'
          label='Phone Number'
          name='phoneNumber'
          onChange={(event) => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
        />
        <Stack sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleBack} variant='outlined'>
            Previous
          </Button>
          <PrimaryButton>Next</PrimaryButton>
        </Stack>
      </Form>
    </MainContainer>
  );
};

export default Step2;
