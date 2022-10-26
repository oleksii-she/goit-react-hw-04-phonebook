import { Label } from './filter.styled';
export const Filter = ({ onChange }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <input type="text" onChange={onChange} />
    </Label>
  );
};
