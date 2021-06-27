import React from 'react';
import styled from 'styled-components';

import { Content } from '../styles';

type Props = {
  label: string;
  value?: string | number;
};

export const StyledDiv = styled.div`
  margin-right: 1rem;
`;

export const Row: React.FC<Props> = ({ label, value }) => (
  <Content direction="row">
    <StyledDiv>{label}</StyledDiv>
    <div>{value}</div>
  </Content>
);
