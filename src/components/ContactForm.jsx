import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PropTypes from 'prop-types';

export const ContactForm = ({ change, submit, name, number }) => {
  return (
    <form onSubmit={submit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={change}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Number</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={change}
        />
      </InputGroup>

      <button
        style={{
          minWidth: '100px',
          borderRadius: '8px',
          backgroundClip: '#6c757d',
        }}
      >
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
