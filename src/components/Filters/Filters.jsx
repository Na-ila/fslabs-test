import React from 'react';
import './filters.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearchStr, setDateFromLast } from '../../store/postSlice';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Filters = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((st) => st.postSlice);

  const handleToggle = () => {
    dispatch(setDateFromLast(!filters.dateFromLast));
  };

  return (
    <div className="filters_container">
      <TextField
        id="outlined-basic"
        label="Поиск"
        variant="outlined"
        value={filters.searchStr}
        onChange={(e) => dispatch(setSearchStr(e.target.value))}
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
          {filters.dateFromLast ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Filters;
