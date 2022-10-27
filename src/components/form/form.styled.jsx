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

export const Button = styled.button`
  border-radius: ${p => p.theme.space[1]}px;
  border: none;
  padding: ${p => p.theme.space[2]}px;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
