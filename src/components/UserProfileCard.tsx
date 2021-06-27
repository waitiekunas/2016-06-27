import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../store/selectors';
import { Row } from './Row';
import { Content, Wrapper } from './Wrapper';

export const UserProfileCard: React.FC = () => {
  const user = useSelector(selectUser);
  return (
    <Wrapper>
      <Content direction="row">
        <img src={user?.avatar_url} alt="avatar" />
        <Content direction="column">
          <Row label="Username: " value={user?.login} />
          <Row label="Follower count: " value={user?.score} />
        </Content>
      </Content>
    </Wrapper>
  );
};
