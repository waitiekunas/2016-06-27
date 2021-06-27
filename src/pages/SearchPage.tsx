import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserResult } from '../components/UserResult';
import { searchUserAction, setUserResultsAction } from '../store/actions/apiActions';
import { selectUserNames } from '../store/selectors';
import { Content, WrapperDiv } from '../styles';

export const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const userNames = useSelector(selectUserNames);
  const handleChange = (query: string) => {
    if (query) {
      dispatch(searchUserAction(query));
    } else {
      dispatch(setUserResultsAction([]));
    }
  };
  return (
    <WrapperDiv>
      <Content direction="column">
        <h3>Please enter GitHub username query</h3>
        <TextField
          id="standard-search"
          type="search"
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
        {userNames &&
          userNames.map((user) => <UserResult user={user} key={user.id} />)}
      </Content>
    </WrapperDiv>
  );
};
