import { Formik, Form, Field } from 'formik';

import { nanoid } from 'nanoid';
import { Label, Button } from './form.styled';

export const FormData = ({ onSubmit }) => {
  const nameId = nanoid();
  const tagInputId = nanoid();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    console.log(number);
    onSubmit(name, number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form action="">
        <Label htmlFor={nameId}>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={tagInputId}
            required
          />
        </Label>
        <Label htmlFor={nameId}>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={tagInputId}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
