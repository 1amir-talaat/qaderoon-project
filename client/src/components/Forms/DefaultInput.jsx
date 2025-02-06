const DefaultInput = ({
  name,
  onChange,
  required = false,
  value,
  type,
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        className="border-stroke disabled:bg-gray-2 disabled:border-gray-2 w-full rounded-md border bg-transparent px-5 py-[10px] text-gray-700 transition outline-none focus:border-primary active:border-primary disabled:cursor-default"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        required={required}
        {...rest}
      />
    </>
  );
};

export default DefaultInput;
