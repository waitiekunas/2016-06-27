import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectRepository } from '../store/selectors';
import { Content } from '../styles';
import { Row } from './Row';

const StyledContent = styled(Content)`
  margin-top: 1rem;
  border: 1px transparent solid;
  border-bottom: 1px blue solid;
  cursor: pointer;
  &:hover {
    border: 1px red solid;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;

export const RepositoryInfo: React.FC = () => {
  const repositories = useSelector(selectRepository);

  return (
    <>
      {repositories?.map((repo) => (
        <StyledA href={repo.html_url} target="blank">
          <StyledContent direction="column">
            <Row label="Name: " value={repo.name} />
            <Row label="Stars count: " value={repo.stargazers_count} />
            <Row label="Language: " value={repo.language} />
            <Row label="Description: " value={repo.description} />
          </StyledContent>
        </StyledA>
      ))}
    </>
  );
};
