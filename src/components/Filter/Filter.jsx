import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contacts-slice';
import { Label, Text, Input } from './Filter.styled';
import React from 'react';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = event =>
    dispatch(changeFilter(event.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFieldFilter} />
    </Label>
  );
}

export default Filter;
