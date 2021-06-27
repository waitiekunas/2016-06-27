import styled from 'styled-components';

import { ContentProps } from '../types';

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
