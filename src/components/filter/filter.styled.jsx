import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${p => p.theme.space[3]}px;
  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
