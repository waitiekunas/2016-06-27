import React from 'react';
import styled from 'styled-components/macro';

type ContentProps = {
  direction: "column" | "row";
};

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
export const Wrapper: React.FC = ({ children }) => (
  <Wrapper>
    <Content direction="column">{children}</Content>
  </Wrapper>
);
