import { Avatar, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { RepositoryInfo } from '../components/RepositoryInfo';
import { Row } from '../components/Row';
import { PagesPaths } from '../constants/pagesPaths';
import { getUserRepositoriesAction, setUserResultsAction } from '../store/actions/apiActions';
import { selectUser } from '../store/selectors';
import { Content, WrapperDiv } from '../styles';

const StyledDiv = styled.div`
  margin-top: 1rem;
`;
export const ProfilePage: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) dispatch(getUserRepositoriesAction(user.login));
  });

  const handleBack = () => dispatch(setUserResultsAction([]));
  return (
    <WrapperDiv>
      <Content direction="column">
        <Content direction="row">
          <Avatar src={user?.avatar_url} alt="avatar" />
          <Content direction="column">
            <Row label="Username: " value={user?.login} />
            <Row label="Follower count: " value={user?.score} />
          </Content>
        </Content>
        <RepositoryInfo />
        <StyledDiv>
          <Link to={PagesPaths.Search}>
            <Button variant="contained" onClick={handleBack}>
              Back
            </Button>
          </Link>
        </StyledDiv>
      </Content>
    </WrapperDiv>
  );
};
