export const Filter = ({ filterChange }) => {
  return (
    <>
      <p>Finde contacts by name</p>
      <input type="text" name="filter" onChange={filterChange} />
    </>
  );
};
