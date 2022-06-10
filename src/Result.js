import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';
import { useData } from './store/DataContext';
import MainContainer from './components/MainContainer';
import PrimaryButton from './components/PrimaryButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

const CustomizedTable = styled(Table)(({ theme }) => ({
  marginBottom: '30px',
}));

const CustomizedTableContainer = styled(TableContainer)(({ theme }) => ({
  marginBottom: '30px',
}));

const Result = () => {
  const [success, setSuccess] = useState(false);

  const { data } = useData();

  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;

  const onSubmit = async () => {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
        formData.append('files', file, file.name);
      });
    }

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const res = await fetch('http://localhost:4000/', {
      method: 'POST',
      body: formData,
    });

    if (res.status === 200) {
      Swal.fire('Great job!', "You've passed the challenge!", 'success');
      setSuccess(true);
    }
  };

  if (success) {
    return <Confetti />;
  }

  return (
    <>
      <MainContainer>
        <Typography component='h2' variant='h5'>
          📋 Form Values
        </Typography>
        <CustomizedTableContainer component={Paper}>
          <CustomizedTable aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align='right'>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry[0]}>
                  <TableCell component='th' scope='row'>
                    {entry[0]}
                  </TableCell>
                  <TableCell align='right'>{entry[1].toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </CustomizedTable>
        </CustomizedTableContainer>
        {files && (
          <>
            <Typography component='h2' variant='h5'>
              📦 Files
            </Typography>
            <List>
              {files.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
        <Link to='/'>Start over</Link>
      </MainContainer>
    </>
  );
};

export default Result;
