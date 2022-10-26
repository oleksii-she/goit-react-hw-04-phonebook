import { ContactsItem } from './contactsItem';
import { List } from './contacts.styled';
export const ContactsList = ({ dataList, onDeleteContact }) => {
  return (
    <List>
      {dataList.map(data => (
        <ContactsItem
          key={data.id}
          name={data.name}
          number={data.number}
          onClick={() => onDeleteContact(data.id)}
        />
      ))}
    </List>
  );
};
