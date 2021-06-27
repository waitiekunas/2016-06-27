import React from 'react';

import { UserProfileCard } from '../components/UserProfileCard';
import { Wrapper } from '../components/Wrapper';

export const ProfilePage: React.FC = () => {
  return (
    <Wrapper>
      <UserProfileCard />
    </Wrapper>
  );
};
