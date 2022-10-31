import React from "react";

export default function Input({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label for={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
