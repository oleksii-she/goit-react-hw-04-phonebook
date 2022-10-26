import PropTypes from 'prop-types';
import { Item, Button } from './contacts.styled';

export const ContactsItem = ({ name, number, onClick }) => {
  return (
    <Item>
      {name}:<span>{number}</span>
      <Button onClick={onClick}>Dellete</Button>
    </Item>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
