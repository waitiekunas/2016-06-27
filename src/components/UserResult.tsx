import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PagesPaths } from '../constants/pagesPaths';
import { setUserAction } from '../store/actions/appActions';
import { User } from '../types';

export const StyledDiv = styled.div`
  padding: 0.5rem;
  border-bottom: 0.5px blue solid;
  cursor: pointer;
  &:hover {
    border: 1px red solid;
  }
  margin: 0.5rem 0 0 0;
`;

type Props = {
  user: User;
};

export const UserResult: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setUserAction(user));

  return (
    <Link to={PagesPaths.Profile}>
      <StyledDiv onClick={handleClick}>{user.login}</StyledDiv>
    </Link>
  );
};
