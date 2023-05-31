export const Filter = ({ filterChange, value }) => {
  return (
    <>
      <p>Finde contacts by name</p>
      <input type="text" name="filter" value={value} onChange={filterChange} />
    </>
  );
};
