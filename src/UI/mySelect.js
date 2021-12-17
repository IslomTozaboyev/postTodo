import React from "react";

const MySelect = ({ defaultValue, value, onChange, options }) => {
  return (
    <div>
      <select
        className="form-select mb-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled>{defaultValue}</option>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MySelect;
