import { Link, useLocation, Outlet } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const Actions = () => {
  const location = useLocation();

  return (
    <>
      <Link to="/create" state={{ background: location }}>
        <Tooltip title="Создать">
          <IconButton aria-label="create" style={{ padding: 0 }}>
            <AddIcon fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>
      </Link>
      <Outlet />
    </>
  );
};

export default Actions;
