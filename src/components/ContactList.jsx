export const ContactList = ({ array, clbDelete }) => {
  return (
    <ul>
      {array.map((el, i) => (
        <li key={i + 1}>
          <p>
            {el.name}: {el.number}
          </p>
          <button type="button" name={el.id} onClick={clbDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
