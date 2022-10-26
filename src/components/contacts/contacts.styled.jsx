import styled from 'styled-components';

export const List = styled.ul`
  padding: ${p => p.theme.space[0]}px;
`;
export const Item = styled.li`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Button = styled.button`
  border-radius: ${p => p.theme.space[1]}px;
  border: none;
  padding: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  font-size: small;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.primary};
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
