import { Link, useLocation } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const Actions = () => {
  const location = useLocation();

  return (
    <Tooltip title="Создать">
      <Link to="/create" state={{ background: location }}>
        <IconButton aria-label="create">
          <AddIcon fontSize="large" color="primary" />
        </IconButton>
      </Link>
    </Tooltip>
  );
};

export default Actions;
