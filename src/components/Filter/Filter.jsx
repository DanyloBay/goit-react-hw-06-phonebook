import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts-slice';
import { getFilter } from '../../redux/constants'
import { Label, Text, Input } from './Filter.styled';
import React from 'react';

const Filter = () => {
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
