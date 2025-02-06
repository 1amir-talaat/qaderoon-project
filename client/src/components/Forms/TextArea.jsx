import { FaRegEdit } from "react-icons/fa";

const Textarea = ({ name, onChange, required = false, value, ...rest }) => {
  return (
    <>
      <div className="relative flex">
        {value?.length === 0 && (
          <span className="absolute top-[18px] left-4">
            <FaRegEdit size={20} />
          </span>
        )}
        <textarea
          type="text"
          rows="6"
          className="border-stroke disabled:bg-gray-2 w-full rounded-md border bg-transparent p-3 pl-12 text-gray-700 transition outline-none focus:border-primary active:border-primary disabled:cursor-default"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          required={required}
          {...rest}
        />
      </div>
    </>
  );
};

export default Textarea;
