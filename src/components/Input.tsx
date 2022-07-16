const Input = ({ placeholder, value, handleInputChange }: IProp) => {
  return (
    <input
      type="text"
      className="searchInput"
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

type IProp = {
  placeholder: string;
  value?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export { Input };
