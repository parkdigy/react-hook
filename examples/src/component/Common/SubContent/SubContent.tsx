import React from 'react';
import { SubContentProps as Props } from './SubContent.types';
import { Divider, Stack } from '@mui/material';

export const SubContent = ({ title, children }: Props) => {
  return (
    <Container spacing={1.7}>
      <Title>{title}</Title>
      <Divider />
      <Content>{children}</Content>
    </Container>
  );
};

export default SubContent;

/********************************************************************************************************************
 * State
 * ******************************************************************************************************************/

const Container = styled(Stack)`
  border: 1px solid #afafaf;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Content = styled.div``;
