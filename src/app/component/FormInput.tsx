import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  value: string | number | boolean;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  type,
  onChange,
}) => {
  return (
    <div className="w-full p-1 grid grid-cols-2 text-black">
      <label htmlFor={name} className="mr-2 text-white">
        {label}
      </label>
      {typeof value === "boolean" ? (
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={value}
          onChange={onChange}
          className="border rounded p-1"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type} // Default type; adjust based on props
          value={value}
          onChange={onChange}
          className="border rounded p-1"
        />
      )}
    </div>
  );
};

export default FormInput;
