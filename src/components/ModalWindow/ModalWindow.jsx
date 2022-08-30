import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import Delete from './Delete';
import PostForm from './PostForm';
import PostInfo from './PostInfo/PostInfo';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => navigate('/');

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Box sx={style}>
        {location.pathname === `/delete/${params.id}` ? (
          <Delete />
        ) : location.pathname === '/create' ? (
          <PostForm type="create" />
        ) : location.pathname === `/edit/${params.id}` ? (
          <PostForm type="edit" />
        ) : location.pathname === `/post/${params.id}` ? (
          <PostInfo />
        ) : (
          <></>
        )}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
