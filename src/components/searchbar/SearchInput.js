export const SearchInput = ({ value }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search something..."
        role="search"
        value={value}
        onChange={() => null}
      />
    </>
  );
};
