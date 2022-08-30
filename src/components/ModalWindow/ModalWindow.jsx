import './modal.scss';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import Delete from './Delete';
import PostForm from './PostForm';
import PostInfo from './PostInfo/PostInfo';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
      <Box className="modal_container">
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
