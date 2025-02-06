const SelectInput = ({
  name,
  onChange,
  required = false,
  value,
  options,
  defaultValue = "",
  ...rest
}) => {
  return (
    <>
      <div className="relative z-20">
        <select
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          required={required}
          {...rest}
          className="border-stroke disabled:bg-gray-2 relative z-20 w-full appearance-none rounded-lg border bg-transparent px-5 py-[10px] text-gray-700 transition outline-none focus:border-primary active:border-primary disabled:cursor-default">
          <option value="">{defaultValue}</option>
          {options.map((author) => (
            <option key={author._id} value={author._id}>
              {author.name}
            </option>
          ))}
        </select>
        <span className="border-body-color absolute top-1/2 left-4 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2" />
      </div>
    </>
  );
};

export default SelectInput;
