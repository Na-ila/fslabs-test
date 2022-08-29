import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const Actions = () => {
  const createPost = () => {};

  return (
    <IconButton aria-label="create" onClick={createPost}>
      <AddIcon fontSize="large" color="primary" />
    </IconButton>
  );
};

export default Actions;
