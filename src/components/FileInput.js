import React from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { Controller } from 'react-hook-form';
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CloudUpload from '@mui/icons-material/CloudUpload';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';
import { styled } from '@mui/material/styles';

const CustomizedPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#eee',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#333',
  padding: '10px',
  marginTop: '20px',
}));

const CustomizedCloudUpload = styled(CloudUpload)(({ theme }) => ({
  marginTop: '16px',
  color: '#888888',
  fontSize: '42px',
}));

const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <CustomizedPaper variant='outlined' {...getRootProps()}>
                <CustomizedCloudUpload />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </CustomizedPaper>
            )}
          </Dropzone>
          <List>
            {value?.map((f, index) => (
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
    />
  );
};

export default FileInput;
