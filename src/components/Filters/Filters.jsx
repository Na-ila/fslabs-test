import React from 'react';
import './filters.scss';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Filters = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [dateUp, setDateUp] = React.useState(false);

  const handleToggle = () => {
    setDateUp((prev) => !prev);
  };

  return (
    <div className="filters_container">
      <TextField
        id="outlined-basic"
        label="Поиск"
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        size="small"
      />
      <ButtonGroup variant="contained" aria-label="split button">
        <Button disableRipple>Дата</Button>
        <Button
          size="small"
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {dateUp ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Filters;
