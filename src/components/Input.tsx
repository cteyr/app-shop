const Input = ({ placeholder }: IProp) => {
  return (
    <input type="text" className="searchInput" placeholder={placeholder} />
  );
};

type IProp = {
  placeholder: string;
};
export { Input };
