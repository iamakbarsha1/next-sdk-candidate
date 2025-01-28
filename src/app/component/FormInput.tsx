import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  value: string | number | boolean;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFilled: boolean | string;
  options?: Array<{ label: string; value: string | boolean }>;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  type,
  onChange,
  isFilled,
  options,
}) => {
  return (
    <div className="w-full p-1 grid grid-cols-2 text-black">
      <label htmlFor={name} className="mr-2 text-white">
        {label} {!isFilled && <span className="text-red-500">*</span>}
      </label>
      {type === "radio" && options ? (
        <div className="flex space-x-4">
          {options.map((option, index) => {
            console.log("label - ", option?.label);
            console.log("option.value - ", option.value);
            return (
              <div key={index} className="flex items-center space-x-2">
                <input
                  id={option?.label}
                  name={name}
                  type="radio"
                  value={String(option.label)} // Convert value to string for comparison
                  checked={value === option.value}
                  onChange={onChange}
                  className="border rounded p-1"
                />
                <label htmlFor={option?.label} className="text-white">
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>
      ) : type === "checkbox" ? (
        <input
          id={name}
          name={name}
          type={type}
          checked={value as boolean}
          onChange={onChange}
          className="border rounded p-1"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value as string | number}
          onChange={onChange}
          className="border rounded p-1"
        />
      )}
    </div>
  );
};

export default FormInput;
