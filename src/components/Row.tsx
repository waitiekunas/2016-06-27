import React from 'react';
import styled from 'styled-components/macro';

import { Content } from './Wrapper';

type Props = {
  label: string;
  value?: string | number;
};

export const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Row: React.FC<Props> = ({ label, value }) => (
  <Content direction="row">
    <div>{label}</div>
    <div>{value}</div>
  </Content>
);
