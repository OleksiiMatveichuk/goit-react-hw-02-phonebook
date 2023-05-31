export const ContactForm = ({ change, submit, name, number }) => {
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="name"
        value={name}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={change}
      />
      <input
        type="tel"
        name="number"
        value={number}
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={change}
      />
      <button>Add contact</button>
    </form>
  );
};
