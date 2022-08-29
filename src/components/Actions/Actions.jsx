import { useAppDispatch } from '../../hooks/hooks';
import { setModalWindow } from '../../store/postSlice';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const Actions = () => {
  const dispatch = useAppDispatch();

  const createPost = () => {
    dispatch(
      setModalWindow({
        open: true,
        type: 'create',
        id: '',
      })
    );
  };

  return (
    <Tooltip title="Создать">
      <IconButton aria-label="create" onClick={createPost}>
        <AddIcon fontSize="large" color="primary" />
      </IconButton>
    </Tooltip>
  );
};

export default Actions;
